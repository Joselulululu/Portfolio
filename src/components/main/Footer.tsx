export default function Footer() {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-white/10 py-12 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
          <div className="space-y-2">
            <p className="text-gray-400 text-sm italic">Jose Luis Lopez Fuentes</p>
            <p className="text-gray-400 text-sm">joseluisaajc@gmail.com</p>
            <p className="text-gray-400 text-sm">+34 722 23 99 19</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-white font-bold text-lg mb-4">Navegación</h3>
          <nav className="flex flex-col space-y-3">
            <button onClick={() => scrollToSection('qsomos')} className="text-gray-400 hover:text-indigo-400 text-sm transition-all">
              Quienes Somos
            </button>
            <button onClick={() => scrollToSection('formacion')} className="text-gray-400 hover:text-indigo-400 text-sm transition-all">
              Formación
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-indigo-400 text-sm transition-all">
              Servicios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-400 hover:text-indigo-400 text-sm transition-all">
              Contacto
            </button>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="bg-indigo-600 px-4 py-2 rounded-lg mb-4">
            <span className="text-white font-black tracking-tighter">PORTFOLIO</span>
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}