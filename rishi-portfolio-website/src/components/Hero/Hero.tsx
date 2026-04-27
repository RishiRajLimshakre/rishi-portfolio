import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" aria-label="Hero Section">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-inner" ref={contentRef}>
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-badge fade-up">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">Open to Opportunities</span>
          </div>

          <h1 className="hero-name fade-up delay-1">
            <span className="name-first">Rishi Raj</span>
            <span className="name-last">Limshakre</span>
          </h1>

          <p className="hero-role fade-up delay-2">
            Full Stack Developer &nbsp;|&nbsp; B.Tech IT 
          </p>

          <p className="hero-desc fade-up delay-3">
            I build scalable full-stack web applications using React, Node.js, Express, and MongoDB.
            Passionate about solving real-world problems through clean architecture and thoughtful user experience.
          </p>

          <div className="hero-cta fade-up delay-4">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact Me
            </a>
          </div>

          <div className="hero-scroll fade-up delay-5">
            <div className="scroll-mouse" aria-hidden="true">
              <div className="scroll-wheel" />
            </div>
            <span className="scroll-text">scroll to explore</span>
          </div>
        </div>

        {/* Right: Developer Card */}
        <div className="hero-right fade-up delay-2">
          <div className="dev-card">
            <div className="dev-card-header">
              <span className="dev-card-dot red" />
              <span className="dev-card-dot yellow" />
              <span className="dev-card-dot green" />
              <span className="dev-card-filename">developer.ts</span>
            </div>

            <div className="dev-card-code">
              <div>
                <span className="code-keyword">const </span>
                <span className="code-var">developer</span>
                <span className="code-bracket"> = {'{'}</span>
              </div>
              <div>&nbsp;&nbsp;<span className="code-key">name</span><span className="code-bracket">: </span><span className="code-string">"Rishi Raj Limshakre"</span><span className="code-bracket">,</span></div>
              <div>&nbsp;&nbsp;<span className="code-key">role</span><span className="code-bracket">: </span><span className="code-string">"MERN Stack Developer"</span><span className="code-bracket">,</span></div>
              <div>&nbsp;&nbsp;<span className="code-key">stack</span><span className="code-bracket">: [</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-array-item">"React"</span><span className="code-bracket">, </span><span className="code-array-item">"TypeScript"</span><span className="code-bracket">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-array-item">"Node.js"</span><span className="code-bracket">, </span><span className="code-array-item">"Express"</span><span className="code-bracket">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-array-item">"MongoDB"</span></div>
              <div>&nbsp;&nbsp;<span className="code-bracket">],</span></div>
              <div>&nbsp;&nbsp;<span className="code-key">passion</span><span className="code-bracket">: </span><span className="code-string">"Building scalable</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">real-world apps"</span><span className="code-bracket">,</span></div>
              <div>&nbsp;&nbsp;<span className="code-key">available</span><span className="code-bracket">: </span><span className="code-bool">true</span></div>
              <div><span className="code-bracket">{'}'}</span><span className="code-bracket">;</span></div>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">2+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">6th</div>
              <div className="stat-label">Semester</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
