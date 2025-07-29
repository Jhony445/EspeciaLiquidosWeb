// sections/Hero.jsx
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTruck, FaShieldAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      {/* Sección Hero Principal */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-5 md:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="bg-gray-200 border-2 border-dashed w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70"></div>
        </div>

        <div className="relative min-h-[75vh] flex items-center bg-gradient-to-r from-primary-dark to-primary">
          {/* Fondo opcional para versión con imagen de fondo */}
          {/* <div className="absolute inset-0 z-0">
    <img 
      src="/assets/hero-bg.jpg" 
      alt="Fondo logístico"
      className="w-full h-full object-cover opacity-20"
    />
  </div> */}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Texto a la izquierda - Contenido principal */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    50 años de experiencia en transporte especializado de líquidos y carga en general
                  </h1>

                  <p className="text-xl text-gray-100 mb-10 max-w-2xl">
                    Comprometidos con la calidad, seguridad y desarrollo de México
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition-all"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 5px 15px rgba(243, 156, 18, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver servicios
                    </motion.button>

                    <motion.button
                      className="bg-transparent hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg border-2 border-white transition-all"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contáctanos
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative">
                  <img
                    src="/assets/camion.png"
                    alt="Camión cisterna de Especialiquidos"
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                  />

                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-xl -z-10"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-xl -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section id="inicio" className="scroll-mt-24 py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Columna de texto */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                Sobre <span className="text-secondary">Especialiquidos</span>
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                Fundada en 1971, Especialíquidos S.A. de C.V. es una empresa mexicana con más de 50 años brindando servicios de transporte especializado de líquidos y carga general.
              </p>

              <p className="text-gray-700 text-lg mb-8">
                Con presencia en CDMX y operaciones en el Parque Industrial Atitalaquia, nos destacamos por la profesionalización de nuestro personal y la modernización constante de nuestra flota.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Transporte de líquidos peligrosos y no peligrosos",
                  "Carga general y especializada",
                  "Servicios logísticos integrales",
                  "Cumplimiento de normas de seguridad"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Misión, Visión y Valores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">Misión</h3>
                  <p className="text-gray-600">Brindar servicios seguros, puntuales y de calidad en transporte especializado.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">Visión</h3>
                  <p className="text-gray-600">Ser líderes en el transporte especializado a nivel nacional con estándares internacionales.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">Valores</h3>
                  <p className="text-gray-600">Honestidad, respeto, puntualidad, responsabilidad y compromiso.</p>
                </div>
              </div>
            </motion.div>

            {/* Columna de imagen */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/patio.png"  // Cambia esta ruta
                  alt="Flota de Especialiquidos"
                  className="w-full h-96 object-cover"
                />

                {/* Elementos decorativos */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-lg z-0 backdrop-blur-sm"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg z-0 backdrop-blur-sm"></div>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTruck className="text-3xl text-secondary mb-2" />
                  <p className="text-2xl font-bold text-primary-dark">50+</p>
                  <p className="text-gray-600">Vehículos</p>
                </motion.div>

                <motion.div
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaShieldAlt className="text-3xl text-secondary mb-2" />
                  <p className="text-2xl font-bold text-primary-dark">50+</p>
                  <p className="text-gray-600">Años</p>
                </motion.div>

                <motion.div
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaMapMarkerAlt className="text-3xl text-secondary mb-2" />
                  <p className="text-2xl font-bold text-primary-dark">12</p>
                  <p className="text-gray-600">Estados</p>
                </motion.div>

                <motion.div
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaClock className="text-3xl text-secondary mb-2" />
                  <p className="text-2xl font-bold text-primary-dark">24/7</p>
                  <p className="text-gray-600">Servicio</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;