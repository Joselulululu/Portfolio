import dataservicios from '../../Data/servicios.json';

export default function Servicios() {
      return(
        <section id="servicios" className="min-h-screen flex-col items-center justify-center">
            <h1 className='text-center'>Servicios</h1>


            <ul className='list-disc list-inside text-center text-red-400'>
                    {
                        dataservicios.map((servicio) => 
                            <li>{servicio.titulo}</li>

                        )
                    }
            </ul>
        </section>
      )

}