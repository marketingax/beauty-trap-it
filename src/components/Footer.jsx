import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={assetUrl('assets/logo.png')} alt="Beauty Trap-it" className="footer-logo" />
            <p className="footer-desc">
              South Atlanta's premier Urban Glam salon. We capture confidence and define style through professional, high-end styling.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/BeautyTrapIt" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/BeautyTrapIt" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><MapPin size={18} /> 5456 Riverstation Blvd Suite 140 Atlanta GA 30349</li>
              <li><Phone size={18} /> (123) 456-7890</li>
              <li><Mail size={18} /> info@beautytrapit.com</li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4>Hours</h4>
            <ul>
              <li><span>Mon - Fri:</span> 9am - 7pm</li>
              <li><span>Saturday:</span> 8am - 5pm</li>
              <li><span>Sunday:</span> Closed</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Beauty Trap-it. All rights reserved. Built with precision.</p>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background-color: #050505;
          padding: 120px 0 60px;
          border-top: 1px solid var(--glass-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }
        .footer-logo {
          height: 60px;
          margin-bottom: 20px;
        }
        .footer-desc {
          color: var(--text-muted);
          margin-bottom: 24px;
          max-width: 300px;
        }
        .social-links {
          display: flex;
          gap: 16px;
        }
        .social-link {
          color: var(--primary);
          transition: var(--transition-smooth);
        }
        .social-link:hover {
          color: white;
          transform: translateY(-3px);
        }
        h4 {
          color: var(--primary);
          margin-bottom: 24px;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        ul {
          list-style: none;
        }
        ul li {
          margin-bottom: 12px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        ul li a:hover {
          color: var(--primary);
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
