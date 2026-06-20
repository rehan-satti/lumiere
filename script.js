// ==================== MENU DATA (36 items) ====================
const menuData = [
    { id: 1, name: "Crispy Chicken Wrap", category: "Fast Food", price: 18.00, rating: 4.9, img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Zesty grilled chicken with organic greens and house-made aioli.", badge: "New" },
    { id: 2, name: "Loaded Truffle Fries", category: "Fast Food", price: 14.00, rating: 4.7, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800", desc: "Hand-cut potatoes drizzled with truffle oil and aged parmesan." },
    { id: 3, name: "Classic Fish Burger", category: "Fast Food", price: 16.00, rating: 4.5, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800", desc: "Crispy battered fish fillet with tartar sauce and fresh lettuce." },
    { id: 4, name: "Spicy Chicken Tacos", category: "Fast Food", price: 17.00, rating: 4.6, img: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&q=80&w=800", desc: "Three soft tacos with spiced chicken, salsa, and lime crema." },
    { id: 5, name: "Chicken Nuggets Platter", category: "Fast Food", price: 15.00, rating: 4.4, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800", desc: "Golden crispy nuggets served with honey mustard and BBQ dip." },
    { id: 6, name: "Veggie Spring Rolls", category: "Fast Food", price: 12.00, rating: 4.3, img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800", desc: "Crispy rolls stuffed with fresh vegetables and sweet chili sauce." },
    { id: 7, name: "BBQ Beef Ribs", category: "BBQ", price: 34.00, rating: 5.0, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", desc: "Slow-smoked prime ribs glazed with signature hickory sauce.", badge: "Popular" },
    { id: 8, name: "Grilled BBQ Chicken", category: "BBQ", price: 26.00, rating: 4.2, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800", desc: "Tender flame-grilled chicken thighs marinated in honey chipotle." },
    { id: 9, name: "Lamb Seekh Kebab", category: "BBQ", price: 28.00, rating: 4.8, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800", desc: "Juicy minced lamb skewers with traditional spices and naan." },
    { id: 10, name: "Malai Boti", category: "BBQ", price: 30.00, rating: 4.9, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800", desc: "Creamy marinated chicken boti grilled to perfection." },
    { id: 11, name: "Grilled Lamb Chops", category: "BBQ", price: 38.00, rating: 4.7, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800", desc: "Premium lamb chops with herb butter and roasted vegetables." },
    { id: 12, name: "Honey Glazed Wings", category: "BBQ", price: 22.00, rating: 4.6, img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=800", desc: "Crispy wings tossed in sweet honey glaze and sesame seeds." },
    { id: 13, name: "Margherita Pizza", category: "Pizza", price: 22.00, rating: 4.9, img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800", desc: "Artisanal crust, San Marzano tomatoes, and buffalo mozzarella." },
    { id: 14, name: "Pepperoni Pizza", category: "Pizza", price: 25.00, rating: 4.8, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800", desc: "Double spiced pepperoni with a four-cheese Italian blend." },
    { id: 15, name: "BBQ Chicken Pizza", category: "Pizza", price: 27.00, rating: 4.7, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", desc: "Smoky BBQ sauce, grilled chicken, onions, and mozzarella." },
    { id: 16, name: "Four Cheese Pizza", category: "Pizza", price: 24.00, rating: 4.6, img: "https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&q=80&w=800", desc: "Mozzarella, gorgonzola, parmesan, and ricotta on thin crust." },
    { id: 17, name: "Veggie Supreme", category: "Pizza", price: 20.00, rating: 4.5, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", desc: "Bell peppers, mushrooms, olives, and fresh basil on tomato base." },
    { id: 18, name: "Truffle Mushroom Pizza", category: "Pizza", price: 29.00, rating: 4.9, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", desc: "Wild mushrooms, truffle oil, and creamy white sauce.", badge: "Chef's Pick" },
    { id: 19, name: "Classic Beef Burger", category: "Burgers", price: 21.00, rating: 4.6, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800", desc: "Black Angus beef, caramelized onions, and secret Lumière sauce." },
    { id: 20, name: "Double Cheese Burger", category: "Burgers", price: 28.00, rating: 4.9, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", desc: "Double wagyu patty with melted sharp aged cheddar layers." },
    { id: 21, name: "Mushroom Swiss Burger", category: "Burgers", price: 23.00, rating: 4.5, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800", desc: "Sautéed mushrooms, Swiss cheese, and garlic aioli on brioche." },
    { id: 22, name: "Bacon Avocado Burger", category: "Burgers", price: 26.00, rating: 4.8, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=800", desc: "Crispy bacon, fresh avocado, and chipotle mayo." },
    { id: 23, name: "Chicken Zinger Burger", category: "Burgers", price: 19.00, rating: 4.4, img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Spicy crispy chicken fillet with coleslaw and zinger sauce." },
    { id: 24, name: "Veggie Patty Burger", category: "Burgers", price: 17.00, rating: 4.3, img: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&q=80&w=800", desc: "Plant-based patty with grilled vegetables and herb mayo." },
    { id: 25, name: "Fresh Mojito", category: "Drinks", price: 12.00, rating: 5.0, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800", desc: "Cold-pressed lime, muddled mint, and premium sparkling water." },
    { id: 26, name: "Tropical Juice", category: "Drinks", price: 10.00, rating: 4.1, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800", desc: "Freshly squeezed pineapple, mango, and passion fruit fusion." },
    { id: 27, name: "Fresh Lemonade", category: "Drinks", price: 8.00, rating: 4.5, img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=800", desc: "Homemade lemonade with mint and a touch of honey." },
    { id: 28, name: "Iced Coffee", category: "Drinks", price: 11.00, rating: 4.6, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800", desc: "Cold brew coffee with vanilla cream and ice." },
    { id: 29, name: "Mango Lassi", category: "Drinks", price: 9.00, rating: 4.8, img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=800", desc: "Traditional Pakistani mango yogurt drink, chilled and creamy." },
    { id: 30, name: "Sparkling Water", category: "Drinks", price: 6.00, rating: 4.2, img: "https://www.bing.com/th/id/OIP.lypZb50QU2_i-zKns6GMbQHaDt?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2&auto=compress&cs=tinysrgb&w=800", desc: "Premium sparkling water with a slice of fresh lemon." },
    { id: 31, name: "Chocolate Lava Cake", category: "Desserts", price: 16.00, rating: 4.9, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800", desc: "Decadent molten core served with Madagascar vanilla gelato." },
    { id: 32, name: "Strawberry Cheesecake", category: "Desserts", price: 15.00, rating: 4.8, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800", desc: "Creamy New York style cheesecake with fresh wild berry glaze." },
    { id: 33, name: "Tiramisu", category: "Desserts", price: 14.00, rating: 4.7, img: "https://images.unsplash.com/photo-1586040140378-b5634cb4c8fc?auto=format&fit=crop&q=80&w=800", desc: "Classic Italian dessert with espresso-soaked layers and mascarpone." },
    { id: 34, name: "Brownie Sundae", category: "Desserts", price: 13.00, rating: 4.6, img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=800", desc: "Warm chocolate brownie with ice cream and hot fudge." },
    { id: 35, name: "Fruit Tart", category: "Desserts", price: 12.00, rating: 4.5, img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800", desc: "Buttery crust with pastry cream and seasonal fresh fruits." },
    { id: 36, name: "Kulfi Falooda", category: "Desserts", price: 11.00, rating: 4.9, img: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800", desc: "Traditional Pakistani kulfi with rose syrup and basil seeds.", badge: "Popular" }
];

// ==================== CART ====================
let cart = [];

const getDishById = (id) => menuData.find(d => d.id === Number(id));

const updateCartUI = () => {
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    badges.forEach(b => {
        b.textContent = totalItems;
        b.style.display = totalItems > 0 ? 'flex' : 'none';
    });

    const cartItemsEl = document.getElementById('cart-items-list');
    const cartTotalEl = document.getElementById('cart-total');
    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your cart is empty</p>
                <span>Add delicious dishes from our menu</span>
            </div>`;
        // Reset checkout view if cart becomes empty
        const formCont = document.getElementById('checkout-form-container');
        const checkBtn = document.getElementById('checkout-btn');
        if (formCont) formCont.classList.remove('active');
        if (checkBtn) checkBtn.style.display = 'block';
        if (cartItemsEl) cartItemsEl.style.display = 'block';
        if (cartTotalEl) cartTotalEl.textContent = '$0.00';
        return;
    }

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="dish-price">$${item.price.toFixed(2)}</span>
                <div class="cart-item-qty">
                    <button class="qty-btn qty-minus" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
                    <span>${item.qty}</span>
                    <button class="qty-btn qty-plus" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove"><i class="fa-solid fa-xmark"></i></button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;
};

const addToCart = (id) => {
    const dish = getDishById(id);
    if (!dish) return;

    const existing = cart.find(c => c.id === dish.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...dish, qty: 1 });
    }
    updateCartUI();
    showCartToast(dish.name);
    bumpCartBadge();
};

const removeFromCart = (id) => {
    cart = cart.filter(c => c.id !== Number(id));
    updateCartUI();
};

const changeQty = (id, delta) => {
    const item = cart.find(c => c.id === Number(id));
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else updateCartUI();
};

const showCartToast = (name) => {
    const toast = document.getElementById('cart-toast');
    if (!toast) return;
    toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> <strong>${name}</strong> added to cart`;
    toast.classList.add('show');
    clearTimeout(showCartToast._timer);
    showCartToast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
};

const bumpCartBadge = () => {
    document.querySelectorAll('.cart-badge').forEach(b => {
        b.classList.add('bump');
        setTimeout(() => b.classList.remove('bump'), 300);
    });
};

const openCartPanel = () => {
    document.getElementById('cart-panel')?.classList.add('active');
    document.getElementById('cart-overlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeCartPanel = () => {
    document.getElementById('cart-panel')?.classList.remove('active');
    document.getElementById('cart-overlay')?.classList.remove('active');
    document.body.style.overflow = '';

    // Reset to cart view after transition
    setTimeout(() => {
        const list = document.getElementById('cart-items-list');
        const form = document.getElementById('checkout-form-container');
        const btn = document.getElementById('checkout-btn');
        if (list) list.style.display = 'block';
        if (form) form.classList.remove('active');
        if (btn) btn.style.display = 'block';
    }, 400);
};

// ==================== LOADING SCREEN ====================
const loader = document.getElementById('loader');
const loaderShown = sessionStorage.getItem('lumiereLoaderShown');
const navEntries = performance.getEntriesByType('navigation');
const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';
const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('Restaurant/');

// Immediately hide loader if not on the home page OR if it's already been shown and isn't a refresh
if (loader) {
    if (!isHomePage || (loaderShown && !isReload)) {
        loader.style.display = 'none';
        loader.style.transition = 'none';
    }
}

window.addEventListener('load', () => {
    if (loader) {
        // Show animation ONLY on home page for first-time session visit OR refresh
        if (isHomePage && (!loaderShown || isReload)) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 300);
            }, 600);
        }
    }
    sessionStorage.setItem('lumiereLoaderShown', 'true');
});

// ==================== CUSTOM CURSOR ====================
const cursorEl = document.querySelector('.cursor');
const followerEl = document.querySelector('.cursor-follower');
if (cursorEl && followerEl) {
    if (!('ontouchstart' in window)) {
        document.addEventListener('mousemove', (e) => {
            cursorEl.style.left = e.clientX + 'px';
            cursorEl.style.top = e.clientY + 'px';
            setTimeout(() => {
                followerEl.style.left = e.clientX + 'px';
                followerEl.style.top = e.clientY + 'px';
            }, 50);
        });
    } else {
        cursorEl.style.display = 'none';
        followerEl.style.display = 'none';
    }
}

// ==================== NAVBAR & SCROLL ====================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const progress = document.querySelector('.progress-bar');
    const scrollPos = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;

    if (nav) nav.classList.toggle('sticky', scrollPos > 50);
    if (progress) progress.style.width = height > 0 ? (scrollPos / height) * 100 + '%' : '0%';

    // Floating UI Visibility
    const btt = document.getElementById('backToTop');
    const fCart = document.getElementById('floating-cart');
    const isVisible = scrollPos > 300;

    if (btt) btt.classList.toggle('visible', isVisible);
    if (fCart) fCart.classList.toggle('visible', isVisible && cart.length > 0);
});

// ==================== MOBILE MENU ====================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

if (hamburger && mobileMenu) {
    const openMenu = () => {
        mobileMenu.classList.add('active');
        mobileMenuOverlay?.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay?.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
    });

    mobileMenuOverlay?.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
}

// ==================== THEME TOGGLE ====================
const themeBtn = document.getElementById('theme-btn');

const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark'
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>';
    }
    localStorage.setItem('lumiere-theme', theme);
};

if (themeBtn) {
    applyTheme(localStorage.getItem('lumiere-theme') || 'dark');
    themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
}

// ==================== SCROLL REVEAL ====================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('active'), delay);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
});

// Smooth scroll for same-page anchors only
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (href === '#reservation') {
                target.classList.add('active');
            }
        }
    });
});

// Trigger reservation button attention animation on direct hash load
window.addEventListener('load', () => {
    if (window.location.hash === '#reservation') {
        const target = document.getElementById('reservation');
        if (target) {
            target.classList.add('active');
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
        }
    }
});

// ==================== COUNTERS ====================
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const startCounter = (el) => {
    const target = +el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2500;
    let startTime = null;

    const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(easeOutQuart(progress) * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(updateCount);
        else el.textContent = target.toLocaleString() + suffix;
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

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

// Stats section child animation
const statsSection = document.getElementById('stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
}

// ==================== TESTIMONIAL SLIDER ====================
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

if (slider && dots.length) {
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
}

// ==================== HEART FAVORITE ====================
document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-icon');
    if (!favBtn) return;
    e.stopPropagation();
    favBtn.classList.toggle('favorited');
    const icon = favBtn.querySelector('i');
    if (icon) {
        icon.classList.remove('fa-regular', 'fa-solid');
        icon.classList.add(favBtn.classList.contains('favorited') ? 'fa-solid' : 'fa-regular');
    }
});

// ==================== BUTTON RIPPLE ====================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.classList.add('btn-ripple');
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ==================== MENU PAGE LOGIC ====================
let activeFilter = 'all';
let searchTerm = '';
let sortBy = 'default';

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(null, args), delay);
    };
};

const sortItems = (items) => {
    const sorted = [...items];
    switch (sortBy) {
        case 'price-low': return sorted.sort((a, b) => a.price - b.price);
        case 'price-high': return sorted.sort((a, b) => b.price - a.price);
        case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
        case 'name-az': return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default: return sorted;
    }
};

const getFilteredMenu = () => {
    let items = menuData.filter(d => {
        const matchCat = activeFilter === 'all' || d.category === activeFilter;
        const matchSearch = d.name.toLowerCase().includes(searchTerm) ||
            d.category.toLowerCase().includes(searchTerm);
        return matchCat && matchSearch;
    });
    return sortItems(items);
};

const buildDishCard = (item, index) => {
    // Matches the Home page precision rating logic (supporting half-stars)
    let starHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (item.rating >= i - 0.25) {
            starHtml += '<i class="fa-solid fa-star"></i>';
        } else if (item.rating >= i - 0.75) {
            starHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            starHtml += '<i class="fa-regular fa-star"></i>';
        }
    }

    return `
        <div class="dish-card reveal" data-category="${item.category}" style="transition-delay: ${index * 0.03}s">
            <div class="dish-img-container">
                <img src="${item.img}" srcset="${item.img.replace(/w=\d+/, 'w=400')} 400w, ${item.img.replace(/w=\d+/, 'w=800')} 800w, ${item.img.replace(/w=\d+/, 'w=1200')} 1200w" sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" alt="${item.name}" loading="lazy">
                <span class="category-badge">${item.category}</span>
                <span class="dish-price">$${item.price.toFixed(2)}</span>
                <div class="btn-floating fav-icon" aria-label="Favorite"><i class="fa-regular fa-heart"></i></div>
                <div class="btn-floating quick-view-btn quick-view" data-id="${item.id}" aria-label="Quick view"><i class="fa-solid fa-eye"></i></div>
            </div>
            <div class="dish-info">
                <h3>${item.name}</h3>
                <div class="rating">${starHtml} <span>${item.rating} (120 reviews)</span></div>
                <p>${item.desc}</p>
                <div class="dish-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${item.id}"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                </div>
            </div>
        </div>`;
};

const renderMenu = (items) => {
    const grid = document.getElementById('menu-grid');
    const noResults = document.getElementById('no-results');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.style.display = 'flex';
        return;
    }

    if (noResults) noResults.style.display = 'none';
    grid.innerHTML = items.map((item, index) => buildDishCard(item, index)).join('');

    // Re-observe using requestAnimationFrame for better performance
    requestAnimationFrame(() => {
        grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    });
};

const applyMenuFilters = () => {
    renderMenu(getFilteredMenu());
    // Scroll to the menu display section after filtering to show results
    const menuDisplaySection = document.getElementById('menu-display');
    if (menuDisplaySection) {
        menuDisplaySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

window.resetFilters = () => {
    activeFilter = 'all';
    searchTerm = '';
    sortBy = 'default';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
    const search = document.getElementById('menu-search');
    const sort = document.getElementById('menu-sort');
    const mobCat = document.getElementById('mobile-category-select');
    if (search) search.value = '';
    if (sort) sort.value = 'default';
    if (mobCat) mobCat.value = 'all';
    applyMenuFilters();
};

if (document.getElementById('menu-grid')) {
    applyMenuFilters();

    const mobileCatSelect = document.getElementById('mobile-category-select');

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            
            // Sync mobile dropdown
            if (mobileCatSelect) mobileCatSelect.value = activeFilter;

            applyMenuFilters();
        });
    });

    if (mobileCatSelect) {
        mobileCatSelect.addEventListener('change', (e) => {
            activeFilter = e.target.value;

            // Sync desktop tabs
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.filter === activeFilter);
            });

            applyMenuFilters();
        });
    }

    const menuSearch = document.getElementById('menu-search');
    if (menuSearch) {
        menuSearch.addEventListener('input', debounce((e) => {
            searchTerm = e.target.value.toLowerCase().trim();
            applyMenuFilters();
        }, 300));
    }

    const menuSort = document.getElementById('menu-sort');
    if (menuSort) {
        menuSort.addEventListener('change', (e) => {
            sortBy = e.target.value;
            applyMenuFilters();
        });
    }

    // Special banner order button
    document.querySelector('.special-banner .btn-primary')?.addEventListener('click', () => {
        addToCart(7);
        openCartPanel();
    });
}

// ==================== GLOBAL CLICK HANDLERS ====================
document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-to-cart');
    if (addBtn) {
        e.preventDefault();
        addToCart(addBtn.dataset.id);
    }

    const qvBtn = e.target.closest('.quick-view');
    if (qvBtn) {
        const dish = getDishById(qvBtn.dataset.id);
        if (!dish) return;
        const modal = document.getElementById('quick-view-modal');
        if (!modal) return;
        modal.querySelector('.modal-body').innerHTML = ` 
            <div class="modal-img"><img src="${dish.img}" srcset="${dish.img.replace(/w=\d+/, 'w=600')} 600w, ${dish.img.replace(/w=\d+/, 'w=900')} 900w" sizes="(max-width: 768px) 100vw, 50vw" alt="${dish.name}" loading="lazy"></div>
            <div class="modal-info">
                <span class="category-badge badge-inline">${dish.category}</span>
                <h2>${dish.name}</h2>
                <div class="rating mt-3"><i class="fa-solid fa-star"></i> <span>(${dish.rating})</span></div>
                <p class="mt-3">${dish.desc}</p>
                <div class="modal-actions mt-4">
                    <span class="dish-price modal-price">$${dish.price.toFixed(2)}</span>
                    <button class="btn btn-primary add-to-cart" data-id="${dish.id}">Add To Cart</button>
                </div>
            </div>`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
        const img = galleryItem.querySelector('img');
        const caption = galleryItem.querySelector('.gallery-overlay span')?.textContent;
        if (img) {
            const lbModal = document.getElementById('lightbox-modal');
            const lbImg = document.getElementById('lightbox-img');
            const lbCap = document.getElementById('lightbox-caption');
            if (lbModal && lbImg) {
                lbImg.src = img.src;
                if (lbCap) lbCap.textContent = caption || '';
                lbModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    }

    const minusBtn = e.target.closest('.qty-minus');
    if (minusBtn) changeQty(minusBtn.dataset.id, -1);

    const plusBtn = e.target.closest('.qty-plus');
    if (plusBtn) changeQty(plusBtn.dataset.id, 1);

    const removeBtn = e.target.closest('.cart-item-remove');
    if (removeBtn) removeFromCart(removeBtn.dataset.id);

    // Checkout Toggle Logic
    if (e.target.id === 'checkout-btn') {
        if (cart.length === 0) return;
        const list = document.getElementById('cart-items-list');
        const form = document.getElementById('checkout-form-container');
        const btn = document.getElementById('checkout-btn');
        if (list) list.style.display = 'none';
        if (form) form.classList.add('active');
        if (btn) btn.style.display = 'none';
    }

    if (e.target.id === 'back-to-cart') {
        const list = document.getElementById('cart-items-list');
        const form = document.getElementById('checkout-form-container');
        const btn = document.getElementById('checkout-btn');
        if (list) list.style.display = 'block';
        if (form) form.classList.remove('active');
        if (btn) btn.style.display = 'block';
    }

    if (e.target.closest('#floating-cart')) openCartPanel();
});

// ==================== FORM VALIDATION & SUBMISSION ====================

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const applyInvalidEffect = (el) => {
    el.style.borderColor = '#ff4757';
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 400);
};

// Reservation Modal Toggles
const resModal = document.getElementById('reservation-modal');
document.getElementById('open-reservation')?.addEventListener('click', () => {
    resModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
});
document.getElementById('close-reservation')?.addEventListener('click', () => {
    resModal?.classList.remove('active');
    document.body.style.overflow = '';
});
resModal?.addEventListener('click', (e) => {
    if (e.target.id === 'reservation-modal') {
        resModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Reservation Form Logic
let isReservationListenerAttached = false;

const initReservationForm = () => {
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm && !isReservationListenerAttached) {
        isReservationListenerAttached = true;
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const formData = new FormData(reservationForm);
            
            const email = formData.get('email');
            const date = new Date(formData.get('date'));
            const today = new Date();
            today.setHours(0,0,0,0);

            if (!validateEmail(email)) {
                applyInvalidEffect(reservationForm.querySelector('[name="email"]'));
                isValid = false;
            }

            if (date < today) {
                applyInvalidEffect(reservationForm.querySelector('[name="date"]'));
                isValid = false;
            }

            if (isValid) {
                const name = formData.get('name');
                const modalBody = document.querySelector('.reservation-modal-content');
                const originalHTML = modalBody.innerHTML;

                modalBody.innerHTML = `
                    <div class="reservation-success">
                        <div class="success-icon">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <h2>Reservation Sent!</h2>
                        <p>Thank you, ${name}. We have received your request and will contact you shortly to confirm your table.</p>
                    </div>
                `;

                setTimeout(() => {
                    resModal?.classList.remove('active');
                    document.body.style.overflow = '';
                    // Reset modal content after it closes
                    setTimeout(() => {
                        isReservationListenerAttached = false; // Reset flag for new form
                        modalBody.innerHTML = originalHTML;
                        initReservationForm(); // Re-attach listener to newly created form
                    }, 500);
                }, 3500);
            }
        });
    }
};

// Initialize reservation listener
initReservationForm();

// Payment Method Selection Logic
const handlePaymentChange = (e) => {
    const method = e.target.value;
    const form = e.target.closest('form');
    const detailsContainer = form.querySelector('.payment-details-container') || createPaymentDetailsContainer(form);
    
    detailsContainer.innerHTML = '';
    detailsContainer.classList.remove('active');

    if (method === 'paypal') {
        detailsContainer.innerHTML = `<input type="email" name="pay_email" placeholder="PayPal Email Address" required>`;
        detailsContainer.classList.add('active');
    } else if (method === 'credit-card') {
        detailsContainer.innerHTML = `
            <input type="text" name="card_num" placeholder="Card Number (XXXX XXXX XXXX XXXX)" required>
            <div style="display: flex; gap: 10px;">
                <input type="text" name="card_exp" placeholder="MM/YY" required>
                <input type="text" name="card_cvc" placeholder="CVC" required>
            </div>`;
        detailsContainer.classList.add('active');
    } else if (method === 'easypaisa' || method === 'jazzcash') {
        detailsContainer.innerHTML = `<input type="tel" name="acc_num" placeholder="Mobile Account Number" required>`;
        detailsContainer.classList.add('active');
    }
};

const createPaymentDetailsContainer = (form) => {
    const div = document.createElement('div');
    div.className = 'payment-details-container';
    const select = form.querySelector('#payment-method');
    select.parentNode.insertBefore(div, select.nextSibling);
    return div;
};

// Checkout Form Logic
document.addEventListener('submit', (e) => {
    const checkoutForm = e.target.closest('#checkout-form');
    if (checkoutForm) {
        e.preventDefault();
        let isValid = true;
        
        const nameInput = checkoutForm.querySelector('[name="name"]');
        const emailInput = checkoutForm.querySelector('[name="email"]');
        const phoneInput = checkoutForm.querySelector('[name="phone"]');
        const addressInput = checkoutForm.querySelector('[name="address"]');
        const paymentMethod = document.getElementById('payment-method');

        if (nameInput && nameInput.value.trim().length < 3) {
            applyInvalidEffect(nameInput);
            isValid = false;
        }

        if (emailInput && !validateEmail(emailInput.value)) {
            applyInvalidEffect(emailInput);
            isValid = false;
        }

        // Phone validation: allow digits and optional plus, length between 10-15
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (phoneInput && !phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
            applyInvalidEffect(phoneInput);
            isValid = false;
        }

        if (addressInput && addressInput.value.trim().length < 10) {
            applyInvalidEffect(addressInput);
            isValid = false;
        }
        
        const extraInputs = checkoutForm.querySelectorAll('.payment-details-container input');
        extraInputs.forEach(input => {
            const val = input.value.trim();
            if (!val) { 
                applyInvalidEffect(input); 
                isValid = false; 
            } else if (input.name === 'pay_email' && !validateEmail(val)) {
                applyInvalidEffect(input);
                isValid = false;
            } else if (input.name === 'card_num' && val.replace(/\s/g, '').length < 16) {
                applyInvalidEffect(input);
                isValid = false;
            } else if (input.name === 'card_exp' && !/^\d{2}\/\d{2}$/.test(val)) {
                applyInvalidEffect(input);
                isValid = false;
            }
        });

        if (!paymentMethod.value) {
            applyInvalidEffect(paymentMethod);
            isValid = false;
        }

        if (isValid) {
            alert(`Thank you, ${nameInput.value}! Your order has been placed successfully.`);
            cart = [];
            updateCartUI();
            closeCartPanel();
            checkoutForm.reset();
        }
    }
});

// Attach payment change listener
document.addEventListener('change', (e) => {
    if (e.target.id === 'payment-method') handlePaymentChange(e);
});

// ==================== CONTACT FORM VALIDATION ====================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const formData = new FormData(contactForm);
        
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (name.length < 3) { applyInvalidEffect(contactForm.querySelector('[name="name"]')); isValid = false; }
        if (!validateEmail(email)) { applyInvalidEffect(contactForm.querySelector('[name="email"]')); isValid = false; }
        if (subject.length < 5) { applyInvalidEffect(contactForm.querySelector('[name="subject"]')); isValid = false; }
        if (message.length < 10) { applyInvalidEffect(contactForm.querySelector('[name="message"]')); isValid = false; }

        if (isValid) {
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            btn.style.pointerEvents = 'none';

            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been sent successfully. We will get back to you soon.`);
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.style.pointerEvents = 'auto';
            }, 2000);
        }
    });
}

// Modal close
const closeModalBtn = document.getElementById('close-modal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        document.getElementById('quick-view-modal')?.classList.remove('active');
        document.body.style.overflow = '';
    });
}

document.getElementById('quick-view-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'quick-view-modal') {
        e.currentTarget.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Lightbox close logic
document.getElementById('close-lightbox')?.addEventListener('click', () => {
    document.getElementById('lightbox-modal')?.classList.remove('active');
    document.body.style.overflow = '';
});

document.getElementById('lightbox-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox-modal') {
        e.currentTarget.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Cart panel close event listeners
document.getElementById('close-cart')?.addEventListener('click', closeCartPanel);
document.getElementById('cart-overlay')?.addEventListener('click', closeCartPanel);

// Newsletter subscription submission handler
document.addEventListener('click', (e) => {
    const subBtn = e.target.closest('.newsletter-input button');
    if (subBtn) {
        const inputParent = subBtn.closest('.newsletter-input');
        const input = inputParent?.querySelector('input[type="email"]');
        if (!inputParent || !input) return;

        const email = input.value.trim();
        if (validateEmail(email)) {
            inputParent.style.transition = 'opacity 0.3s ease';
            inputParent.style.opacity = '0';
            setTimeout(() => {
                const successMsg = document.createElement('div');
                successMsg.className = 'newsletter-success-msg';
                successMsg.style.cssText = 'display: flex; align-items: center; gap: 8px; color: #967215; font-size: 0.95rem; font-weight: 600; padding: 12px 15px; border-radius: 50px; background: rgba(150,114,21,0.08); border: 1px solid rgba(150,114,21,0.25); margin-top: 10px; animation: modalContentFadeIn 0.5s ease forwards;';
                successMsg.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #2ecc71; font-size: 1.1rem;"></i> Subscribed successfully!`;
                inputParent.parentNode.replaceChild(successMsg, inputParent);
            }, 300);
        } else {
            applyInvalidEffect(inputParent);
        }
    }
});

document.addEventListener('keypress', (e) => {
    const input = e.target.closest('.newsletter-input input');
    if (input && e.key === 'Enter') {
        e.preventDefault();
        const inputParent = input.closest('.newsletter-input');
        const subBtn = inputParent?.querySelector('button');
        if (subBtn) subBtn.click();
    }
});

// Init cart UI
updateCartUI();
