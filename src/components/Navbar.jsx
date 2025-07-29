// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ico from '../assets/ico.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Inicio');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Certificaciones', href: '#certificaciones' },
        { name: 'Contacto', href: '#contacto' },
        { name: 'Bolsa de trabajo', href: '#bolsa-trabajo' },
    ];

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md py-1 sm:py-2 border-b border-gray-200' : 'bg-white py-2 sm:py-2 border-b border-gray-100'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo - Optimizado para móviles */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, -5, 0, 5, 0],
                                }}
                                transition={{ duration: 0.5 }}
                                className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden"
                            >
                                <img 
                                    src={ico} 
                                    alt="Logo Especialiquidos" 
                                    className="w-9 h-9 sm:w-12 sm:h-12 object-contain" 
                                />
                            </motion.div>
                            <motion.div
                                className="text-primary-dark font-bold text-base sm:text-xl md:text-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="hidden sm:inline">ESPECIALIQUIDOS</span>
                                <span className="sm:hidden">ESPECIALIQUIDOS</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium ${
                                    activeLink === link.name
                                        ? 'text-secondary'
                                        : 'text-gray-700 hover:text-secondary'
                                }`}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                whileHover={{
                                    y: -3,
                                }}
                                onClick={() => setActiveLink(link.name)}
                            >
                                {link.name}
                                {activeLink === link.name && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"
                                        layoutId="activeIndicator"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-secondary focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-5 w-5 sm:h-6 sm:w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-5 w-5 sm:h-6 sm:w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Optimizado para pantallas pequeñas */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-2 pt-1 pb-2 space-y-1 bg-white shadow-lg border-t border-gray-200">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                                        activeLink === link.name
                                            ? 'text-secondary bg-secondary/10'
                                            : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                                    }`}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ x: 5 }}
                                    onClick={() => {
                                        setActiveLink(link.name);
                                        setIsOpen(false);
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                className="w-full mt-1 bg-secondary hover:bg-secondary-dark text-white font-bold py-2.5 px-3 rounded-lg text-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contactar
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;