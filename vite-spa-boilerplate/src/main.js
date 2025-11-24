import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-content">
      <div class="nav-logo">NeuroWave</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#specs">Specs</a></li>
        <li><a href="#buy" class="nav-buy">Buy</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="data-stream-overlay"></div>
    <div class="hero-content">
      <div class="hero-badge fade-in">🚀 Limited Pre-Order • Only 5,000 Units Available • Ships Q2 2025</div>
      <h1 class="hero-title fade-in">NeuroWave AI</h1>
      <p class="hero-subtitle fade-in-delay-1">Unlock Your Brain's Hidden Potential</p>
      <p class="hero-description fade-in-delay-2">
        The world's first consumer brain-computer interface that reads, understands, and optimizes your mental performance in real-time.<br />
        <strong>Join 50,000+ innovators, athletes, and entrepreneurs</strong> who are transforming how they think, focus, and perform.
      </p>
      <div class="hero-cta fade-in-delay-3">
        <button class="btn-primary">Reserve Your NeuroWave - $500 Deposit</button>
        <button class="btn-secondary">Watch How It Works (2 min)</button>
      </div>
      <p class="hero-offer fade-in-delay-3">🎁 Pre-order today: Save $400 + Get 1 Year of Pro AI Features FREE ($299 value)</p>
      <div class="hero-device fade-in-delay-4">
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/oVn8uQuTw_o?autoplay=1&mute=1&loop=1&playlist=oVn8uQuTw_o&controls=0&modestbranding=1&rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Section 1: AI Intelligence -->
  <section class="feature-section bg-light" id="features">
    <div class="feature-content">
      <div class="feature-text">
        <h2 class="feature-title">AI that thinks<br />like you do.</h2>
        <p class="feature-description">
          Our advanced neural AI processes thousands of brain wave signals per second,
          learning your unique patterns and providing insights you never knew were possible.
        </p>
        <a href="#" class="feature-link">Learn more about NeuroAI →</a>
      </div>
      <div class="feature-visual">
        <div class="ai-chip-visual">
          <div class="chip-core"></div>
          <div class="chip-ring ring-1"></div>
          <div class="chip-ring ring-2"></div>
          <div class="chip-ring ring-3"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Section 2: Real-time Monitoring -->
  <section class="feature-section bg-dark">
    <div class="feature-content reverse">
      <div class="feature-text">
        <h2 class="feature-title">Real-time insights.<br />Instant clarity.</h2>
        <p class="feature-description">
          Monitor your mental states in real-time with millisecond precision.
          From focus levels to emotional patterns, see what's happening in your mind as it happens.
        </p>
        <a href="#" class="feature-link">Explore monitoring features →</a>
      </div>
      <div class="feature-visual">
        <div class="dashboard-visual">
          <div class="dashboard-card">
            <div class="metric-label">Focus Level</div>
            <div class="metric-value">94%</div>
            <div class="metric-graph"></div>
          </div>
          <div class="dashboard-card">
            <div class="metric-label">Relaxation</div>
            <div class="metric-value">78%</div>
            <div class="metric-graph"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Section 3: Privacy -->
  <section class="feature-section bg-light">
    <div class="feature-content">
      <div class="feature-text">
        <h2 class="feature-title">Your thoughts.<br />Your privacy.</h2>
        <p class="feature-description">
          All neural processing happens on-device with end-to-end encryption.
          Your brain data never leaves your device without your explicit permission.
        </p>
        <a href="#" class="feature-link">Learn about our privacy commitment →</a>
      </div>
      <div class="feature-visual">
        <div class="privacy-visual">
          <div class="lock-icon">
            <div class="lock-body"></div>
            <div class="lock-shackle"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Specifications -->
  <section class="specs-section" id="specs">
    <h2 class="section-title">Technical Specifications</h2>
    <div class="specs-grid">
      <div class="spec-card">
        <div class="spec-icon">⚡</div>
        <h3 class="spec-title">Neural Processor</h3>
        <p class="spec-detail">Custom-designed 8-core NeuroAI chip with 16-core Neural Engine</p>
      </div>
      <div class="spec-card">
        <div class="spec-icon">📡</div>
        <h3 class="spec-title">Signal Accuracy</h3>
        <p class="spec-detail">99.7% accuracy across all 5 brain wave frequencies (Delta, Theta, Alpha, Beta, Gamma)</p>
      </div>
      <div class="spec-card">
        <div class="spec-icon">🔋</div>
        <h3 class="spec-title">Battery Life</h3>
        <p class="spec-detail">Up to 24 hours of continuous monitoring on a single charge</p>
      </div>
      <div class="spec-card">
        <div class="spec-icon">🌐</div>
        <h3 class="spec-title">Connectivity</h3>
        <p class="spec-detail">Bluetooth 5.3, Wi-Fi 6E, and cellular connectivity options</p>
      </div>
      <div class="spec-card">
        <div class="spec-icon">💧</div>
        <h3 class="spec-title">Design</h3>
        <p class="spec-detail">Medical-grade titanium. Water resistant to 50 meters. Weighs just 45 grams.</p>
      </div>
      <div class="spec-card">
        <div class="spec-icon">🎯</div>
        <h3 class="spec-title">Sensors</h3>
        <p class="spec-detail">32-channel EEG array with active noise cancellation and motion compensation</p>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing-section" id="buy">
    <h2 class="section-title">Choose Your NeuroWave</h2>
    <div class="pricing-cards">
      <div class="price-card">
        <h3 class="price-model">NeuroWave</h3>
        <p class="price-tagline">Essential neural reading</p>
        <div class="price-amount">$2,499</div>
        <ul class="price-features">
          <li>16-channel EEG sensors</li>
          <li>8-core NeuroAI processor</li>
          <li>20-hour battery life</li>
          <li>Standard monitoring features</li>
        </ul>
        <button class="btn-price">Pre-order</button>
      </div>
      <div class="price-card featured">
        <div class="price-badge">Most Popular</div>
        <h3 class="price-model">NeuroWave Pro</h3>
        <p class="price-tagline">Professional-grade neural analysis</p>
        <div class="price-amount">$3,999</div>
        <ul class="price-features">
          <li>32-channel EEG sensors</li>
          <li>16-core NeuroAI processor</li>
          <li>24-hour battery life</li>
          <li>Advanced AI insights</li>
          <li>Real-time coaching</li>
          <li>Priority support</li>
        </ul>
        <button class="btn-price primary">Pre-order</button>
      </div>
      <div class="price-card">
        <h3 class="price-model">NeuroWave Research</h3>
        <p class="price-tagline">For researchers and institutions</p>
        <div class="price-amount">Contact us</div>
        <ul class="price-features">
          <li>64-channel EEG sensors</li>
          <li>Custom processing options</li>
          <li>Raw data export</li>
          <li>API access</li>
          <li>White-label options</li>
          <li>Dedicated support</li>
        </ul>
        <button class="btn-price">Contact Sales</button>
      </div>
    </div>
  </section>

  <!-- Q&A Section -->
  <section class="qna-section" id="faq">
    <h2 class="section-title">Questions & Answers</h2>
    <div class="qna-container">
      <div class="qna-item">
        <div class="qna-question">
          <h3>How does NeuroWave AI read brain signals?</h3>
          <span class="qna-icon">+</span>
        </div>
        <div class="qna-answer">
          <p>NeuroWave AI uses advanced EEG (electroencephalography) sensors to detect electrical activity in your brain. Our proprietary AI algorithms process these signals in real-time, identifying patterns across all five brain wave frequencies: Delta, Theta, Alpha, Beta, and Gamma.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-question">
          <h3>Is my brain data secure?</h3>
          <span class="qna-icon">+</span>
        </div>
        <div class="qna-answer">
          <p>Absolutely. All neural processing happens on-device with end-to-end encryption. Your brain data never leaves your device without your explicit permission. We follow medical-grade security standards and comply with all privacy regulations including HIPAA and GDPR.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-question">
          <h3>How long does the battery last?</h3>
          <span class="qna-icon">+</span>
        </div>
        <div class="qna-answer">
          <p>The NeuroWave provides up to 20 hours of continuous monitoring, while the NeuroWave Pro offers up to 24 hours. Both models support fast charging - just 15 minutes of charging provides 4 hours of use.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-question">
          <h3>Do I need any special training to use it?</h3>
          <span class="qna-icon">+</span>
        </div>
        <div class="qna-answer">
          <p>No special training required! NeuroWave AI is designed to be intuitive and user-friendly. Simply wear the device, open the companion app, and our AI guides you through setup in less than 5 minutes. The device automatically calibrates to your unique brain patterns.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-question">
          <h3>What's the difference between models?</h3>
          <span class="qna-icon">+</span>
        </div>
        <div class="qna-answer">
          <p>The standard NeuroWave offers essential neural reading with 16 channels, perfect for personal use. The Pro model features 32 channels for higher accuracy, advanced AI coaching, and priority support. The Research edition includes 64 channels, raw data export, and API access for institutional use.</p>
        </div>
      </div>
      <div class="qna-item">
        <div class="qna-question">
          <h3>When will NeuroWave AI be available?</h3>
          <span class="qna-icon">+</span>
        </div>
        <div class="qna-answer">
          <p>We're currently in the final stages of production. Pre-orders will ship starting Q2 2025. Join our waitlist below to be notified when pre-orders open and receive exclusive early-bird pricing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Waitlist Section -->
  <section class="waitlist-section">
    <div class="waitlist-content">
      <h2 class="waitlist-title">Join the Waitlist</h2>
      <p class="waitlist-description">
        Be the first to know when NeuroWave AI launches.<br />
        Get exclusive early-bird pricing and priority access.
      </p>
      <form class="waitlist-form" id="waitlistForm">
        <div class="form-group">
          <input
            type="email"
            id="emailInput"
            class="email-input"
            placeholder="Enter your email address"
            required
            autocomplete="email"
          />
          <button type="submit" class="btn-waitlist">Join Waitlist</button>
        </div>
        <p class="form-note">We respect your privacy. No spam, ever.</p>
      </form>
      <div class="success-message" id="successMessage">
        <div class="success-icon">✓</div>
        <h3>You're on the list!</h3>
        <p>Thank you for joining the waitlist. We'll notify you as soon as NeuroWave AI is available.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Product</h4>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#specs">Specifications</a></li>
          <li><a href="#buy">Buy</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Warranty</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 NeuroWave AI. All rights reserved.</p>
    </div>
  </footer>
