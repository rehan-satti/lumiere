// 1. Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1000);
});

// 2. Custom Cursor (Enabled only on non-touch devices)
if (!('ontouchstart' in window)) {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });
} else {
    document.querySelector('.cursor').style.display = 'none';
    document.querySelector('.cursor-follower').style.display = 'none';
    document.body.style.cursor = 'default';
}

// 3. Navbar Sticky & Scroll Progress
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const progress = document.querySelector('.progress-bar');
    const scrollPos = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    
    nav.classList.toggle('sticky', scrollPos > 50);
    progress.style.width = (scrollPos / height) * 100 + '%';
    
    const btt = document.getElementById('backToTop');
    btt.style.display = scrollPos > 500 ? 'flex' : 'none';
});

// 4. Mobile Menu Toggle with Active States
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.mobile-menu a');

const openMenu = () => {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
};

const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
});

mobileMenuClose.addEventListener('click', closeMenu);
mobileMenuOverlay.addEventListener('click', closeMenu);

navLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
    }
});

// 5. Theme Toggle
const themeBtn = document.getElementById('theme-btn');

const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('lumiere-theme', theme);
};

const savedTheme = localStorage.getItem('lumiere-theme') || 'dark';
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// 6. Scroll Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('active');
            }, delay);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el, index) => {
    if (el.classList.contains('dish-card') || el.classList.contains('feature-card')) {
        el.dataset.delay = (index % 6) * 100;
    }
    revealObserver.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 7. Counter Animation
const counters = document.querySelectorAll('.counter');

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const formatCount = (value, suffix) => value.toLocaleString() + (suffix || '');

const startCounter = (el) => {
    const target = +el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2500;
    let startTime = null;

    const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentCount = Math.floor(easedProgress * target);

        el.innerText = formatCount(currentCount, suffix);

        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            el.innerText = formatCount(target, suffix);
        }
    };
    requestAnimationFrame(updateCount);
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// 8. Testimonial Slider
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

const updateSlider = (index) => {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
};

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider(currentSlide);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlider(currentSlide);
}, 5000);

// 9. Favorite Heart Toggle
document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-icon');
    if (!favBtn) return;

    e.stopPropagation();
    favBtn.classList.toggle('favorited');

    const icon = favBtn.querySelector('i');
    if (favBtn.classList.contains('favorited')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    }
});

// 10. Button Ripple Effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let ripple = document.createElement('span');
        ripple.classList.add('btn-ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));