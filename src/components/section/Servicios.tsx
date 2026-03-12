import { useState } from 'react';
import dataservicios from '../../Data/servicios.json';

function Servicios() {
    const [activo, setActivo] = useState(null);

    const toggleServicio = (id : any    ) => {
        setActivo(activo === id ? null : id);
    };

    return (
        <section id="servicios" className="min-h-screen bg-gray-900 py-20 px-6">
            <h1 className="text-4xl font-bold text-center text-white mb-12">Trabajos</h1>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {dataservicios.map((servicio) => (
                    <div
                        key={servicio.id}
                        onClick={() => toggleServicio(servicio.id)}
                        className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                            activo === servicio.id
                                ? "border-indigo-500 bg-gray-800 shadow-lg scale-[1.02]"
                                : "border-gray-700 bg-gray-900 hover:border-gray-500"
                        }`}
                    >
                        <div className="flex justify-between items-start">
                            <h2 className="text-xl font-semibold text-white pr-4">
                                <a 
                                    href={servicio.category.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    {servicio.title}
                                </a>
                            </h2>
                            <span className="text-indigo-400 text-[10px] font-mono uppercase tracking-widest text-right">
                                {servicio.category.title}
                            </span>
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-500 ${
                                activo === servicio.id ? "max-h-[1000px] mt-4 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {servicio.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {servicio.tecnologia && servicio.tecnologia.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="text-[10px] px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {servicio.author?.imageUrl && (
                                <img 
                                    src={servicio.author.imageUrl} 
                                    alt={servicio.title}
                                    className="rounded-lg w-full h-48 object-cover opacity-90 mb-4"
                                />
                            )}

                            <a
                                href={servicio.category.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2 rounded-lg transition"
                            >
                                VISITAR ENLACE
                            </a>
                        </div>

                        <div className="mt-4 text-[10px] text-gray-500 text-right uppercase">
                            {activo === servicio.id ? "Cerrar ▲" : "Saber más ▼"}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Servicios;