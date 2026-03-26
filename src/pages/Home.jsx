import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceHighlight from '../components/ServiceHighlight';
import { assetUrl } from '../utils/assetUrl';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ServiceHighlight />

            <section className="about-teaser section-padding">
                <div className="container">
                    <div className="teaser-grid">
                        <div className="teaser-content">
                            <h2 className="text-gradient">The Collective</h2>
                            <p>
                                At Beauty Trap It, our elite team of stylists is dedicated to the art of transformative hair styling. 
                                We believe that your hair is your crown, and we are here to provide an empowering space where beauty and hustle converge.
                            </p>
                            <Link to="/about" className="btn-primary">Our Story</Link>
                        </div>
                        <div className="teaser-image">
                            <img src={assetUrl('assets/photoshoot/team-teaser.jpg')} alt="The Collective" className="rounded-card" />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .teaser-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .teaser-content h2 {
          font-size: 2.5rem;
          margin-bottom: 24px;
        }
        .teaser-content p {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 32px;
        }
        .rounded-card {
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          border: 1px solid var(--glass-border);
        }
        @media (max-width: 768px) {
          .teaser-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .teaser-image {
            order: -1;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;
