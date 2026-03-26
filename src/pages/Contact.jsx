import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Miss Tessa will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page pt-40 pb-20">
      <div className="container">
        <div className="section-header text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient mb-6 text-5xl md:text-7xl"
          >
            Connect With Us
          </motion.h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about a service or want to book a consultation?
            Reach out and let's start your hair journey together.
          </p>
        </div>

        <div className="contact-grid grid md-grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-container"
          >
            <div className="glass-card p-10 mb-8">
              <h2 className="text-primary mb-8 font-serif">Studio Info</h2>
              <ul className="info-list">
                <li className="info-item">
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div className="info-text">
                    <h3>Location</h3>
                    <p>5456 Riverstation Blvd Suite 140 Atlanta GA 30349</p>
                  </div>
                </li>
                <li className="info-item">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="info-text">
                    <h3>Phone</h3>
                    <p><a href="tel:470-256-1213" className="hover-primary">(470) 256-1213</a></p>
                  </div>
                </li>
                <li className="info-item">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>info@beautytrapit.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card p-10 mb-8">
              <h2 className="text-primary mb-6 font-serif">Service Areas</h2>
              <p className="text-muted mb-4 uppercase tracking-widest text-xs font-bold">Bringing Glam to South Atlanta</p>
              <ul className="service-areas-grid">
                <li>Riverdale</li>
                <li>College Park</li>
                <li>Airport Area</li>
                <li>Fayetteville</li>
                <li>Fairburn</li>
                <li>Jonesboro</li>
                <li>South Atlanta</li>
              </ul>
            </div>

            <div className="glass-card p-10">
              <h2 className="text-primary mb-6 font-serif">Follow Us</h2>
              <p className="text-muted mb-6">Stay updated with our latest work and special offers.</p>
              <div className="social-flex">
                <a href="https://www.instagram.com/BeautyTrapIt" target="_blank" rel="noopener noreferrer" className="social-btn"><Instagram size={24} /></a>
                <a href="https://www.facebook.com/BeautyTrapIt" target="_blank" rel="noopener noreferrer" className="social-btn"><Facebook size={24} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 h-full">
              <h2 className="text-primary mb-8 font-serif">Send Message</h2>
              <div className="form-grid">
                <div className="input-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="input-group full-width">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Service Interested In"
                    required
                  />
                </div>
                <div className="input-group full-width">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
        }
        .info-list {
          list-style: none;
        }
        .info-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(229, 176, 176, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-text h3 {
          font-size: 0.9rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .info-text p {
          color: white;
          font-size: 1.1rem;
        }
        .social-flex {
          display: flex;
          gap: 20px;
        }
        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .social-btn:hover {
          background: var(--primary);
          color: var(--secondary);
          transform: translateY(-5px);
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .input-group.full-width {
          grid-column: span 2;
        }
        label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        input, textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          padding: 12px 16px;
          border-radius: 8px;
          color: white;
          font-family: inherit;
          transition: var(--transition-smooth);
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255,255,255,0.05);
        }
        .service-areas-grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .service-areas-grid li {
          color: white;
          font-size: 0.95rem;
          display: flex;
          items-center: center;
          gap: 8px;
        }
        .service-areas-grid li::before {
          content: '•';
          color: var(--primary);
          font-size: 1.2rem;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .input-group.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
