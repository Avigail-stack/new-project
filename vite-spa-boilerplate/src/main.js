import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="#" class="logo">
        <div class="brain-logo">
          <div class="brain-pulse"></div>
          <svg viewBox="0 0 40 40" class="brain-icon">
            <path d="M20 5C14 5 9 10 9 16c0 4 2 7 5 9v10h12V25c3-2 5-5 5-9 0-6-5-11-11-11z" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <path d="M15 20c-2-1-3-3-3-5s2-5 5-5M25 20c2-1 3-3 3-5s-2-5-5-5" fill="none" stroke="currentColor" stroke-width="1"/>
            <circle cx="16" cy="14" r="1.5" fill="currentColor"/>
            <circle cx="24" cy="14" r="1.5" fill="currentColor"/>
            <path d="M14 35h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M15 38h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="logo-text">NEUROWAVE</span>
      </a>
      <div class="nav-links">
        <a href="#features" class="nav-link">Features</a>
        <a href="#technology" class="nav-link">Technology</a>
        <a href="#specs" class="nav-link">Specs</a>
        <a href="#pricing" class="nav-link">Pricing</a>
      </div>
      <button class="mobile-menu-btn" aria-label="Toggle menu">
        <span class="hamburger"></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu">
    <a href="#features" class="mobile-link">Features</a>
    <a href="#technology" class="mobile-link">Technology</a>
    <a href="#specs" class="mobile-link">Specs</a>
    <a href="#pricing" class="mobile-link">Pricing</a>
  </div>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-background">
      <div class="neural-network"></div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="brainwave-lines">
        <div class="wave-line"></div>
        <div class="wave-line"></div>
        <div class="wave-line"></div>
        <div class="wave-line"></div>
        <div class="wave-line"></div>
      </div>
    </div>
    <div class="hero-content">
      <div class="product-badge" data-animate>
        <span class="badge-pulse"></span>
        <span>AI-Powered Neural Technology</span>
      </div>
      <h1 class="hero-title" data-animate>
        <span class="title-line">READ YOUR</span>
        <span class="title-line accent">BRAIN WAVES</span>
      </h1>
      <p class="hero-subtitle" data-animate>
        The world's first consumer AI-powered brain wave signal reader. Decode your thoughts, optimize your focus, and unlock the full potential of your mind.
      </p>
      <div class="hero-cta" data-animate>
        <a href="#pricing" class="btn btn-primary">
          <span>Pre-Order Now</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#technology" class="btn btn-secondary">
          <span>See How It Works</span>
        </a>
      </div>
      <div class="hero-stats" data-animate>
        <div class="hero-stat">
          <span class="stat-value">99.7%</span>
          <span class="stat-desc">Accuracy</span>
        </div>
        <div class="hero-stat">
          <span class="stat-value">< 1ms</span>
          <span class="stat-desc">Latency</span>
        </div>
        <div class="hero-stat">
          <span class="stat-value">8+</span>
          <span class="stat-desc">Channels</span>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span>Explore</span>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features-section" id="features">
    <div class="section-container">
      <div class="section-header" data-animate>
        <span class="section-tag">Capabilities</span>
        <h2 class="section-title centered">Unlock Your Mind's Potential</h2>
        <p class="section-subtitle">Advanced neural signal processing meets elegant design</p>
      </div>
      <div class="features-grid">
        <div class="feature-card featured" data-animate>
          <div class="feature-visual">
            <div class="ai-brain">
              <svg viewBox="0 0 120 120" class="brain-svg">
                <defs>
                  <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:var(--color-cyan)"/>
                    <stop offset="100%" style="stop-color:var(--color-magenta)"/>
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#brainGrad)" stroke-width="0.5" class="pulse-ring"/>
                <circle cx="60" cy="60" r="40" fill="none" stroke="url(#brainGrad)" stroke-width="0.5" class="pulse-ring" style="animation-delay: 0.5s"/>
                <circle cx="60" cy="60" r="30" fill="none" stroke="url(#brainGrad)" stroke-width="0.5" class="pulse-ring" style="animation-delay: 1s"/>
                <path d="M60 20c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 10c16.5 0 30 13.5 30 30s-13.5 30-30 30-30-13.5-30-30 13.5-30 30-30z" fill="none" stroke="var(--color-cyan)" stroke-width="0.3"/>
                <circle cx="45" cy="45" r="3" fill="var(--color-cyan)" class="neuron"/>
                <circle cx="75" cy="45" r="3" fill="var(--color-magenta)" class="neuron"/>
                <circle cx="60" cy="75" r="3" fill="var(--color-green)" class="neuron"/>
                <circle cx="40" cy="65" r="2" fill="var(--color-cyan)" class="neuron"/>
                <circle cx="80" cy="65" r="2" fill="var(--color-magenta)" class="neuron"/>
                <line x1="45" y1="45" x2="75" y2="45" stroke="var(--color-cyan)" stroke-width="0.5" class="synapse"/>
                <line x1="45" y1="45" x2="60" y2="75" stroke="var(--color-green)" stroke-width="0.5" class="synapse"/>
                <line x1="75" y1="45" x2="60" y2="75" stroke="var(--color-magenta)" stroke-width="0.5" class="synapse"/>
              </svg>
            </div>
          </div>
          <div class="feature-content">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>
              </svg>
            </div>
            <h3 class="feature-title">AI-Powered Analysis</h3>
            <p class="feature-desc">Our proprietary deep learning algorithms analyze 8 channels of neural data in real-time, identifying patterns invisible to conventional EEG systems.</p>
          </div>
        </div>
        <div class="feature-card" data-animate>
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h3 class="feature-title">Real-Time Processing</h3>
          <p class="feature-desc">Sub-millisecond latency ensures instantaneous feedback for meditation, focus training, and cognitive enhancement applications.</p>
        </div>
        <div class="feature-card" data-animate>
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3 class="feature-title">24/7 Sleep Tracking</h3>
          <p class="feature-desc">Monitor your sleep stages, dream patterns, and recovery metrics with medical-grade accuracy throughout the night.</p>
        </div>
        <div class="feature-card" data-animate>
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <h3 class="feature-title">Cross-Platform Sync</h3>
          <p class="feature-desc">Seamlessly sync your neural data across iOS, Android, macOS, and Windows. Your mind, everywhere you go.</p>
        </div>
        <div class="feature-card" data-animate>
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="feature-title">Privacy First</h3>
          <p class="feature-desc">End-to-end encryption and on-device processing ensure your most intimate neural data never leaves your control.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Technology Section -->
  <section class="technology-section" id="technology">
    <div class="section-container">
      <div class="tech-grid">
        <div class="tech-content" data-animate>
          <span class="section-tag">The Science</span>
          <h2 class="section-title">Neural AI That Understands You</h2>
          <p class="section-text">
            NeuroWave AI combines cutting-edge dry electrode technology with a custom-trained neural network that has analyzed over 10 million hours of brain wave data.
          </p>
          <p class="section-text">
            Our AI doesn't just read signals—it learns your unique neural patterns, adapting to provide increasingly accurate insights about your cognitive state, emotional responses, and mental performance.
          </p>
          <div class="tech-features">
            <div class="tech-feature">
              <div class="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                </svg>
              </div>
              <div class="tech-feature-content">
                <h4>8-Channel Dry Electrodes</h4>
                <p>Medical-grade sensors require no gel or preparation</p>
              </div>
            </div>
            <div class="tech-feature">
              <div class="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div class="tech-feature-content">
                <h4>On-Device Neural Engine</h4>
                <p>Custom M2-class chip processes 50,000 samples/second</p>
              </div>
            </div>
            <div class="tech-feature">
              <div class="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div class="tech-feature-content">
                <h4>Natural Language Insights</h4>
                <p>AI explains your brain states in plain language</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tech-visual" data-animate>
          <div class="device-mockup">
            <div class="device-screen">
              <div class="screen-content">
                <div class="live-wave-container">
                  <svg viewBox="0 0 300 100" class="live-wave" preserveAspectRatio="none">
                    <path class="wave-path alpha" d="" fill="none" stroke="var(--color-cyan)" stroke-width="2"/>
                    <path class="wave-path beta" d="" fill="none" stroke="var(--color-magenta)" stroke-width="2"/>
                    <path class="wave-path theta" d="" fill="none" stroke="var(--color-green)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="screen-stats">
                  <div class="screen-stat">
                    <span class="screen-label">Focus</span>
                    <div class="progress-bar">
                      <div class="progress-fill focus-progress"></div>
                    </div>
                    <span class="screen-value">87%</span>
                  </div>
                  <div class="screen-stat">
                    <span class="screen-label">Calm</span>
                    <div class="progress-bar">
                      <div class="progress-fill calm-progress"></div>
                    </div>
                    <span class="screen-value">64%</span>
                  </div>
                  <div class="screen-stat">
                    <span class="screen-label">Energy</span>
                    <div class="progress-bar">
                      <div class="progress-fill energy-progress"></div>
                    </div>
                    <span class="screen-value">92%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="device-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Specs Section -->
  <section class="specs-section" id="specs">
    <div class="section-container">
      <div class="section-header" data-animate>
        <span class="section-tag">Specifications</span>
        <h2 class="section-title centered">Engineered for Excellence</h2>
      </div>
      <div class="specs-grid">
        <div class="spec-card" data-animate>
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div class="spec-value">18h</div>
          <div class="spec-label">Battery Life</div>
          <div class="spec-detail">Continuous use with quick charge</div>
        </div>
        <div class="spec-card" data-animate>
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div class="spec-value">8</div>
          <div class="spec-label">EEG Channels</div>
          <div class="spec-detail">Medical-grade dry electrodes</div>
        </div>
        <div class="spec-card" data-animate>
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div class="spec-value">0.8ms</div>
          <div class="spec-label">Latency</div>
          <div class="spec-detail">Real-time neural processing</div>
        </div>
        <div class="spec-card" data-animate>
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <path d="M9 9h6v6H9z"/>
            </svg>
          </div>
          <div class="spec-value">M2</div>
          <div class="spec-label">Neural Chip</div>
          <div class="spec-detail">Custom AI accelerator</div>
        </div>
        <div class="spec-card" data-animate>
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div class="spec-value">50K</div>
          <div class="spec-label">Samples/sec</div>
          <div class="spec-detail">High-resolution capture</div>
        </div>
        <div class="spec-card" data-animate>
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"/>
              <path d="M16 8L2 22M17.5 15H9"/>
            </svg>
          </div>
          <div class="spec-value">52g</div>
          <div class="spec-label">Weight</div>
          <div class="spec-detail">Featherlight comfort</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <div class="section-container">
      <div class="section-header" data-animate>
        <span class="section-tag">Early Access</span>
        <h2 class="section-title centered">What Researchers Say</h2>
      </div>
      <div class="testimonials-slider" data-animate>
        <div class="testimonial-card active">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">The signal quality rivals equipment costing 100x more. NeuroWave AI has fundamentally changed how we approach cognitive research.</p>
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <span class="author-name">Dr. Sarah Chen</span>
              <span class="author-role">Neuroscience Lead, Stanford</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">I've been tracking my focus patterns for 6 months. My productivity has increased 40% just by understanding when my brain performs best.</p>
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <span class="author-name">Marcus Webb</span>
              <span class="author-role">CEO, TechFlow Labs</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">The sleep insights alone are worth it. I finally understand why some nights leave me energized and others don't. Game changer.</p>
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <span class="author-name">Dr. Yuki Tanaka</span>
              <span class="author-role">Sleep Researcher, MIT</span>
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

  <!-- Pricing Section -->
  <section class="pricing-section" id="pricing">
    <div class="section-container">
      <div class="section-header" data-animate>
        <span class="section-tag">Pre-Order</span>
        <h2 class="section-title centered">Choose Your Experience</h2>
        <p class="section-subtitle">Limited early-bird pricing for founding members</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card" data-animate>
          <div class="pricing-header">
            <h3 class="pricing-tier">Explorer</h3>
            <p class="pricing-desc">Perfect for curious minds</p>
          </div>
          <div class="pricing-amount">
            <span class="currency">$</span>
            <span class="price">399</span>
            <span class="period">one-time</span>
          </div>
          <ul class="pricing-features">
            <li><span class="check">✓</span> NeuroWave AI Headband</li>
            <li><span class="check">✓</span> 4-Channel EEG</li>
            <li><span class="check">✓</span> Mobile App (iOS/Android)</li>
            <li><span class="check">✓</span> Basic Sleep Tracking</li>
            <li><span class="check">✓</span> Focus Training Games</li>
            <li class="disabled"><span class="check">—</span> Advanced Analytics</li>
            <li class="disabled"><span class="check">—</span> API Access</li>
          </ul>
          <a href="#" class="btn btn-secondary btn-full">Pre-Order Explorer</a>
        </div>
        <div class="pricing-card featured" data-animate>
          <div class="pricing-badge">Most Popular</div>
          <div class="pricing-header">
            <h3 class="pricing-tier">Professional</h3>
            <p class="pricing-desc">For serious biohackers</p>
          </div>
          <div class="pricing-amount">
            <span class="currency">$</span>
            <span class="price">699</span>
            <span class="period">one-time</span>
          </div>
          <ul class="pricing-features">
            <li><span class="check">✓</span> NeuroWave AI Pro Headband</li>
            <li><span class="check">✓</span> 8-Channel EEG</li>
            <li><span class="check">✓</span> All Platform Apps</li>
            <li><span class="check">✓</span> Advanced Sleep Analysis</li>
            <li><span class="check">✓</span> AI Coaching & Insights</li>
            <li><span class="check">✓</span> Advanced Analytics Dashboard</li>
            <li><span class="check">✓</span> 1 Year Premium Subscription</li>
          </ul>
          <a href="#" class="btn btn-primary btn-full">Pre-Order Professional</a>
        </div>
        <div class="pricing-card" data-animate>
          <div class="pricing-header">
            <h3 class="pricing-tier">Research</h3>
            <p class="pricing-desc">For labs & institutions</p>
          </div>
          <div class="pricing-amount">
            <span class="currency">$</span>
            <span class="price">1,499</span>
            <span class="period">one-time</span>
          </div>
          <ul class="pricing-features">
            <li><span class="check">✓</span> NeuroWave AI Research Kit</li>
            <li><span class="check">✓</span> 8-Channel + Reference</li>
            <li><span class="check">✓</span> Raw Data Export</li>
            <li><span class="check">✓</span> Full API Access</li>
            <li><span class="check">✓</span> Python/MATLAB SDK</li>
            <li><span class="check">✓</span> Priority Support</li>
            <li><span class="check">✓</span> Institutional License</li>
          </ul>
          <a href="#" class="btn btn-secondary btn-full">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="section-container">
      <div class="cta-content" data-animate>
        <h2 class="cta-title">Ready to Read Your Mind?</h2>
        <p class="cta-subtitle">Join 50,000+ early adopters exploring the frontier of neural technology. Ships Q2 2025.</p>
        <div class="cta-form">
          <input type="email" placeholder="Enter your email" class="cta-input" id="waitlistEmail">
          <button class="btn btn-primary" id="waitlistBtn">
            <span>Join Waitlist</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <p class="cta-disclaimer">No spam, ever. We'll only email you about major updates and shipping.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#" class="logo">
            <div class="brain-logo small">
              <svg viewBox="0 0 40 40" class="brain-icon">
                <path d="M20 5C14 5 9 10 9 16c0 4 2 7 5 9v10h12V25c3-2 5-5 5-9 0-6-5-11-11-11z" fill="none" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <span class="logo-text">NEUROWAVE</span>
          </a>
          <p class="footer-tagline">Pioneering the future of human-computer neural interfaces.</p>
        </div>
        <div class="footer-links-grid">
          <div class="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#technology">Technology</a>
            <a href="#specs">Specifications</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press Kit</a>
            <a href="#">Blog</a>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <a href="#">Documentation</a>
            <a href="#">API Reference</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 NeuroWave AI. All rights reserved.</p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="LinkedIn">LI</a>
          <a href="#" aria-label="Discord">DC</a>
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
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});

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

