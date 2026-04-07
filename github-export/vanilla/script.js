/**
 * CANELLI CONSTRUCTION - JAVASCRIPT
 * Premium Construction Company Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icons
        const menuIcon = this.querySelector('.menu-icon');
        const closeIcon = this.querySelector('.close-icon');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking a link
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.querySelector('.menu-icon').classList.remove('hidden');
            mobileMenuBtn.querySelector('.close-icon').classList.add('hidden');
        });
    });
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // PORTFOLIO FILTER TABS
    // ========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Filter portfolio cards
            portfolioCards.forEach(function(card) {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden-card');
                    card.style.display = '';
                } else {
                    card.classList.add('hidden-card');
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // ========================================
    // COST ESTIMATOR
    // ========================================
    const estimatorForm = document.getElementById('estimatorForm');
    const squareFeetInput = document.getElementById('squareFeet');
    const sqftValueDisplay = document.getElementById('sqftValue');
    const estimateResult = document.getElementById('estimateResult');
    const resultValue = document.getElementById('resultValue');
    
    // Price ranges per square foot
    const priceRanges = {
        custom_home: { standard: [200, 300], premium: [300, 450], luxury: [450, 700] },
        turnkey: { standard: [180, 250], premium: [250, 350], luxury: [350, 500] },
        remodel: { standard: [150, 250], premium: [250, 400], luxury: [400, 600] },
        adu: { standard: [200, 280], premium: [280, 380], luxury: [380, 500] },
        addition: { standard: [180, 280], premium: [280, 400], luxury: [400, 550] },
        commercial: { standard: [150, 250], premium: [250, 400], luxury: [400, 600] }
    };
    
    // Update square footage display
    squareFeetInput.addEventListener('input', function() {
        sqftValueDisplay.textContent = parseInt(this.value).toLocaleString() + ' sq ft';
    });
    
    // Calculate estimate
    estimatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectType = document.getElementById('projectType').value;
        const squareFeet = parseInt(squareFeetInput.value);
        const finishLevel = document.getElementById('finishLevel').value;
        
        const range = priceRanges[projectType][finishLevel];
        const lowEstimate = squareFeet * range[0];
        const highEstimate = squareFeet * range[1];
        
        resultValue.textContent = '$' + lowEstimate.toLocaleString() + ' - $' + highEstimate.toLocaleString();
        estimateResult.classList.remove('hidden');
        
        // Scroll to result
        estimateResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    
    // ========================================
    // CONTACT FORM
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach(function(value, key) {
            data[key] = value;
        });
        
        // In production, you would send this to your backend
        console.log('Form submitted:', data);
        
        // Show success message
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        
        // Re-initialize icons in success message
        lucide.createIcons();
        
        // Reset form after delay
        setTimeout(function() {
            contactForm.reset();
            contactForm.classList.remove('hidden');
            formSuccess.classList.add('hidden');
        }, 5000);
    });
    
    // ========================================
    // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .portfolio-card, .testimonial-card, .process-step, .why-card').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(el);
    });
    
    // Add visible styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

/**
 * OPTIONAL: Backend Integration
 * Uncomment and modify if connecting to a backend API
 */

/*
const API_URL = 'YOUR_API_URL';

async function submitContactForm(formData) {
    try {
        const response = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit form');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
}

async function getEstimate(projectType, squareFeet, finishLevel) {
    try {
        const response = await fetch(`${API_URL}/api/estimate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                project_type: projectType,
                square_feet: squareFeet,
                finish_level: finishLevel,
            }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to get estimate');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error getting estimate:', error);
        throw error;
    }
}

async function getProjects(category = 'all') {
    try {
        const url = category === 'all' 
            ? `${API_URL}/api/projects`
            : `${API_URL}/api/projects?category=${category}`;
            
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}
*/
