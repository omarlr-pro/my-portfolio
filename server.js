const http = require('http');
const fs = require('fs');
const path = require('path');

function loadDotEnv() {
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;

  const raw = fs.readFileSync(envPath, 'utf8');
  const lines = raw.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const eqIndex = trimmed.indexOf('=');
    if (eqIndex <= 0) continue;

    const key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadDotEnv();

const PORT = Number(process.env.PORT || 5500);
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_SITE_URL = process.env.OPENROUTER_SITE_URL || `http://localhost:${PORT}`;
const OPENROUTER_SITE_NAME = process.env.OPENROUTER_SITE_NAME || 'Omar Portfolio';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

async function handleChat(req, res) {
  if (!OPENROUTER_API_KEY) {
    return sendJson(res, 500, {
      error: {
        message: 'Server is missing OPENROUTER_API_KEY in environment variables.'
      }
    });
  }

  let body;
  try {
    body = await parseRequestBody(req);
  } catch (error) {
    return sendJson(res, 400, { error: { message: error.message } });
  }

  const model = typeof body.model === 'string' && body.model.trim() ? body.model : 'openai/gpt-4o-mini';
  const temperature = typeof body.temperature === 'number' ? body.temperature : 0.2;
  const maxTokens = typeof body.max_tokens === 'number' ? body.max_tokens : 500;
  const messages = Array.isArray(body.messages) ? body.messages : [];

  if (messages.length === 0) {
    return sendJson(res, 400, { error: { message: 'messages is required.' } });
  }

  try {
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': OPENROUTER_SITE_URL,
        'X-Title': OPENROUTER_SITE_NAME
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens: maxTokens
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data?.error?.message || data?.message || `OpenRouter request failed with ${response.status}`;
      return sendJson(res, response.status, { error: { message: errorMessage } });
    }

    return sendJson(res, 200, data);
  } catch (error) {
    return sendJson(res, 502, {
      error: {
        message: `Proxy request failed: ${error.message}`
      }
    });
  }
}

function safeResolvePath(urlPath) {
  const normalized = path.normalize(urlPath).replace(/^([.][.][/\\])+/, '');
  return path.join(process.cwd(), normalized);
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  if (urlPath === '/') {
    urlPath = '/index.html';
  }

  const filePath = safeResolvePath(urlPath);
  const ext = path.extname(filePath).toLowerCase();

  if (!filePath.startsWith(process.cwd())) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (statErr, stat) => {
    if (statErr || !stat.isFile()) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/chat') {
    await handleChat(req, res);
    return;
  }

  if (req.method === 'GET' || req.method === 'HEAD') {
    serveStatic(req, res);
    return;
  }

  res.writeHead(405);
  res.end('Method Not Allowed');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
