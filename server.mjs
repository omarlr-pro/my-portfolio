import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = resolve(__dirname);

function loadLocalEnv() {
    const envPath = join(rootDir, '.env');
    if (!existsSync(envPath)) return;

    const lines = readFileSync(envPath, 'utf8').split(/\r?\n/);
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
        const [key, ...valueParts] = trimmed.split('=');
        if (!process.env[key]) {
            process.env[key] = valueParts.join('=').trim();
        }
    }
}

loadLocalEnv();

const port = Number(process.env.PORT || 3000);
const openRouterApiKey = process.env.OPENROUTER_API_KEY || '';
const openRouterModel = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
const siteUrl = process.env.SITE_URL || `http://localhost:${port}`;
const siteName = process.env.SITE_NAME || 'Omar Portfolio';

const rateLimits = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 12;
const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_ITEMS = 10;
const MAX_HISTORY_CONTENT_LENGTH = 1000;

const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf'
};

const systemPrompt = `You are Omar Laraje's portfolio assistant.

Always respond with professionalism: clear, structured, concise, and confident language.

Identity:
Omar Laraje is a Moroccan engineering student specializing in Business Intelligence and Data Science, with a strong background in software development and intelligent systems engineering.

Profile:
Omar focuses on complete, real-world data solutions: data collection, structuring, analysis, visualization, prediction, and deployment. He combines data engineering, analytics, and artificial intelligence to transform raw data into actionable insights.

Education:
- Engineering studies in Business Intelligence and Data Science.
- Bachelor's degree in Web and Mobile Development from ISMAGI.
- Specialized Technician Diploma in Full-Stack Development from ISTAG Bab Tizimi, Meknes.

Technical skills:
- SQL Server, SSIS, SSAS, Power BI, DAX, data modeling, data warehousing.
- Python, Java, PHP, JavaScript, Laravel, REST APIs, Streamlit.
- NLP, computer vision, classification, predictive analytics, real-time monitoring.

Major projects:
- CNN-based student attendance management system.
- Fake news detection platform using NLP, TF-IDF, and machine learning.
- BI pipeline using SQL Server, SSIS, SSAS, and Power BI for banking analytics.
- Real-time monitoring and predictive analytics platform for power plants.
- ISMAGI Assistant, a Streamlit conversational application.
- Recruitment management web platform.

Professional presence:
- LinkedIn: https://www.linkedin.com/in/omar-laraje-998827233/
- GitHub: https://github.com/omarlr-pro
- X: https://x.com/Omargaimor
- Instagram: https://www.instagram.com/omar_lr___/
- Facebook: https://www.facebook.com/profile.php?id=100006696917617

Rules:
- Use only verified information from this profile.
- Never invent facts.
- If a detail is unknown, say the information is unavailable and suggest contacting Omar.`;

function jsonResponse(res, status, data) {
    res.writeHead(status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store'
    });
    res.end(JSON.stringify(data));
}

function getClientIp(req) {
    const forwardedFor = req.headers['x-forwarded-for'];
    if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
        return forwardedFor.split(',')[0].trim();
    }

    return req.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
    const now = Date.now();
    const bucket = rateLimits.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };

    if (now > bucket.resetAt) {
        bucket.count = 0;
        bucket.resetAt = now + RATE_LIMIT_WINDOW_MS;
    }

    bucket.count += 1;
    rateLimits.set(ip, bucket);

    return bucket.count > RATE_LIMIT_MAX_REQUESTS;
}

async function readRequestJson(req) {
    let body = '';

    for await (const chunk of req) {
        body += chunk;
        if (body.length > 20_000) {
            throw new Error('request_too_large');
        }
    }

    return JSON.parse(body || '{}');
}

function validateHistory(history) {
    if (!Array.isArray(history)) return [];

    return history
        .slice(-MAX_HISTORY_ITEMS)
        .filter((item) => item && ['user', 'assistant'].includes(item.role) && typeof item.content === 'string')
        .map((item) => ({
            role: item.role,
            content: item.content.slice(0, MAX_HISTORY_CONTENT_LENGTH)
        }));
}

async function handleChatbot(req, res) {
    if (req.method !== 'POST') {
        return jsonResponse(res, 405, { error: 'Method not allowed' });
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
        return jsonResponse(res, 429, { code: 'rate_limited', error: 'Too many requests' });
    }

    if (!openRouterApiKey) {
        return jsonResponse(res, 503, { code: 'missing_api_key', error: 'Chatbot backend is not configured' });
    }

    let payload;
    try {
        payload = await readRequestJson(req);
    } catch (_) {
        return jsonResponse(res, 400, { code: 'invalid_json', error: 'Invalid JSON request' });
    }

    const message = typeof payload.message === 'string' ? payload.message.trim() : '';
    if (!message || message.length > MAX_MESSAGE_LENGTH) {
        return jsonResponse(res, 400, { code: 'invalid_message', error: 'Message must be between 1 and 500 characters' });
    }

    const history = validateHistory(payload.history);

    try {
        const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${openRouterApiKey}`,
                'HTTP-Referer': siteUrl,
                'X-Title': siteName
            },
            body: JSON.stringify({
                model: openRouterModel,
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...history,
                    { role: 'user', content: message }
                ],
                temperature: 0.2,
                max_tokens: 500
            })
        });

        const data = await upstream.json().catch(() => null);

        if (!upstream.ok) {
            return jsonResponse(res, upstream.status, {
                code: 'provider_error',
                error: data?.error?.message || data?.message || 'Chatbot provider error'
            });
        }

        const answer = data?.choices?.[0]?.message?.content;
        if (typeof answer !== 'string' || !answer.trim()) {
            return jsonResponse(res, 502, { code: 'invalid_provider_response', error: 'Invalid chatbot provider response' });
        }

        return jsonResponse(res, 200, { answer: answer.trim() });
    } catch (_) {
        return jsonResponse(res, 502, { code: 'provider_unavailable', error: 'Chatbot provider is unavailable' });
    }
}

async function serveStatic(req, res) {
    const url = new URL(req.url || '/', siteUrl);
    const requestedPath = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname);
    const filePath = normalize(join(rootDir, requestedPath));

    if (!filePath.startsWith(rootDir) || !existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
    }

    const ext = extname(filePath);
    const content = await readFile(filePath);
    res.writeHead(200, {
        'Content-Type': contentTypes[ext] || 'application/octet-stream',
        'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
    });
    res.end(content);
}

createServer(async (req, res) => {
    try {
        if (req.url?.startsWith('/api/chatbot')) {
            await handleChatbot(req, res);
            return;
        }

        await serveStatic(req, res);
    } catch (_) {
        jsonResponse(res, 500, { error: 'Internal server error' });
    }
}).listen(port, () => {
    process.stdout.write(`Portfolio server running at http://localhost:${port}\n`);
});
