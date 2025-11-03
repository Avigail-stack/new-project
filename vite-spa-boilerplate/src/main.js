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
    <div class="hero-content">
      <h1 class="hero-title fade-in">NeuroWave AI</h1>
      <p class="hero-subtitle fade-in-delay-1">Read your mind. Literally.</p>
      <p class="hero-description fade-in-delay-2">
        The world's most advanced brain waves signal AI reader.<br />
        Experience neural technology that understands you.
      </p>
      <div class="hero-cta fade-in-delay-3">
        <button class="btn-primary">Pre-order Now</button>
        <button class="btn-secondary">Watch the Film</button>
      </div>
      <div class="hero-device fade-in-delay-4">
        <div class="device-mockup">
          <div class="device-screen">
            <div class="brain-wave-visual">
              <div class="wave-line wave-1"></div>
              <div class="wave-line wave-2"></div>
              <div class="wave-line wave-3"></div>
              <div class="wave-line wave-4"></div>
            </div>
          </div>
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