// Live Brainwave Animation
function animateBrainwaves() {
  const wavePaths = document.querySelectorAll('.wave-path');
  const width = 300;
  const height = 100;
  let time = 0;

  function generateWavePath(frequency, amplitude, phase, yOffset) {
    let path = `M 0 ${height / 2 + yOffset}`;
    for (let x = 0; x <= width; x += 2) {
      const y = height / 2 + yOffset +
                Math.sin((x / width) * Math.PI * frequency + time + phase) * amplitude +
                Math.sin((x / width) * Math.PI * frequency * 2.5 + time * 1.5 + phase) * (amplitude * 0.3);
      path += ` L ${x} ${y}`;
    }
    return path;
  }

  function animate() {
    time += 0.05;

    if (wavePaths[0]) wavePaths[0].setAttribute('d', generateWavePath(4, 15, 0, -15));
    if (wavePaths[1]) wavePaths[1].setAttribute('d', generateWavePath(6, 10, Math.PI / 3, 0));
    if (wavePaths[2]) wavePaths[2].setAttribute('d', generateWavePath(3, 12, Math.PI / 2, 15));

    requestAnimationFrame(animate);
  }

  animate();
}

// Progress bar animations
function animateProgressBars() {
  const focusProgress = document.querySelector('.focus-progress');
  const calmProgress = document.querySelector('.calm-progress');
  const energyProgress = document.querySelector('.energy-progress');

  function randomize() {
    if (focusProgress) {
      focusProgress.style.width = `${70 + Math.random() * 25}%`;
    }
    if (calmProgress) {
      calmProgress.style.width = `${50 + Math.random() * 30}%`;
    }
    if (energyProgress) {
      energyProgress.style.width = `${75 + Math.random() * 20}%`;
    }
  }

  randomize();
  setInterval(randomize, 3000);
}

// Waitlist form handling
const waitlistBtn = document.getElementById('waitlistBtn');
const waitlistEmail = document.getElementById('waitlistEmail');

if (waitlistBtn && waitlistEmail) {
  waitlistBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = waitlistEmail.value;

    if (email && email.includes('@')) {
      waitlistBtn.innerHTML = '<span>Joined!</span>';
      waitlistBtn.classList.add('success');
      waitlistEmail.value = '';

      setTimeout(() => {
        waitlistBtn.innerHTML = '<span>Join Waitlist</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        waitlistBtn.classList.remove('success');
      }, 3000);
    }
  });
}

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
  animateBrainwaves();
  animateProgressBars();
});
