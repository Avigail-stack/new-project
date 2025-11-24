import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Skip to main content for accessibility -->
  <a href="#main-content" class="skip-to-main">Skip to main content</a>

  <!-- Navigation -->
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="nav-content">
      <div class="nav-logo" tabindex="0" role="link" aria-label="NeuroWave home">NeuroWave</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#specs">Specs</a></li>
        <li><a href="#buy" class="nav-buy">Buy</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="main-content" role="banner" aria-label="Hero section">
    <div class="data-stream-overlay" aria-hidden="true"></div>
    <div class="hero-content">
      <div class="hero-badge fade-in" role="status" aria-live="polite">Limited Pre-Order • Only 5,000 Units Available • Ships Q2 2025</div>
      <h1 class="hero-title fade-in">NeuroWave AI</h1>
      <p class="hero-subtitle fade-in-delay-1">Unlock Your Brain's Hidden Potential</p>
      <p class="hero-description fade-in-delay-2">
        The world's first consumer brain-computer interface that reads, understands, and optimizes your mental performance in real-time.<br />
        <strong>Join 50,000+ innovators, athletes, and entrepreneurs</strong> who are transforming how they think, focus, and perform.
      </p>
      <div class="hero-cta fade-in-delay-3">
        <button class="btn-primary" aria-label="Reserve your NeuroWave device with $500 deposit">Reserve Your NeuroWave - $500 Deposit</button>
        <button class="btn-secondary" aria-label="Watch 2 minute video about how it works">Watch How It Works (2 min)</button>
      </div>
      <p class="hero-offer fade-in-delay-3">Pre-order today: Save $400 + Get 1 Year of Pro AI Features FREE ($299 value)</p>
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

  <!-- Why NeuroWave Section -->
  <section class="why-section" id="why">
    <div class="why-header">
      <h2 class="section-title">Why NeuroWave Changes Everything</h2>
      <p class="section-subtitle">The difference between knowing your mind and mastering it</p>
    </div>
    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="benefit-icon">🎯</div>
        <h3 class="benefit-title">Peak Performance On Demand</h3>
        <p class="benefit-description">
          Athletes increase reaction time by 23%. Professionals enter deep focus states 3x faster.
          Students retain information 40% better. NeuroWave doesn't just measure performance—it unlocks it.
        </p>
        <div class="benefit-stat">
          <span class="stat-number">87%</span>
          <span class="stat-label">report peak performance within 2 weeks</span>
        </div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🧘</div>
        <h3 class="benefit-title">Master Stress & Anxiety</h3>
        <p class="benefit-description">
          Real-time biofeedback teaches your brain to regulate stress naturally. Users report 65% reduction
          in anxiety episodes. Feel calm, collected, and in control—even in high-pressure situations.
        </p>
        <div class="benefit-stat">
          <span class="stat-number">92%</span>
          <span class="stat-label">experience better sleep quality</span>
        </div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">💡</div>
        <h3 class="benefit-title">Unlock Creative Flow</h3>
        <p class="benefit-description">
          Identify and amplify your most creative brain states. Writers, artists, and entrepreneurs
          report breakthrough moments 2-3x more frequently. Never struggle with creative blocks again.
        </p>
        <div class="benefit-stat">
          <span class="stat-number">78%</span>
          <span class="stat-label">achieve flow state within first month</span>
        </div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🚀</div>
        <h3 class="benefit-title">Accelerated Learning</h3>
        <p class="benefit-description">
          Optimize your brain for rapid learning. Know exactly when you're primed to absorb new information.
          Medical students cut study time by 30% while improving test scores. Learn smarter, not harder.
        </p>
        <div class="benefit-stat">
          <span class="stat-number">3.2x</span>
          <span class="stat-label">faster skill acquisition on average</span>
        </div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">⚡</div>
        <h3 class="benefit-title">Energy Without Caffeine</h3>
        <p class="benefit-description">
          Combat mental fatigue before it hits. NeuroWave predicts energy dips and guides you through
          targeted mental exercises. 71% of users reduce caffeine consumption while feeling more energized.
        </p>
        <div class="benefit-stat">
          <span class="stat-number">4.5hrs</span>
          <span class="stat-label">average increase in productive hours daily</span>
        </div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🎓</div>
        <h3 class="benefit-title">Personalized Brain Training</h3>
        <p class="benefit-description">
          Your brain is unique. NeuroWave creates a custom training program based on YOUR neural patterns.
          Unlike generic brain training apps, this adapts to you in real-time for maximum results.
        </p>
        <div class="benefit-stat">
          <span class="stat-number">10x</span>
          <span class="stat-label">more effective than standard meditation apps</span>
        </div>
      </div>
    </div>
    <div class="why-cta">
      <h3 class="why-cta-title">Ready to Transform Your Mind?</h3>
      <p class="why-cta-subtitle">Join thousands of high-performers who've already upgraded their brains</p>
      <button class="btn-primary">Secure Your Pre-Order Now</button>
      <p class="why-cta-note">30-day money-back guarantee • Free shipping • 2-year warranty included</p>
    </div>
  </section>

  <!-- Feature Section 1: AI Intelligence -->
  <section class="feature-section bg-light" id="features">
    <div class="feature-content">
      <div class="feature-text">
        <h2 class="feature-title">AI that thinks<br />like you do.</h2>
        <p class="feature-description">
          Our proprietary NeuroAI engine processes <strong>50,000 brain signals per second</strong>,
          learning your unique neural patterns within 48 hours. It predicts your mental states before you're
          even aware of them—alerting you to stress spikes, focus drops, and optimal performance windows.
          <br /><br />
          <strong>Real example:</strong> Sarah, a software engineer, receives an alert: "Your focus is dropping.
          Take a 5-minute walk now." She does. Returns with 40% better code quality. That's NeuroAI at work.
        </p>
        <ul class="feature-list">
          <li>Personalized mental state predictions with 96% accuracy</li>
          <li>Adaptive AI coaching that evolves with your brain</li>
          <li>Actionable insights you can use immediately</li>
        </ul>
        <a href="#" class="feature-link">See NeuroAI in action →</a>
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
        <h2 class="feature-title">See inside your mind.<br />In real-time.</h2>
        <p class="feature-description">
          <strong>Millisecond-precision monitoring</strong> shows you exactly what's happening in your brain,
          right now. Track focus intensity, stress levels, creative flow, emotional balance, and cognitive load—all
          simultaneously on your smartphone or smartwatch.
          <br /><br />
          Know when you're in peak state for important meetings. Catch stress before it becomes burnout.
          Identify the exact conditions that spark your best ideas. It's like having a personal brain coach
          24/7.
        </p>
        <ul class="feature-list">
          <li>Live dashboard tracks 12+ mental metrics simultaneously</li>
          <li>Smart alerts notify you of important brain state changes</li>
          <li>Historical trends reveal patterns you never noticed</li>
          <li>Compatible with Apple Health, Google Fit, and major wellness apps</li>
        </ul>
        <a href="#" class="feature-link">Explore the dashboard →</a>
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
        <h2 class="feature-title">Your thoughts.<br />Your privacy.<br />Forever.</h2>
        <p class="feature-description">
          <strong>Zero-knowledge architecture.</strong> All neural processing happens on-device with military-grade
          end-to-end encryption. Your brain data never touches our servers. Period.
          <br /><br />
          We can't see your thoughts. We can't sell your data. We can't hand it over to anyone—because
          we literally don't have it. Your mind belongs to you, and only you.
        </p>
        <ul class="feature-list">
          <li>HIPAA and GDPR compliant</li>
          <li>Certified by independent security auditors</li>
          <li>Open-source encryption protocols</li>
          <li>You can delete all data with one tap—permanently</li>
        </ul>
        <a href="#" class="feature-link">Read our security whitepaper →</a>
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

  <!-- Use Cases Section -->
  <section class="use-cases-section" id="use-cases">
    <div class="use-cases-header">
      <h2 class="section-title">Built For Real Life</h2>
      <p class="section-subtitle">Whatever you're working on, NeuroWave helps you do it better</p>
    </div>
    <div class="use-cases-grid">
      <div class="use-case-card">
        <div class="use-case-emoji">💼</div>
        <h3 class="use-case-title">Professionals & Executives</h3>
        <p class="use-case-description">
          Dominate back-to-back meetings without burnout. Make better decisions under pressure.
          Know exactly when to tackle complex problems vs. routine tasks. Schedule your day
          around your brain's natural rhythms.
        </p>
        <div class="use-case-quote">
          "I closed 3 major deals in a month after identifying my peak negotiation windows."
          <br />— <strong>Marcus T., VP of Sales</strong>
        </div>
      </div>
      <div class="use-case-card">
        <div class="use-case-emoji">🏃</div>
        <h3 class="use-case-title">Athletes & Competitors</h3>
        <p class="use-case-description">
          Train your mental game as rigorously as your physical skills. Achieve pre-competition
          calm instantly. Recover faster between events. Visualize success with optimal
          brain-wave patterns.
        </p>
        <div class="use-case-quote">
          "My reaction time improved 18%. That's the difference between gold and silver."
          <br />— <strong>Alex K., Olympic Athlete</strong>
        </div>
      </div>
      <div class="use-case-card">
        <div class="use-case-emoji">🎨</div>
        <h3 class="use-case-title">Creators & Artists</h3>
        <p class="use-case-description">
          Never miss your creative window again. Learn what triggers your flow state and
          replicate it on demand. Break through blocks. Finish projects faster without
          sacrificing quality.
        </p>
        <div class="use-case-quote">
          "I wrote my entire album in 6 weeks. Usually takes me 6 months."
          <br />— <strong>Jamie R., Music Producer</strong>
        </div>
      </div>
      <div class="use-case-card">
        <div class="use-case-emoji">🎓</div>
        <h3 class="use-case-title">Students & Academics</h3>
        <p class="use-case-description">
          Study smarter, not longer. Optimize your brain for retention during learning sessions.
          Reduce test anxiety. Know the perfect time to review material for maximum recall.
        </p>
        <div class="use-case-quote">
          "From B- average to 3.9 GPA in one semester. Game changer."
          <br />— <strong>David L., Medical Student</strong>
        </div>
      </div>
      <div class="use-case-card">
        <div class="use-case-emoji">🧘</div>
        <h3 class="use-case-title">Wellness Enthusiasts</h3>
        <p class="use-case-description">
          Deepen your meditation practice with real-time feedback. Master breathwork and
          mindfulness. Track your progress objectively. Achieve states of calm that took
          monks years to master.
        </p>
        <div class="use-case-quote">
          "Better than 10 years of meditation apps combined."
          <br />— <strong>Sarah M., Yoga Instructor</strong>
        </div>
      </div>
      <div class="use-case-card">
        <div class="use-case-emoji">👨‍💻</div>
        <h3 class="use-case-title">Tech Workers & Coders</h3>
        <p class="use-case-description">
          Enter deep work instantly. Prevent mental fatigue during long coding sessions.
          Know when to debug vs. architect. Reduce context-switching costs. Work smarter,
          not harder.
        </p>
        <div class="use-case-quote">
          "Shipped more features in Q1 than all of last year. My manager thinks I'm superhuman."
          <br />— <strong>Priya S., Software Engineer</strong>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Proof Section -->
  <section class="social-proof-section">
    <div class="social-proof-content">
      <h2 class="section-title">Trusted By Industry Leaders</h2>
      <div class="stats-row">
        <div class="stat-item">
          <div class="stat-big">50,000+</div>
          <div class="stat-text">Pre-orders worldwide</div>
        </div>
        <div class="stat-item">
          <div class="stat-big">4.9/5</div>
          <div class="stat-text">Beta tester rating</div>
        </div>
        <div class="stat-item">
          <div class="stat-big">89%</div>
          <div class="stat-text">See results in week 1</div>
        </div>
        <div class="stat-item">
          <div class="stat-big">$2.3M</div>
          <div class="stat-text">In neuroscience R&D</div>
        </div>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">
            "I was skeptical, but after 2 weeks I'm a believer. My productivity has genuinely
            doubled. I know exactly when I'm about to hit a wall and can prevent it. This is
            the future of human performance."
          </p>
          <div class="testimonial-author">
            <strong>Dr. Jennifer Hayes</strong>
            <span>Neuroscientist, Stanford University</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">
            "NeuroWave gave me an unfair advantage. I can predict my mental state hours in
            advance and plan accordingly. It's like having insider knowledge about your own
            brain. Worth every penny."
          </p>
          <div class="testimonial-author">
            <strong>Michael Chen</strong>
            <span>CEO, Tech Startup (Exited for $45M)</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">
            "As someone who's tried every productivity hack imaginable, this is the only
            thing that actually worked. Not a gimmick. Real, measurable improvement in focus,
            creativity, and mental stamina."
          </p>
          <div class="testimonial-author">
            <strong>Rachel Morrison</strong>
            <span>Bestselling Author & Performance Coach</span>
          </div>
        </div>
      </div>
      <div class="social-proof-logos">
        <p class="logos-subtitle">Featured In:</p>
        <div class="logos-row">
          <div class="logo-item">TechCrunch</div>
          <div class="logo-item">Wired</div>
          <div class="logo-item">Nature Neuroscience</div>
          <div class="logo-item">MIT Tech Review</div>
          <div class="logo-item">Fast Company</div>
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

  <!-- Limited Time Offer Section -->
  <section class="limited-offer-section">
    <div class="limited-offer-content">
      <div class="offer-badge">⚡ LIMITED TIME PRE-ORDER OFFER</div>
      <h2 class="offer-title">Save $400 + Get Premium Features FREE</h2>
      <p class="offer-subtitle">
        Pre-order in the next <strong>72 hours</strong> and receive:
      </p>
      <div class="offer-benefits">
        <div class="offer-benefit">
          <div class="offer-check">✓</div>
          <div class="offer-text">
            <strong>$400 OFF</strong> retail price (automatically applied)
          </div>
        </div>
        <div class="offer-benefit">
          <div class="offer-check">✓</div>
          <div class="offer-text">
            <strong>1 Year Pro AI Features</strong> ($299 value) — usually $24.99/month
          </div>
        </div>
        <div class="offer-benefit">
          <div class="offer-check">✓</div>
          <div class="offer-text">
            <strong>Priority Shipping</strong> — be among the first 1,000 to receive NeuroWave
          </div>
        </div>
        <div class="offer-benefit">
          <div class="offer-check">✓</div>
          <div class="offer-text">
            <strong>Exclusive Beta Access</strong> to upcoming features before public release
          </div>
        </div>
        <div class="offer-benefit">
          <div class="offer-check">✓</div>
          <div class="offer-text">
            <strong>Lifetime Priority Support</strong> — skip the queue forever
          </div>
        </div>
      </div>
      <div class="offer-timer">
        <div class="timer-label">Offer expires in:</div>
        <div class="timer-display">
          <div class="timer-unit">
            <span class="timer-number">71</span>
            <span class="timer-label-small">Hours</span>
          </div>
          <div class="timer-separator">:</div>
          <div class="timer-unit">
            <span class="timer-number">43</span>
            <span class="timer-label-small">Minutes</span>
          </div>
          <div class="timer-separator">:</div>
          <div class="timer-unit">
            <span class="timer-number">22</span>
            <span class="timer-label-small">Seconds</span>
          </div>
        </div>
      </div>
      <p class="offer-disclaimer">
        <strong>Only 847 units remaining</strong> at this price. After that, full retail price applies.
      </p>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing-section" id="buy">
    <h2 class="section-title">Choose Your NeuroWave</h2>
    <p class="pricing-subtitle">30-day money-back guarantee • Free shipping • 2-year warranty</p>
    <div class="pricing-cards">
      <div class="price-card">
        <h3 class="price-model">NeuroWave</h3>
        <p class="price-tagline">Essential neural reading for personal growth</p>
        <div class="price-strike">$2,899</div>
        <div class="price-amount">$2,499</div>
        <div class="price-savings">Save $400 today</div>
        <ul class="price-features">
          <li>✓ 16-channel EEG sensors</li>
          <li>✓ 8-core NeuroAI processor</li>
          <li>✓ 20-hour battery life</li>
          <li>✓ Standard monitoring features</li>
          <li>✓ Mobile app included</li>
          <li>✓ Basic insights & alerts</li>
        </ul>
        <button class="btn-price">Secure Your NeuroWave • $500 Deposit</button>
        <p class="price-note">Remaining balance due at shipping</p>
      </div>
      <div class="price-card featured">
        <div class="price-badge">🏆 BEST VALUE • MOST POPULAR</div>
        <h3 class="price-model">NeuroWave Pro</h3>
        <p class="price-tagline">Professional-grade for peak performers</p>
        <div class="price-strike">$4,399</div>
        <div class="price-amount">$3,999</div>
        <div class="price-savings">Save $400 + FREE Pro Features ($299/yr value)</div>
        <ul class="price-features">
          <li>✓ <strong>Everything in NeuroWave, plus:</strong></li>
          <li>✓ 32-channel EEG sensors (2x precision)</li>
          <li>✓ 16-core NeuroAI processor (2x faster)</li>
          <li>✓ 24-hour battery life</li>
          <li>✓ Advanced AI coaching & predictions</li>
          <li>✓ Real-time performance optimization</li>
          <li>✓ Custom brain training programs</li>
          <li>✓ Priority support + extended warranty</li>
        </ul>
        <button class="btn-price primary">Secure Your Pro • $500 Deposit</button>
        <p class="price-note">Remaining balance due at shipping</p>
      </div>
      <div class="price-card">
        <h3 class="price-model">NeuroWave Research</h3>
        <p class="price-tagline">For research institutions & enterprises</p>
        <div class="price-amount">Custom Quote</div>
        <ul class="price-features">
          <li>✓ <strong>Everything in Pro, plus:</strong></li>
          <li>✓ 64-channel EEG sensors (medical-grade)</li>
          <li>✓ Custom processing & algorithms</li>
          <li>✓ Raw data export & API access</li>
          <li>✓ White-label & custom branding</li>
          <li>✓ Bulk pricing available</li>
          <li>✓ Dedicated account manager</li>
          <li>✓ Training & integration support</li>
        </ul>
        <button class="btn-price">Contact Sales Team</button>
        <p class="price-note">Tailored solutions for your organization</p>
      </div>
    </div>
    <div class="pricing-guarantee">
      <h3 class="guarantee-title">🛡️ Our Iron-Clad Guarantee</h3>
      <p class="guarantee-text">
        Try NeuroWave risk-free for 30 days. If you don't see measurable improvement in focus, stress management,
        or mental performance, return it for a full refund. No questions asked. We're that confident it will
        transform your life.
      </p>
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
      <h2 class="waitlist-title">Not Ready to Pre-Order Yet?</h2>
      <p class="waitlist-description">
        Join <strong>120,000+ people</strong> on the waitlist to stay updated.<br />
        Get exclusive launch notifications, expert brain optimization tips, and special insider pricing when we go live.
      </p>
      <form class="waitlist-form" id="waitlistForm" aria-label="Waitlist signup form">
        <div class="form-group">
          <label for="emailInput" class="visually-hidden">Email address</label>
          <input
            type="email"
            id="emailInput"
            class="email-input"
            placeholder="Enter your email address"
            required
            autocomplete="email"
            aria-required="true"
            aria-describedby="form-note"
            aria-invalid="false"
          />
          <button type="submit" class="btn-waitlist" aria-label="Join waitlist">Join Free Waitlist</button>
        </div>
        <p class="form-note" id="form-note">Exclusive insider updates • No spam, ever • Unsubscribe anytime</p>
      </form>
      <div class="success-message" id="successMessage" role="status" aria-live="polite" aria-atomic="true">
        <div class="success-icon" aria-hidden="true">✓</div>
        <h3>Welcome to the NeuroWave Community!</h3>
        <p>You're officially on the list. Check your inbox for a special welcome gift and insider tips to start optimizing your brain today.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer" role="contentinfo">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>NeuroWave AI</h3>
        <p>The world's first consumer brain-computer interface. Transform how you think, focus, and perform.</p>
      </div>
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
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#" aria-label="Contact us">Contact Us</a></li>
          <li><a href="#" aria-label="View documentation">Documentation</a></li>
          <li><a href="#" aria-label="Warranty information">Warranty</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#" aria-label="About NeuroWave AI">About</a></li>
          <li><a href="#" aria-label="Research and development">Research</a></li>
          <li><a href="#" aria-label="Career opportunities">Careers</a></li>
          <li><a href="#" aria-label="Privacy policy">Privacy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 NeuroWave AI. All rights reserved.</p>
      <div class="footer-social" role="navigation" aria-label="Social media links">
        <a href="#" aria-label="Follow us on Twitter">𝕏</a>
        <a href="#" aria-label="Follow us on LinkedIn">in</a>
        <a href="#" aria-label="Follow us on Instagram">📷</a>
      </div>
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
  document.querySelectorAll('.feature-section, .why-section, .use-cases-section, .social-proof-section, .limited-offer-section, .specs-section, .pricing-section').forEach(section => {
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
  slow: document.querySelectorAll('.feature-visual, .ai-chip-visual, .dashboard-visual, .privacy-visual, .benefit-card, .use-case-card, .testimonial-card'),
  medium: document.querySelectorAll('.feature-section, .why-section, .use-cases-section'),
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

// Waitlist form functionality with accessibility
const waitlistForm = document.getElementById('waitlistForm')
const successMessage = document.getElementById('successMessage')
const emailInput = document.getElementById('emailInput')

if (waitlistForm && successMessage && emailInput) {
  // Real-time validation for accessibility
  emailInput.addEventListener('input', (e) => {
    if (emailInput.validity.valid) {
      emailInput.setAttribute('aria-invalid', 'false')
    } else if (emailInput.value.length > 0) {
      emailInput.setAttribute('aria-invalid', 'true')
    }
  })

  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()

    if (email && emailInput.validity.valid) {
      // Mock data - store in console for demonstration
      console.log('Waitlist signup:', {
        email: email,
        timestamp: new Date().toISOString(),
        source: 'waitlist-form'
      })

      // Hide form and show success message
      waitlistForm.style.display = 'none'
      successMessage.style.display = 'flex'

      // Focus on success message for screen readers
      successMessage.focus()

      // Optional: Reset form and switch back after 5 seconds
      // setTimeout(() => {
      //   waitlistForm.style.display = 'flex'
      //   successMessage.style.display = 'none'
      //   emailInput.value = ''
      //   emailInput.setAttribute('aria-invalid', 'false')
      // }, 5000)
    } else {
      emailInput.setAttribute('aria-invalid', 'true')
      emailInput.focus()
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
