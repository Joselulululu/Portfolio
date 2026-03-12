// array de JS
import formacion from '../../Data/Formacion.json';
export default function Formacion() {
  return (
    <section id="formacion" className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Experiencia laboral
            </h2>
          </div>

          <div className="mx-auto grid grid-cols-1 gap-y-16 border-t border-gray-700 pt-10 sm:pt-16 lg:mx-0">
            {formacion.map((titulo) => (
              <article 
                key={titulo.id} 
                className="rounded-2xl border border-gray-700 bg-gray-800/40 p-8 shadow-2xl transition hover:border-indigo-500"
              >
               
                <div className="flex flex-col gap-x-12 gap-y-10 lg:flex-row lg:items-center">
                  
                 
                  <div className="flex flex-col gap-y-6 lg:flex-1">
                    <div className="flex items-center gap-x-4 text-sm">
                      <time dateTime={titulo.datetime} className="text-gray-400">
                        {titulo.date}
                      </time>
                      <a
                        href={titulo.category.href}
                        className="relative z-10 rounded-full bg-gray-700 px-4 py-1.5 font-medium text-gray-300 hover:bg-gray-600"
                      >
                        {titulo.category.title}
                      </a>
                    </div>

                    <div className="group relative">
                      <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400">
                        <a href={titulo.href}>
                          <span className="absolute inset-0" />
                          {titulo.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-300">
                        {titulo.description}
                      </p>
                    </div>
                  </div>

                  {/* Bloque de Imagen (Derecha en desktop, Abajo en móvil) */}
                  <div className="w-full lg:w-[500px] lg:flex-none">
                    <img 
                      alt={titulo.title} 
                      src={titulo.author.imageUrl} 
                      className="aspect-[4/3] w-full rounded-2xl bg-gray-800 object-cover shadow-lg" 
                    />
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}