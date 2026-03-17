import React from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

const About = () => {
  return (
    <div className="about-page pt-40 pb-20">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="portrait-container"
          >
            <div className="portrait-frame">
              <img src={assetUrl('assets/photoshoot/collective-about.jpg')} alt="The Collective" className="portrait-img" />
              <div className="experience-badge">
                <span className="years">Urban</span>
                <span className="label">Glam</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h1 className="text-gradient mb-6">The Collective</h1>
            <h2 className="subtitle mb-8">Masters of Urban Glam</h2>

            <div className="content-text space-y-6">
              <p>
                Beauty Trap It isn't just a salon—it's a high-energy movement. Born in the heart of South Atlanta, 
                we redefine the traditional "trap" by transforming it into an empowering sanctuary where beauty, 
                individual style, and the urban hustle converge.
              </p>
              <p>
                Our mission is simple: **Capture Your Confidence.** We believe that looking good is the 
                first step to feeling unstoppable. Whether you're an entrepreneur closing deals, a 
                professional climbing the ladder, or a student defining your future, we are here to ensure 
                your hair reflects the powerhouse you truly are.
              </p>
              <p>
                Every visit to our studio is more than an appointment—it's a luxury experience. 
                With wood-grain finishes, sliding barn doors, and the smooth sounds of R&B, we've 
                created a calm yet edgy environment that feels like home for the glamorous.
              </p>
            </div>

            <div className="mission-statement mt-12 p-8 glass-card border-primary">
              <h3 className="text-primary mb-4 font-serif italic italic">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                "To empower the women of South Atlanta by providing a premier Urban Glam experience that 
                celebrates their hustle and captures their confidence through elite styling and 
                a welcoming, modern salon culture."
              </p>
            </div>

            <div className="about-stats mt-12 grid grid-cols-3 gap-8">
              <div className="stat-item">
                <h3 className="text-primary text-3xl font-serif">4+</h3>
                <p className="text-muted text-xs uppercase">Elite Stylists</p>
              </div>
              <div className="stat-item">
                <h3 className="text-primary text-3xl font-serif">500+</h3>
                <p className="text-muted text-xs uppercase">Styles Captured</p>
              </div>
              <div className="stat-item">
                <h3 className="text-primary text-3xl font-serif">South</h3>
                <p className="text-muted text-xs uppercase">Atlanta DNA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: flex-start;
        }
        .portrait-frame {
          position: relative;
          border-radius: 30px;
          overflow: visible;
        }
        .portrait-frame::before {
          content: '';
          position: absolute;
          inset: -20px;
          border: 2px solid var(--primary);
          border-radius: 35px;
          z-index: -1;
          opacity: 0.3;
        }
        .portrait-img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          filter: contrast(1.1) brightness(1.1);
        }
        .experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--gradient-gold);
          color: var(--secondary);
          padding: 20px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 30px rgba(229, 176, 176, 0.4);
        }
        .experience-badge .years {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          line-height:1;
        }
        .experience-badge .label {
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .content-text p {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .mission-statement {
          border-left: 4px solid var(--primary);
        }
        .stat-item h3 {
          margin-bottom: 8px;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .portrait-container {
            max-width: 500px;
            margin: 0 auto 60px;
          }
          .experience-badge {
            right: 50%;
            transform: translateX(50%);
          }
          .about-stats {
            justify-content: center;
          }
          .mission-statement {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
