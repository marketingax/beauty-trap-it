import React from 'react';
import servicesData from '../assets/services.json';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="services-page pt-40 pb-20">
      <div className="container">
        <div className="section-header text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient mb-6 text-5xl text-7xl"
          >
            Our Service Menu
          </motion.h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From precision cuts to flawless installs, discover the wide range of luxury hair services
            offered at Beauty Trap-it. All appointments require a deposit via Square.
          </p>
        </div>

        <div className="services-container">
          {servicesData.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="service-category mb-24"
            >
              <h2 className="category-title">{cat.category}</h2>
              <div className="services-grid">
                {cat.services.map((service, sIndex) => (
                  <div key={sIndex} className="service-item glass-card">
                    <div className="service-header">
                      <h3>{service.name}</h3>
                      <span className="price">
                        <span className="starting-at">Starting at </span>
                        {service.price}
                      </span>
                    </div>
                    <div className="service-footer">
                      <span className="time">{service.time}</span>
                      <a
                        href="https://app.squareup.com/appointments/book/hx5cv4kciodolk/L8EMZEYG272GF/start"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="book-btn"
                      >
                        Book
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="booking-cta mt-12 text-center">
          <p className="mb-8 text-muted">Don't see what you're looking for? Contact us for custom inquiries.</p>
          <a
            href="https://app.squareup.com/appointments/book/hx5cv4kciodolk/L8EMZEYG272GF/start"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Full Booking Menu
          </a>
        </div>
      </div>

      <style jsx>{`
        .category-title {
          font-size: 2rem;
          margin-bottom: 30px;
          color: var(--primary);
          border-left: 4px solid var(--primary);
          padding-left: 20px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }
        .service-item {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition-smooth);
        }
        .service-item:hover {
          background: rgba(229, 176, 176, 0.05);
          transform: scale(1.02);
        }
        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .service-header h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          max-width: 60%;
        }
        .price {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: var(--primary);
          font-size: 1.25rem;
          text-align: right;
        }
        .starting-at {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.70rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 2px;
        }
        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .time {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .book-btn {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--secondary);
          background: var(--primary);
          padding: 6px 16px;
          border-radius: 4px;
          transition: var(--transition-smooth);
        }
        .book-btn:hover {
          background: white;
          color: var(--secondary);
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
