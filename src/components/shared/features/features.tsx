import { component$ } from "@builder.io/qwik";

export const Features = component$(() => {
  return (
    <section id="features" class="bg-vibranio-white py-20 mt-20 lg:mt-60">
      <div id="heading" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-vibranio-blue">Servicios</h1>
        <p class="text-center text-vibranio-gray mt-4">
          Listado de servicios principales:
        </p>
      </div>
      <div id="feature1" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full rounded-lg shadow-lg"
              src="Servicio1.jpg"
              alt="Servicio1 Backstreet Volks"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Reparación de fallas difíciles
            </h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Especialistas en la identificación y solución de problemas
              complejos en los vochos.
            </p>
          </div>
        </div>
      </div>
      <div id="feature2" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full rounded-lg shadow-lg"
              src="Restauracion.jpg"
              alt="Restauracion en Backstreet Volks"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Reconstrucción y restauración de vochos
            </h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Capacidad para llevar a cabo proyectos de reconstrucción y
              devolver a la vida a los vochos clásicos.
            </p>
          </div>
        </div>
      </div>
      <div id="feature3" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full rounded-lg shadow-lg"
              src="audio.jpg"
              alt="Audio en Backstreet Volks"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">
              Instalación de car audio
            </h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Expertos en la instalación de sistemas de audio de alta calidad
              para vochos. (Tengan cuidado con claudio a veces da picotazos.)
            </p>
          </div>
        </div>
      </div>
      <div id="feature4" class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="Pintura.jpg"
              alt="Pintura y Hojalateria en Backstreet Volks"
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-vibranio-blue">Pintura y hojalatería</h1>
            <p class="text-vibranio-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Servicios de pintura y reparación de carrocería para vochos,
              dejándolos como nuevos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
