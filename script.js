// Animated Background Particles - Initialize after DOM is ready
function initParticles() {
    const bgAnimation = document.getElementById('bgAnimation');
    if (!bgAnimation) return;
    
    bgAnimation.innerHTML = ''; // Clear existing particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 100 + 50 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        bgAnimation.appendChild(particle);
    }
}

// Language Switcher
let currentLang = localStorage.getItem('language') || 'en';
let isTranslating = false;

function translatePage(lang) {
    // Prevent multiple simultaneous translations
    if (isTranslating) {
        return;
    }
    
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded yet');
        return;
    }

    if (!translations[lang]) {
        console.error(`Language ${lang} not found in translations`);
        return;
    }

    // Don't translate if it's the same language
    if (currentLang === lang) {
        return;
    }

    isTranslating = true;
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Set text direction for Arabic
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const keys = element.getAttribute('data-translate').split('.');
        let translation = translations[lang];

        if (!translation) return;

        for (const key of keys) {
            if (translation && translation[key]) {
                translation = translation[key];
            } else {
                console.warn(`Translation key not found: ${keys.join('.')} for language ${lang}`);
                return;
            }
        }

        if (translation && typeof translation === 'string') {
            // Special handling for hero name - always use typewriter
            if (element.id === 'heroName') {
                // Cancel any ongoing typewriter first
                if (typewriterTimeout) {
                    clearTimeout(typewriterTimeout);
                    typewriterTimeout = null;
                }
                // Reset the current element
                currentTypewriterElement = null;
                // Clear and retype with new translation
                element.textContent = '';
                element.classList.add('typed');
                element.classList.remove('typing');
                // Small delay to ensure previous animation is cleared
                setTimeout(() => {
                    typeWriter(element, translation, 150);
                }, 50);
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update placeholder translations
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const keys = element.getAttribute('data-translate-placeholder').split('.');
        let translation = translations[lang];

        if (!translation) return;

        for (const key of keys) {
            if (translation && translation[key]) {
                translation = translation[key];
            } else {
                return;
            }
        }

        if (translation && typeof translation === 'string') {
            element.placeholder = translation;
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Reset translation flag after a short delay
    setTimeout(() => {
        isTranslating = false;
        
        // Update see more button text after translation
        if (typeof updateSeeMoreButtonText === 'function') {
            updateSeeMoreButtonText();
        }
    }, 300);
}

// Theme Switcher
let isDarkMode = localStorage.getItem('theme') !== 'light';

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = themeBtn?.querySelector('.theme-icon');
    
    if (!themeBtn) return;

    if (isDarkMode) {
        document.body.classList.remove('light-mode');
        if (themeIcon) themeIcon.textContent = '☾';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light-mode');
        if (themeIcon) themeIcon.textContent = '☀';
        localStorage.setItem('theme', 'light');
    }
}

// Language switcher event listeners - use event delegation (set once)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lang-btn')) {
        const lang = e.target.getAttribute('data-lang');
        if (lang) {
            translatePage(lang);
        }
    }
});

// Theme toggle event listener - use event delegation (set once)
document.addEventListener('click', (e) => {
    if (e.target.id === 'themeToggle' || e.target.closest('#themeToggle')) {
        toggleTheme();
    }
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    let overlay = document.querySelector('.nav-overlay');
    
    if (!mobileToggle || !navLinks) return;

    // Create overlay if it doesn't exist
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    function toggleMenu() {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }

    mobileToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMenu, 300);
        });
    });
}

// Typewriter effect for hero name
let typewriterTimeout = null;
let typewriterIndex = 0;
let currentTypewriterElement = null;

function typeWriter(element, text, speed = 100) {
    if (!element || !text) return;
    
    // Cancel any ongoing typewriter animation
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
        typewriterTimeout = null;
    }
    
    // Clear the element and reset
    element.textContent = '';
    element.classList.add('typing');
    typewriterIndex = 0;
    currentTypewriterElement = element;
    
    function type() {
        // Check if this is still the current animation (prevent overlapping)
        if (currentTypewriterElement !== element) {
            return;
        }
        
        if (typewriterIndex < text.length) {
            element.textContent = text.substring(0, typewriterIndex + 1);
            typewriterIndex++;
            typewriterTimeout = setTimeout(type, speed);
        } else {
            // Remove cursor after a short delay
            setTimeout(() => {
                if (currentTypewriterElement === element) {
                    element.classList.remove('typing');
                    currentTypewriterElement = null;
                }
            }, 1000);
            typewriterTimeout = null;
        }
    }
    
    type();
}

