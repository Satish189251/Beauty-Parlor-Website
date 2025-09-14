/**
 * Elegant Beauty - Main JavaScript File
 * Contains all interactive functionality for the beauty parlor website
 */

// ================================
// Initialize when DOM is loaded
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Initialize all functionality
    initializeNavigation();
    initializeGalleryFilter();
    initializeFAQ();
    initializeContactForm();
    initializeSmoothScrolling();
});

// ================================
// Navigation Functionality
// ================================
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Add scroll effect to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background based on scroll position
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }

        lastScrollTop = scrollTop;
    });

    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ================================
// Gallery Filter Functionality
// ================================
function initializeGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length === 0 || galleryItems.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter gallery items with animation
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    // Add fade in animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add transition styles to gallery items
    galleryItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}

// ================================
// FAQ Functionality
// ================================
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = null;
                        }
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });

            // Set initial styles
            answer.style.maxHeight = '0';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.3s ease-out';
            answer.style.display = 'block';
        }
    });
}

// ================================
// Contact Form Functionality
// ================================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        
        // Validate form
        if (!validateContactForm(formData)) {
            return;
        }

        // Show loading state
        showLoadingState(submitButton);

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            hideLoadingState(submitButton);
            showSuccessMessage();
            contactForm.reset();
        }, 2000);
    });

    // Real-time form validation
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateContactForm(formData) {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    let isValid = true;

    // Validate required fields
    if (!firstName || firstName.trim() === '') {
        showFieldError('firstName', 'First name is required');
        isValid = false;
    }

    if (!lastName || lastName.trim() === '') {
        showFieldError('lastName', 'Last name is required');
        isValid = false;
    }

    if (!email || email.trim() === '') {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!message || message.trim() === '') {
        showFieldError('message', 'Message is required');
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;

    clearFieldError(field);

    switch(fieldName) {
        case 'firstName':
        case 'lastName':
            if (!value) {
                showFieldError(fieldName, `${fieldName === 'firstName' ? 'First' : 'Last'} name is required`);
                return false;
            }
            break;
        
        case 'email':
            if (!value) {
                showFieldError(fieldName, 'Email is required');
                return false;
            } else if (!isValidEmail(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
                return false;
            }
            break;
        
        case 'message':
            if (!value) {
                showFieldError(fieldName, 'Message is required');
                return false;
            }
            break;
    }

    return true;
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    if (!field) return;

    const formGroup = field.closest('.form-group');
    const existingError = formGroup.querySelector('.error-message');

    if (existingError) {
        existingError.remove();
    }

    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.5rem';

    formGroup.appendChild(errorElement);
    field.style.borderColor = '#e74c3c';
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.style.borderColor = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoadingState(button) {
    button.classList.add('loading');
    button.disabled = true;
    button.textContent = 'Sending...';
}

function hideLoadingState(button) {
    button.classList.remove('loading');
    button.disabled = false;
    button.textContent = 'Send Message';
}

function showSuccessMessage() {
    // Create and show success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #27ae60, #2ecc71);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        ">
            <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
            Thank you! Your message has been sent successfully.
        </div>
    `;

    document.body.appendChild(notification);

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 5000);
}

// ================================
// Smooth Scrolling
// ================================
function initializeSmoothScrolling() {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll-to-top button
    createScrollToTopButton();
}

function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    
    const styles = {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.2rem',
        zIndex: '1000',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    };

    Object.assign(scrollButton.style, styles);
    
    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effect
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });

    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });
}

// ================================
// Additional Utility Functions
// ================================

// Lazy loading for images (if needed in the future)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Add loading animation to buttons
function addButtonLoadingEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.style.transform = 'scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// Initialize button effects
document.addEventListener('DOMContentLoaded', addButtonLoadingEffect);

// Parallax effect for hero section (optional enhancement)
function initializeParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// Performance optimization: Debounce function
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add subtle animations to service cards
function initializeServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card, .value-card, .team-member');
    
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeServiceCardAnimations);

// Add typing effect to hero text (optional enhancement)
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
}

// Error handling for failed resource loads
window.addEventListener('error', function(e) {
    console.warn('Resource failed to load:', e.target.src || e.target.href);
    
    // Handle failed image loads
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        
        // Show placeholder if available
        const placeholder = e.target.nextElementSibling;
        if (placeholder && placeholder.classList.contains('image-placeholder')) {
            placeholder.style.display = 'flex';
        }
    }
});

// Console welcome message
console.log('%c🌸 Welcome to Elegant Beauty! 🌸', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cWebsite crafted with care for beauty and wellness.', 'color: #6b6b6b; font-size: 12px;');