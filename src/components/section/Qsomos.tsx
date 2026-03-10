export default function Qsomos() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] w-full">
        {/* Usamos GRID: 1 columna en móvil, 2 columnas en pantallas grandes */}
        <div className="relative isolate overflow-hidden bg-gray-800 rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto e Info */}
          <div className="p-8 md:p-16 lg:pr-0 z-10">
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6">
              ¿Quien soy?
            </h2>
            <p className="text-xl text-gray-300 max-w-xl mb-10 p-10">
Soy Jose Luis, actualmente cursando el Grado Superior de ASIR. Me apasiona la tecnología y cuento con un perfil técnico enfocado en dos pilares: Sistemas Operativos: Experiencia técnica en entornos Windows Server (Active Directory) y Linux (Ubuntu/Debian).
Desarrollo Frontend: Creación de interfaces modernas utilizando HTML, CSS, JavaScript y la librería React.
            </p>



            {/* Grid interno para los estudios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <h3 className="text-white font-bold text-xl">Ciclo grado superior en ASIR</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">Hasta ahora primer año, con las asignaturas Fundamentos Hardware, Lenguaje de marcas, Gestion de bases de datos, Planificacion  administracion de redes, implatancion de sistemas operativos, Digitalizacion y Sostenibilidad </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Ciclo grado medio en SMYR</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">Titulacion completada, de primer año y segundo año, algunas asignaturas como  Aplicaciones web, Servicios ne red, aplicaciones ofimaticas, etc</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen */}
          {/* Usamos overflow-hidden y flex para que la imagen se recorte si no cabe, pero no pise el texto */}
          <div className="relative  min-h-[400px] justify-center items-center flex overflow-hidden">
            <img
              alt="App screenshot"
              src="./public/portimage.jpg"
              className="absolute top-0 left-0 w-100 h-100  lg:object-center m-left-0 ml-40 flex rounded-full item"
            />
          </div>

        </div>
      </div>
    </section>
  );
}