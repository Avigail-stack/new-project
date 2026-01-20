import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="#" class="logo">
        <div class="logo-spinner"></div>
        <span class="logo-text">STUDIO</span>
      </a>
      <div class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#portfolio" class="nav-link">Portfolio</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      <button class="mobile-menu-btn" aria-label="Toggle menu">
        <span class="hamburger"></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu">
    <a href="#about" class="mobile-link">About</a>
    <a href="#services" class="mobile-link">Services</a>
    <a href="#portfolio" class="mobile-link">Portfolio</a>
    <a href="#contact" class="mobile-link">Contact</a>
  </div>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    <div class="hero-content">
      <h1 class="hero-title" data-animate>
        <span class="title-line">MAXIMIZE</span>
        <span class="title-line accent">YOUR POTENTIAL</span>
      </h1>
      <p class="hero-subtitle" data-animate>
        Creative studio specializing in digital experiences, brand identity, and innovative solutions that transform ideas into reality.
      </p>
      <div class="hero-cta" data-animate>
        <a href="#portfolio" class="btn btn-primary">View Work</a>
        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>

  <!-- About Section -->
  <section class="about-section" id="about">
    <div class="section-container">
      <div class="about-grid">
        <div class="about-visual" data-animate>
          <div class="rotating-element">
            <svg viewBox="0 0 200 200" class="abstract-shape">
              <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-cyan)" stroke-width="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-green)" stroke-width="0.5"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="var(--color-magenta)" stroke-width="0.5"/>
              <line x1="100" y1="20" x2="100" y2="180" stroke="var(--color-cyan)" stroke-width="0.3" opacity="0.5"/>
              <line x1="20" y1="100" x2="180" y2="100" stroke="var(--color-cyan)" stroke-width="0.3" opacity="0.5"/>
            </svg>
          </div>
          <div class="floating-badge">
            <span class="badge-number">10+</span>
            <span class="badge-text">Years Experience</span>
          </div>
        </div>
        <div class="about-content" data-animate>
          <span class="section-tag">About Us</span>
          <h2 class="section-title">We Create Digital Experiences That Matter</h2>
          <p class="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p class="section-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-number" data-count="150">0</span>
              <span class="stat-label">Projects Done</span>
            </div>
            <div class="stat-item">
              <span class="stat-number" data-count="80">0</span>
              <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-item">
              <span class="stat-number" data-count="15">0</span>
              <span class="stat-label">Awards Won</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services-section" id="services">
    <div class="section-container">
      <div class="section-header" data-animate>
        <span class="section-tag">What We Do</span>
        <h2 class="section-title centered">Our Services</h2>
      </div>
      <div class="services-grid">
        <div class="service-card" data-animate>
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="service-title">Brand Identity</h3>
          <p class="service-desc">Creating unique visual identities that capture the essence of your brand and resonate with your audience.</p>
          <a href="#" class="service-link">Learn More <span class="arrow">→</span></a>
        </div>
        <div class="service-card" data-animate>
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <h3 class="service-title">Web Design</h3>
          <p class="service-desc">Designing responsive, user-friendly websites that deliver exceptional digital experiences.</p>
          <a href="#" class="service-link">Learn More <span class="arrow">→</span></a>
        </div>
        <div class="service-card" data-animate>
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <h3 class="service-title">Digital Marketing</h3>
          <p class="service-desc">Strategic marketing solutions to amplify your online presence and drive meaningful engagement.</p>
          <a href="#" class="service-link">Learn More <span class="arrow">→</span></a>
        </div>
        <div class="service-card" data-animate>
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <h3 class="service-title">Creative Direction</h3>
          <p class="service-desc">Guiding creative vision from concept to execution, ensuring cohesive and impactful results.</p>
          <a href="#" class="service-link">Learn More <span class="arrow">→</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="portfolio-section" id="portfolio">
    <div class="section-container">
      <div class="section-header" data-animate>
        <span class="section-tag">Our Work</span>
        <h2 class="section-title centered">Featured Projects</h2>
      </div>
      <div class="portfolio-grid">
        <div class="portfolio-item large" data-animate>
          <div class="portfolio-image" style="background: linear-gradient(135deg, var(--color-cyan), var(--color-dark));">
            <div class="portfolio-overlay">
              <span class="portfolio-category">Branding</span>
              <h3 class="portfolio-title">Modern Tech Brand</h3>
              <a href="#" class="portfolio-link">View Project</a>
            </div>
          </div>
        </div>
        <div class="portfolio-item" data-animate>
          <div class="portfolio-image" style="background: linear-gradient(135deg, var(--color-magenta), var(--color-dark));">
            <div class="portfolio-overlay">
              <span class="portfolio-category">Web Design</span>
              <h3 class="portfolio-title">E-Commerce Platform</h3>
              <a href="#" class="portfolio-link">View Project</a>
            </div>
          </div>
        </div>
        <div class="portfolio-item" data-animate>
          <div class="portfolio-image" style="background: linear-gradient(135deg, var(--color-green), var(--color-dark));">
            <div class="portfolio-overlay">
              <span class="portfolio-category">Marketing</span>
              <h3 class="portfolio-title">Campaign Launch</h3>
              <a href="#" class="portfolio-link">View Project</a>
            </div>
          </div>
        </div>
        <div class="portfolio-item" data-animate>
          <div class="portfolio-image" style="background: linear-gradient(135deg, var(--color-cyan), var(--color-magenta));">
            <div class="portfolio-overlay">
              <span class="portfolio-category">Identity</span>
              <h3 class="portfolio-title">Startup Rebrand</h3>
              <a href="#" class="portfolio-link">View Project</a>
            </div>
          </div>
        </div>
        <div class="portfolio-item large" data-animate>
          <div class="portfolio-image" style="background: linear-gradient(135deg, var(--color-green), var(--color-cyan));">
            <div class="portfolio-overlay">
              <span class="portfolio-category">Digital</span>
              <h3 class="portfolio-title">Interactive Experience</h3>
              <a href="#" class="portfolio-link">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <div class="section-container">
      <div class="section-header" data-animate>
        <span class="section-tag">Testimonials</span>
        <h2 class="section-title centered">What Clients Say</h2>
      </div>
      <div class="testimonials-slider" data-animate>
        <div class="testimonial-card active">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. An exceptional team that delivers beyond expectations.</p>
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <span class="author-name">John Smith</span>
              <span class="author-role">CEO, Tech Corp</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Truly transformative work that exceeded our goals.</p>
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <span class="author-name">Sarah Johnson</span>
              <span class="author-role">Marketing Director</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Professional, creative, and incredibly talented team.</p>
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <span class="author-name">Michael Chen</span>
              <span class="author-role">Founder, StartupXYZ</span>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial-dots">
        <button class="dot active" data-index="0"></button>
        <button class="dot" data-index="1"></button>
        <button class="dot" data-index="2"></button>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact-section" id="contact">
    <div class="section-container">
      <div class="contact-grid">
        <div class="contact-info" data-animate>
          <span class="section-tag">Get in Touch</span>
          <h2 class="section-title">Let's Work Together</h2>
          <p class="section-text">Have a project in mind? We'd love to hear about it. Drop us a line and let's create something amazing together.</p>
          <div class="contact-details">
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>hello@studio.com</span>
            </div>
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>123 Creative Street, Design City</span>
            </div>
          </div>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
          </div>
        </div>
        <div class="contact-form-wrapper" data-animate>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <input type="text" id="name" name="name" required placeholder=" ">
              <label for="name">Your Name</label>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" required placeholder=" ">
              <label for="email">Email Address</label>
            </div>
            <div class="form-group">
              <input type="text" id="subject" name="subject" placeholder=" ">
              <label for="subject">Subject</label>
            </div>
            <div class="form-group">
              <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
              <label for="message">Your Message</label>
            </div>
            <button type="submit" class="btn btn-primary btn-full">
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#" class="logo">
            <div class="logo-spinner small"></div>
            <span class="logo-text">STUDIO</span>
          </a>
          <p class="footer-tagline">Creating digital experiences that inspire and transform.</p>
        </div>
        <div class="footer-links-grid">
          <div class="footer-column">
            <h4>Navigation</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <a href="#">Brand Identity</a>
            <a href="#">Web Design</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Creative Direction</a>
          </div>
          <div class="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Studio. All rights reserved.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">LI</a>
        </div>
      </div>
    </div>
  </footer>
