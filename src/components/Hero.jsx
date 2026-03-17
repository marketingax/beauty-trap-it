import React from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${assetUrl('assets/photoshoot/hero-team.jpg')})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">Capture Your <span className="text-gradient italic">Confidence</span></h1>
          <p className="hero-subtitle">
            Where beauty, style, and hustle come together. South Atlanta's premier destination for high-end installs and elite urban glam.
          </p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/hx5cv4kciodolk/L8EMZEYG272GF/start" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Appointment</a>
            <a href="/services" className="btn-secondary">View Menu</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          height: 90vh;
          position: relative;
          background-size: cover;
          background-position: center top;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 100%);
          z-index: 1;
        }
        .hero-container {
          position: relative;
          z-index: 2;
        }
        .hero-content {
          max-width: 700px;
        }
        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 500px;
        }
        .hero-btns {
          display: flex;
          gap: 20px;
        }
        .btn-secondary {
          padding: 12px 32px;
          border-radius: 50px;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-weight: 600;
          transition: var(--transition-smooth);
        }
        .btn-secondary:hover {
          background: var(--primary);
          color: var(--secondary);
        }
        @media (max-width: 768px) {
          .hero-section {
            text-align: center;
            justify-content: center;
          }
          .hero-overlay {
            background: rgba(10,10,10,0.8);
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
