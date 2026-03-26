import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

const services = [
    {
        title: 'Signature Sew-ins',
        desc: 'Flawless, long-lasting installs designed to redefine your look.',
        img: assetUrl('assets/photoshoot/glam-friends.jpg')
    },
    {
        title: 'Luxury Silk Press',
        desc: 'Maximum shine and movement for the ultimate Urban Glam transformation.',
        img: assetUrl('assets/photoshoot/salon-vibe.jpg')
    },
    {
        title: 'Precision Cuts',
        desc: 'Expertly crafted cuts tailored to your unique features and style.',
        img: assetUrl('assets/photoshoot/contact-desk.jpg')
    }
];

const ServiceHighlight = () => {
    return (
        <section className="section-padding services-highlight">
            <div className="container">
                <div className="section-header">
                    <h2 className="text-gradient">Our Signature Services</h2>
                    <p>Explore our most popular salon offerings</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="service-card glass-card"
                        >
                            <div className="service-img-container">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="service-info">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to="/services" className="service-link">View Pricing →</Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .section-header h2 {
          font-size: 3.5rem;
          margin-bottom: 20px;
        }
        .section-header p {
          color: var(--text-muted);
          font-size: 1.2rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        .service-card {
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .service-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }
        .service-img-container {
          height: 200px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.02);
          padding: 20px;
        }
        .service-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1);
          transition: var(--transition-smooth);
        }
        .service-card:hover .service-img-container img {
          filter: grayscale(0) contrast(1);
          transform: scale(1.1);
        }
        .service-info {
          padding: 30px;
        }
        .service-info h3 {
          margin-bottom: 12px;
          color: var(--primary);
        }
        .service-info p {
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .service-link {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary);
        }
      `}</style>
        </section>
    );
};

export default ServiceHighlight;
