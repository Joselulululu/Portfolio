// array de JS
import formacion from '../../Data/Formacion.json';
export default function Formacion() {
  return (
    <section id="formacion" className="min-h-screen flex items-center justify-center">
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Experiencia laboral</h2>
        </div>
        <div className="mx-auto mt-10  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {formacion.map((titulo) => (
            <article key={titulo.id} 
            className="flex w-300 flex-col items-start justify-center runded-md border-2 boreder-indigo-588/100">
              <div className="flex items-center gap-x-4 text-xs"> {// Parte modificada por el profesor
              }
                <time dateTime={titulo.datetime} className="text-gray-400">
                  {titulo.date}
                </time>
                <a
                  href={titulo.category.href}
                  className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                >
                  {titulo.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                  <a href={titulo.href}>
                    <span className="absolute inset-0" />
                    {titulo.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{titulo.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={titulo.author.imageUrl} className="w-400 h-150  bg-gray-800" />
                <div className="text-sm/6"> 
                      <span className="absolute inset-0" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}