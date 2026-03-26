import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHomePage = location.pathname === '/';
    const shouldBeTransparent = isHomePage && !scrolled;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${shouldBeTransparent ? 'nav-transparent' : 'nav-solid'}`}>
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <img src={assetUrl('assets/logo.png')} alt="Beauty Trap-it" className="nav-logo" />
                    <span className="text-xl font-bold tracking-tighter text-gradient mobile-hidden">BEAUTY TRAP IT</span>
                </Link>

                {/* Desktop Menu */}
                <div className="mobile-hidden md-flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium hover-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://app.squareup.com/appointments/book/hx5cv4kciodolk/L8EMZEYG272GF/start"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md-hidden text-primary" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mobile-overlay fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="mobile-drawer fixed top-0 right-0 h-full w-4/5 max-w-sm z-[1001] bg-[#0a0a0a] p-10 flex flex-col border-l border-[var(--glass-border)]"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <img src={assetUrl('assets/logo.png')} alt="Logo" className="h-10 w-auto" />
                                <button onClick={() => setIsOpen(false)} className="text-primary">
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-2xl font-serif ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a
                                    href="https://app.squareup.com/appointments/book/hx5cv4kciodolk/L8EMZEYG272GF/start"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-center mt-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book Appointment
                                </a>
                                <a
                                    href="tel:470-256-1213"
                                    className="flex items-center justify-center gap-2 text-primary font-serif text-xl border border-primary/20 rounded-lg py-3 mt-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={20} /> Call Us
                                </a>
                            </div>

                            <div className="mt-auto pt-10 border-t border-white/5">
                                <p className="text-muted text-sm">© Beauty Trap-it</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style jsx>{`
        .nav-logo {
          height: 50px;
          width: auto;
        }
        .text-primary { color: var(--primary) !important; }
        .hover-primary:hover { color: var(--primary) !important; }
        
        @media (max-width: 768px) {
          .nav-logo { height: 40px; }
        }

        /* Custom Drawer Styles */
        .mobile-drawer {
          box-shadow: -10px 0 30px rgba(0,0,0,0.5);
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