// Initialize typewriter effect (only if hero name hasn't been typed yet)
function initTypewriter(delay = 500) {
    const heroName = document.getElementById('heroName');
    if (heroName) {
        // Only run if hero name is empty or hasn't been typed yet
        // (translatePage will handle it if translations are loaded)
        const nameText = heroName.textContent.trim();
        if (nameText && nameText.length > 0 && !heroName.classList.contains('typed')) {
            // Mark as will be typed
            heroName.classList.add('typed');
            // Clear the text first, then type it
            heroName.textContent = '';
            // Wait a bit for page to load, then start typing
            setTimeout(() => {
                typeWriter(heroName, nameText, 150);
            }, delay);
        }
    }
}

// Initialize theme and language
function initializeApp() {
    // Set initial theme
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        isDarkMode = savedTheme !== 'light';
        
        if (!isDarkMode) {
            document.body.classList.add('light-mode');
            if (themeIcon) themeIcon.textContent = '☀';
        } else {
            document.body.classList.remove('light-mode');
            if (themeIcon) themeIcon.textContent = '☾';
        }
    }

    // Initialize mobile menu
    initMobileMenu();

    // Set initial language (wait for translations to be available)
    if (typeof translations !== 'undefined') {
        translatePage(currentLang);
    }
    
    // Initialize typewriter effect
    initTypewriter();
}

// Smooth Scrolling - use event delegation
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

// Scroll Animation Observer
function initScrollObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Add alternating slide animations to timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('slide-in-left');
        } else {
            item.classList.add('slide-in-right');
        }
        // Add staggered delay
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Add alternating slide animations to project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('slide-in-left');
        } else {
            card.classList.add('slide-in-right');
        }
        // Add staggered delay
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });

    // Add alternating slide animations to skill categories
    document.querySelectorAll('.skill-category').forEach((skill, index) => {
        if (index % 2 === 0) {
            skill.classList.add('slide-in-left');
        } else {
            skill.classList.add('slide-in-right');
        }
        // Add staggered delay
        skill.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(skill);
    });
}

// Project Card Click Animation - use event delegation
document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    }
});

// Parallax Effect on Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// Dynamic Nav Background
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (window.scrollY > 100) {
        nav.style.background = isLightMode ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 0, 0, 0.98)';
    } else {
        nav.style.background = isLightMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)';
    }
});
// Initialize everything when sections are loaded
// Handler to run when sections are loaded (extracted so it can be called
// both when the event fires and when the script is loaded after sections)
function handleSectionsLoaded() {
    // Initialize particles
    initParticles();

    // Initialize scroll observer
    initScrollObserver();

    // Initialize custom cursor
    initCustomCursor();

    // Initialize scroll to top
    initScrollToTop();

    // Initialize project filters
    initProjectFilters();

    // Initialize see more button
    initSeeMoreButton();

    // Initialize contact form
    initContactForm();

    // Apply translations first, then initialize app
    if (typeof translations !== 'undefined' && currentLang) {
        translatePage(currentLang);
        setTimeout(() => {
            initializeApp();
        }, 100);
    } else {
        initializeApp();
    }
}

document.addEventListener("sectionsLoaded", handleSectionsLoaded);

// If sections were already injected before this script loaded, run the handler
// so features that depend on section markup (filters/see-more) are initialized.
if (document.getElementById('nav-section')?.innerHTML) {
    // run slightly later to ensure DOM is stable
    setTimeout(handleSectionsLoaded, 50);
}

// Custom Cursor Effect
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const trails = [];
    const maxTrails = 8;

    // Create cursor trails
    for (let i = 0; i < maxTrails; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trails.push({
            element: trail,
            x: 0,
            y: 0,
            opacity: 0
        });
    }

    // Update cursor position
    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Update trails
        let prevX = cursorX;
        let prevY = cursorY;
        trails.forEach((trail, index) => {
            const delay = (index + 1) * 0.05;
            trail.x += (prevX - trail.x) * (0.2 + delay);
            trail.y += (prevY - trail.y) * (0.2 + delay);
            trail.element.style.left = trail.x + 'px';
            trail.element.style.top = trail.y + 'px';
            trail.element.style.opacity = (1 - index / maxTrails) * 0.4;
            prevX = trail.x;
            prevY = trail.y;
        });

        requestAnimationFrame(updateCursor);
    }

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Hover effects - use event delegation for dynamically loaded elements
    document.addEventListener('mouseenter', (e) => {
        const target = e.target;
        if (target.matches('a, button, .btn, .project-card, .skill-category, .contact-card, .lang-btn, .theme-btn, .nav-links a')) {
            cursor.classList.add('hover');
        }
    }, true);

    document.addEventListener('mouseleave', (e) => {
        const target = e.target;
        if (target.matches('a, button, .btn, .project-card, .skill-category, .contact-card, .lang-btn, .theme-btn, .nav-links a')) {
            cursor.classList.remove('hover');
        }
    }, true);

    // Click effect
    document.addEventListener('click', (e) => {
        // Ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);

        // Cursor click animation
        cursor.classList.add('click');
        setTimeout(() => {
            cursor.classList.remove('click');
        }, 200);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Hide cursor on mobile/touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        trails.forEach(trail => trail.element.style.display = 'none');
        document.body.style.cursor = 'auto';
    } else {
        // Enable custom cursor
        document.body.classList.add('custom-cursor-enabled');
        updateCursor();
    }
}