`

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

// Observe all feature sections
setTimeout(() => {
  document.querySelectorAll('.feature-section, .specs-section, .pricing-section').forEach(section => {
    observer.observe(section)
  })
}, 100)

// Navbar scroll effect
let lastScroll = 0
const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }

  lastScroll = currentScroll
})

// Enhanced parallax effect with multiple layers
const parallaxLayers = {
  slow: document.querySelectorAll('.feature-visual, .ai-chip-visual, .dashboard-visual, .privacy-visual'),
  medium: document.querySelectorAll('.feature-section'),
  fast: document.querySelectorAll('.hero::before, .hero::after')
}

let ticking = false

function updateParallax() {
  const scrolled = window.pageYOffset
  const viewportHeight = window.innerHeight

  // Slow parallax layer
  parallaxLayers.slow.forEach((element) => {
    const rect = element.getBoundingClientRect()

    if (rect.top < viewportHeight && rect.bottom > 0) {
      const elementTop = rect.top + scrolled
      const elementHeight = element.offsetHeight
      const scrollProgress = (scrolled + viewportHeight - elementTop) / (viewportHeight + elementHeight)
      const yOffset = (scrollProgress - 0.5) * 80

      element.style.transform = `translate3d(0, ${yOffset}px, 0)`
    }
  })

  // Medium parallax layer
  parallaxLayers.medium.forEach((element) => {
    const rect = element.getBoundingClientRect()

    if (rect.top < viewportHeight && rect.bottom > 0) {
      const elementTop = rect.top + scrolled
      const elementHeight = element.offsetHeight
      const scrollProgress = (scrolled + viewportHeight - elementTop) / (viewportHeight + elementHeight)
      const yOffset = (scrollProgress - 0.5) * 40

      element.style.transform = `translate3d(0, ${yOffset}px, 0)`
    }
  })

  ticking = false
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax)
    ticking = true
  }
})

// Mouse move effect on hero device with smooth parallax
const heroDevice = document.querySelector('.hero-device')
let mouseX = 0
let mouseY = 0
let currentX = 0
let currentY = 0

if (heroDevice) {
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window

    // Calculate mouse position as percentage from center
    mouseX = (clientX / innerWidth - 0.5) * 2
    mouseY = (clientY / innerHeight - 0.5) * 2
  })

  // Smooth animation loop for mouse parallax
  function animateMouseParallax() {
    // Lerp (linear interpolation) for smooth movement
    currentX += (mouseX - currentX) * 0.1
    currentY += (mouseY - currentY) * 0.1

    // Apply subtle 3D tilt effect
    const tiltX = currentY * 10
    const tiltY = -currentX * 10

    heroDevice.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1)`

    requestAnimationFrame(animateMouseParallax)
  }

  animateMouseParallax()
}

