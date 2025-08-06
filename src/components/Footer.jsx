// components/Footer.jsx
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTruck, FaShieldAlt, FaClock } from 'react-icons/fa';
import ico from '../assets/ico.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="bg-primary-dark text-white mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Wave divider */}
            <div className="w-full max-w-screen-xl mx-auto px-4 overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        className="fill-secondary"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        className="fill-primary"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="fill-primary-dark"
                    ></path>
                </svg>
            </div>

            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            {/* Logo placeholder - replace with your actual logo */}
                            <img src={ico} alt="Logo Especia" className="w-14 h-14 object-contain" />
                            <h2 className="ml-4 text-2xl font-bold">ESPECIALIQUIDOS</h2>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Transporte especializado de combustibles y líquidos peligrosos con los más altos estándares de seguridad y confiabilidad.
                        </p>

                        <div className="flex space-x-4">
                            <motion.a
                                href="#"
                                className="bg-primary p-3 rounded-full"
                                whileHover={{ y: -5, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="bg-primary p-3 rounded-full"
                                whileHover={{ y: -5, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/company/especialiquidos-s.a.-de-c.v./about/"
                                className="bg-primary p-3 rounded-full"
                                whileHover={{ y: -5, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <FaTruck className="mr-2 text-secondary" />
                            Enlaces rápidos
                        </h3>
                        <ul className="space-y-3">
                            {['Inicio', 'Servicios', 'Certificaciones', 'Contacto', 'Bolsa de trabajo'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a href="#" className="text-gray-300 hover:text-white flex items-center">
                                        <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <FaShieldAlt className="mr-2 text-secondary" />
                            Contáctanos
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">
                                    Av. De las Granjas #574,<br />
                                    Col. Santo Tomas, C.P. 02020<br />
                                    Ciudad de México, Azcapotzalco
                                </span>
                            </li>
                            <li className="flex items-start">
                                <FaPhone className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">
                                    01 55 5561-3297<br />
                                    01 55 5561-9209
                                </span>
                            </li>
                            <li className="flex items-start">
                                <FaEnvelope className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">
                                    contacto@especialiquidos.cl<br />
                                    ventas@especialiquidos.cl
                                </span>
                            </li>
                            <li className="flex items-start">
                                <FaClock className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">
                                    Lunes-Viernes: 8:00-18:00<br />
                                    Sábados: 9:00-13:00
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Especialiquidos. Todos los derechos reservados.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex space-x-6">
                                <motion.li whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm">Términos y Condiciones</a>
                                </motion.li>
                                <motion.li whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidad</a>
                                </motion.li>
                                <motion.li whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm">Mapa del Sitio</a>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;