// Also try to initialize if sections are already loaded when script runs
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (document.getElementById('nav-section')?.innerHTML) {
                initParticles();
                initScrollObserver();
                initializeApp();
            }
            initCustomCursor();
            initScrollToTop();
            initProjectFilters();
            initSeeMoreButton();
            initContactForm();
        }, 500);
    });
} else {
    // DOM already loaded, check if sections exist
    setTimeout(() => {
        if (document.getElementById('nav-section')?.innerHTML) {
            initParticles();
            initScrollObserver();
            initializeApp();
        }
        initCustomCursor();
    }, 500);
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Project Filters - using event delegation to handle dynamically loaded content
let projectFiltersInitialized = false;

function handleFilterClick(btn) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
        if (filter === 'all') {
            card.classList.remove('hidden');
        } else {
            const categories = card.getAttribute('data-category');
            if (categories) {
                // Split categories by space and check if filter exists as a whole word
                const categoryArray = categories.split(' ');
                if (categoryArray.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

function initProjectFilters() {
    // Use event delegation on document to handle dynamically loaded buttons
    if (!projectFiltersInitialized) {
        document.addEventListener('click', (e) => {
            // Check if clicked element or its parent is a filter button
            let btn = null;
            if (e.target.classList && e.target.classList.contains('filter-btn')) {
                btn = e.target;
            } else if (e.target.closest) {
                btn = e.target.closest('.filter-btn');
            }
            
            if (btn) {
                handleFilterClick(btn);
            }
        });
        projectFiltersInitialized = true;
    }
    
    // Also try to attach direct listeners as fallback
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        // Remove existing listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleFilterClick(newBtn);
        });
    });
}

// See More Button Handler
let isProjectsExpanded = false;
let seeMoreButtonInitialized = false;

function handleSeeMoreClick() {
    isProjectsExpanded = !isProjectsExpanded;
    const moreProjects = document.querySelectorAll('.project-more');
    
    moreProjects.forEach(project => {
        if (isProjectsExpanded) {
            project.classList.add('show');
        } else {
            project.classList.remove('show');
        }
    });

    updateSeeMoreButtonText();
}

function initSeeMoreButton() {
    // Use event delegation to handle dynamically loaded button
    if (!seeMoreButtonInitialized) {
        document.addEventListener('click', (e) => {
            // Check if clicked element or its parent is the see more button
            let btn = null;
            if (e.target.id === 'seeMoreBtn') {
                btn = e.target;
            } else if (e.target.closest) {
                btn = e.target.closest('#seeMoreBtn');
            }
            
            if (btn) {
                handleSeeMoreClick();
            }
        });
        seeMoreButtonInitialized = true;
    }
    
    // Also try to attach direct listener as fallback
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    if (seeMoreBtn) {
        // Remove existing listeners by cloning
        const newBtn = seeMoreBtn.cloneNode(true);
        seeMoreBtn.parentNode.replaceChild(newBtn, seeMoreBtn);
        newBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleSeeMoreClick();
        });
        updateSeeMoreButtonText();
    } else {
        // Retry if element doesn't exist yet
        setTimeout(() => {
            const retryBtn = document.getElementById('seeMoreBtn');
            if (retryBtn) {
                const newBtn = retryBtn.cloneNode(true);
                retryBtn.parentNode.replaceChild(newBtn, retryBtn);
                newBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    handleSeeMoreClick();
                });
                updateSeeMoreButtonText();
            }
        }, 500);
    }
}

function updateSeeMoreButtonText() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    if (!seeMoreBtn) return;

    if (typeof translations !== 'undefined' && currentLang) {
        const btnText = isProjectsExpanded 
            ? translations[currentLang].projects.seeLess 
            : translations[currentLang].projects.seeMore;
        seeMoreBtn.textContent = btnText;
        // Update data-translate attribute to reflect current state
        seeMoreBtn.setAttribute('data-translate', isProjectsExpanded ? 'projects.seeLess' : 'projects.seeMore');
    } else {
        seeMoreBtn.textContent = isProjectsExpanded ? 'See Less' : 'See More';
    }
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formMessage = document.getElementById('formMessage');
        const formData = new FormData(contactForm);
        
        // Get form values
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !subject || !message) {
            formMessage.textContent = typeof translations !== 'undefined' && translations[currentLang] 
                ? translations[currentLang].contact.formError 
                : 'Please fill in all fields.';
            formMessage.className = 'form-message error';
            return;
        }

        // Create mailto link (you can replace this with actual form submission)
        const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;

        // Show success message
        formMessage.textContent = typeof translations !== 'undefined' && translations[currentLang]
            ? translations[currentLang].contact.formSuccess
            : 'Thank you! Your message has been sent.';
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    });
}