`;

// ==========================================
// JavaScript Functionality
// ==========================================

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Hide/show navbar on scroll direction
  if (currentScroll > lastScroll && currentScroll > 200) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  lastScroll = currentScroll;
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate counters when stats come into view
      if (entry.target.querySelector('.stat-number')) {
        animateCounters(entry.target);
      }
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});

// Counter Animation
function animateCounters(container) {
  const counters = container.querySelectorAll('.stat-number[data-count]');
  counters.forEach(counter => {
    if (counter.dataset.animated) return;
    counter.dataset.animated = 'true';

    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);

      counter.textContent = current + '+';

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.testimonial-dots .dot');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove('active', 'prev', 'next');
    if (i === index) {
      card.classList.add('active');
    } else if (i < index) {
      card.classList.add('prev');
    } else {
      card.classList.add('next');
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}, 5000);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  btn.innerHTML = '<span>Sending...</span>';
  btn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    btn.innerHTML = '<span>Message Sent!</span>';
    btn.classList.add('success');
    contactForm.reset();

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      btn.classList.remove('success');
    }, 3000);
  }, 1500);
});

// Parallax Effect on Hero
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroHeight = hero.offsetHeight;

  if (scrolled < heroHeight) {
    const parallax = scrolled * 0.4;
    heroContent.style.transform = `translateY(${parallax}px)`;
    heroContent.style.opacity = 1 - (scrolled / heroHeight);

    orbs.forEach((orb, i) => {
      const speed = 0.2 + (i * 0.1);
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }
});

// Mouse Move Effect on Hero
hero.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { left, top, width, height } = hero.getBoundingClientRect();

  const x = (clientX - left) / width - 0.5;
  const y = (clientY - top) / height - 0.5;

  orbs.forEach((orb, i) => {
    const factor = 20 + (i * 10);
    orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

// Add loaded class to body for initial animations
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