// Background parallax for hero section
const hero = document.querySelector('.hero')
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * 0.5
    hero.style.backgroundPosition = `center ${-rate}px`
  })
}

// Q&A accordion functionality
document.querySelectorAll('.qna-item').forEach(item => {
  const question = item.querySelector('.qna-question')
  const answer = item.querySelector('.qna-answer')
  const icon = item.querySelector('.qna-icon')

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active')

    // Close all other items
    document.querySelectorAll('.qna-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active')
        otherItem.querySelector('.qna-icon').textContent = '+'
      }
    })

    // Toggle current item
    if (isOpen) {
      item.classList.remove('active')
      icon.textContent = '+'
    } else {
      item.classList.add('active')
      icon.textContent = '−'
    }
  })
})

// Waitlist form functionality
const waitlistForm = document.getElementById('waitlistForm')
const successMessage = document.getElementById('successMessage')
const emailInput = document.getElementById('emailInput')

if (waitlistForm && successMessage && emailInput) {
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()

    if (email) {
      // Mock data - store in console for demonstration
      console.log('Waitlist signup:', {
        email: email,
        timestamp: new Date().toISOString(),
        source: 'waitlist-form'
      })

      // Hide form and show success message
      waitlistForm.style.display = 'none'
      successMessage.style.display = 'flex'

      // Optional: Reset form and switch back after 5 seconds
      // setTimeout(() => {
      //   waitlistForm.style.display = 'flex'
      //   successMessage.style.display = 'none'
      //   emailInput.value = ''
      // }, 5000)
    }
  })
}

// Observe Q&A and waitlist sections for scroll animations
setTimeout(() => {
  const qnaSection = document.querySelector('.qna-section')
  const waitlistSection = document.querySelector('.waitlist-section')

  if (qnaSection) observer.observe(qnaSection)
  if (waitlistSection) observer.observe(waitlistSection)
}, 100)
