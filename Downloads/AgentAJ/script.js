// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        formStatus.style.display = 'none';
        
        try {
            const formData = new FormData(contactForm);
            
            // Add formatted message with all details
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone') || 'Not provided';
            const message = formData.get('message');
            
            formData.set('message', `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
            
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = '#d1fae5';
                formStatus.style.color = '#065f46';
                formStatus.style.border = '1px solid #10b981';
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.style.display = 'block';
            formStatus.style.backgroundColor = '#fee2e2';
            formStatus.style.color = '#991b1b';
            formStatus.style.border = '1px solid #ef4444';
            formStatus.textContent = 'Sorry, there was an error sending your message. Please try again or email directly at homesbyjawid@gmail.com';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and highlight cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const highlightCards = document.querySelectorAll('.highlight-card');
    const contactCards = document.querySelectorAll('.contact-card');
    
    [...serviceCards, ...highlightCards, ...contactCards].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add active class to current nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function highlightNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Hide image placeholders when images load
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.stat-image img, .single-image img');
    
    images.forEach(img => {
        if (img.src && img.src !== window.location.href) {
            // Image has a valid src, hide the placeholder
            const placeholder = img.parentElement.querySelector('.image-placeholder-fallback');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        }
        
        // Also hide placeholder when image loads successfully
        img.addEventListener('load', function() {
            const placeholder = this.parentElement.querySelector('.image-placeholder-fallback');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        });
        
        // Show placeholder if image fails to load
        img.addEventListener('error', function() {
            const placeholder = this.parentElement.querySelector('.image-placeholder-fallback');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
            this.style.display = 'none';
        });
    });
});

// Mortgage Calculator
const mortgageCalculator = document.getElementById('mortgageCalculator');

if (mortgageCalculator) {
    mortgageCalculator.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const homePrice = parseFloat(document.getElementById('homePrice').value) || 0;
        const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
        const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
        const loanTerm = parseFloat(document.getElementById('loanTerm').value) || 0;
        
        // Calculate loan amount
        const loanAmount = homePrice - downPayment;
        
        if (loanAmount <= 0) {
            alert('Down payment must be less than home price.');
            return;
        }
        
        // Calculate monthly interest rate
        const monthlyRate = (interestRate / 100) / 12;
        
        // Calculate number of payments
        const numPayments = loanTerm * 12;
        
        // Calculate monthly payment using mortgage formula
        // M = P * [r(1+r)^n] / [(1+r)^n - 1]
        let monthlyPayment = 0;
        
        if (monthlyRate > 0) {
            const numerator = monthlyRate * Math.pow(1 + monthlyRate, numPayments);
            const denominator = Math.pow(1 + monthlyRate, numPayments) - 1;
            monthlyPayment = loanAmount * (numerator / denominator);
        } else {
            monthlyPayment = loanAmount / numPayments;
        }
        
        // Calculate total interest paid
        const totalPaid = monthlyPayment * numPayments;
        const totalInterest = totalPaid - loanAmount;
        
        // Display results
        const resultsDiv = document.getElementById('calculatorResults');
        const monthlyPaymentEl = document.getElementById('monthlyPayment');
        const principalInterestEl = document.getElementById('principalInterest');
        const totalLoanEl = document.getElementById('totalLoan');
        const totalInterestEl = document.getElementById('totalInterest');
        
        if (resultsDiv && monthlyPaymentEl && principalInterestEl && totalLoanEl && totalInterestEl) {
            monthlyPaymentEl.textContent = `$${monthlyPayment.toFixed(2)}`;
            principalInterestEl.textContent = `$${monthlyPayment.toFixed(2)}`;
            totalLoanEl.textContent = `$${loanAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            totalInterestEl.textContent = `$${totalInterest.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            
            resultsDiv.style.display = 'block';
            resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

