import React, { useState, FormEvent } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Contact.css';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

const Contact: React.FC = () => {
  const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate async submission
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1200);
  };

  return (
    <section id="contact" className="contact section" aria-label="Contact Section">
      <div className="contact-inner" ref={ref}>
        {/* Left */}
        <div className="contact-left">
          <div className="contact-heading-group fade-up">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Contact Me</h2>
            <div className="heading-line" />
          </div>

          <div className="fade-up delay-1">
            <h3 className="contact-tagline">
              Let's build something <span>impactful</span> together.
            </h3>
            <p className="contact-description">
              I'm currently open to internships, freelance work, and full-time opportunities.
              If you have a project idea or collaboration in mind, feel free to reach out.
            </p>
          </div>

          <div className="availability-badge fade-up delay-2" aria-label="Availability status">
            <span className="avail-dot" aria-hidden="true" />
            <span>Available for new opportunities</span>
          </div>

          <div className="contact-info-list fade-up delay-3">
            <a
              href="mailto:rishirajlimshakre@gmail.com"
              className="contact-info-item"
              aria-label="Send email to Rishi Raj Limshakre"
            >
              <div className="contact-info-icon">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="contact-info-body">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">rishirajlimshakre@gmail.com</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rishiraj-limshakre/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
              aria-label="Visit LinkedIn profile"
            >
              <div className="contact-info-icon">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div className="contact-info-body">
                <span className="contact-info-label">LinkedIn</span>
                <span className="contact-info-value">rishiraj-limshakre</span>
              </div>
            </a>

            <a
              href="https://github.com/RishiRajLimshakre"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
              aria-label="Visit GitHub profile"
            >
              <div className="contact-info-icon">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <div className="contact-info-body">
                <span className="contact-info-label">GitHub</span>
                <span className="contact-info-value">RishiRajLimshakre</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right – Form */}
        <div className="contact-form-wrapper fade-up delay-2">
          <h3 className="contact-form-title">Send a Message</h3>

          {submitted ? (
            <div className="form-success" role="status" aria-live="polite">
              <div className="form-success-icon">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h4>Message Sent!</h4>
              <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-input"
                    placeholder="Rishi"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="form-input"
                    placeholder="Raj"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Internship Opportunity / Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hi Rishi, I'd love to discuss..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>

              <button type="submit" className="form-submit" disabled={sending}>
                {sending ? (
                  <>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ animation: 'spin 1s linear infinite' }} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
