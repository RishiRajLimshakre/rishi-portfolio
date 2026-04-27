import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './About.css';

const details = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    label: 'Education',
    value: 'B.Tech in Information Technology',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: 'Location',
    value: 'Raipur, Chhattisgarh, India',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    label: 'Focus',
    value: 'Full Stack Development',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: 'Status',
    value: 'Open to Opportunities',
    isStatus: true,
  },
];

const timeline = [
  { year: '2023', desc: 'Started B.Tech in Information Technology' },
  { year: '2024', desc: 'Strengthened Frontend & Core JavaScript skills' },
  { year: '2025', desc: 'Built Full Stack MERN Applications' },
];

const About: React.FC = () => {
  const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="about section" aria-label="About Section">
      <div className="about-inner" ref={ref}>
        {/* Left Column */}
        <div className="about-left">
          <div className="about-heading-group fade-up">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Who I Am</h2>
            <div className="heading-line" />
          </div>

          <div className="about-text-block">
            <p className="fade-up delay-1">
              Hey! I'm a passionate <strong>Full Stack Developer</strong> currently pursuing B.Tech in
              Information Technology. I specialize in the <strong>MERN stack</strong> and enjoy building
              scalable applications that solve real civic and lifestyle problems.
            </p>

            <p className="fade-up delay-2">
              From designing responsive interfaces with <strong>HTML, CSS, JavaScript, and TypeScript</strong> to
              building secure APIs with <strong>Node.js, Express, and MongoDB</strong> — I love working across
              the full stack.
            </p>

            <div className="about-callout fade-up delay-3">
              I am driven by <strong>curiosity</strong>, continuous learning, and building projects
              that create <strong>real-world impact</strong>.
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-right">
          {/* Detail Cards */}
          <div className="about-details-grid">
            {details.map((d, i) => (
              <div
                className={`detail-card fade-up delay-${i + 1}`}
                key={d.label}
              >
                <div className="detail-icon">{d.icon}</div>
                <div className="detail-label">{d.label}</div>
                <div className={`detail-value${d.isStatus ? ' status-open' : ''}`}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="timeline-section fade-up delay-3">
            <div className="timeline-title">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              My Journey
            </div>
            <div className="timeline">
              {timeline.map((item) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-dot">
                    <div className="timeline-dot-inner" />
                  </div>
                  <div className="timeline-body">
                    <span className="timeline-year">{item.year}</span>
                    <span className="timeline-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
