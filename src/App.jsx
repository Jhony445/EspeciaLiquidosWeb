import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import Nosotros from "./sections/Nosotros";
import Contacto from "./sections/Contacto";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Servicios />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
