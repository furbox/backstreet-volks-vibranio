import { component$ } from "@builder.io/qwik";

export const Services = component$(() => {
  return (
    <section id="services" class="py-20 mt-20">
      <div id="headingservices" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-vibranio-blue">
          Servicios/Productos
        </h1>
        <p class="text-center text-vibranio-gray mt-4">
          En Vibranio, nos especializamos en proporcionar soluciones de
          presencia digital sencillas y económicas para empresas pequeñas.
          Nuestro enfoque principal es ofrecer landing pages personalizadas que
          ayuden a destacar tu negocio y atraer a tus clientes potenciales en
          línea.
        </p>
      </div>
      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-16">
        <div id="card-1" class="flex flex-col rounded-md shadow-md">
          <div class="p-6 flex flex-col items-center">
            <img src="carbon_cloud-satellite-services.png" alt="service" />
            <h3 class="mt-5 mb-2 text-vibranio-blue text-lg">
              Landing Pages Personalizadas
            </h3>
            <p class="mb-2 text-vibranio-gray font-light">
              Creamos landing pages atractivas y profesionales que se adaptan a
              la identidad y los objetivos de tu negocio. Nuestro equipo de
              diseñadores expertos trabajará contigo para capturar la esencia de
              tu marca y transmitir tu mensaje de manera efectiva.
            </p>
          </div>
          <hr class="border-b border-vibranio-white" />
          <div class="flex p-6">
            <button type="button" class="flex-1 btn btn-purple">
              Contactar
            </button>
          </div>
        </div>
        <div id="card-2" class="flex flex-col rounded-md shadow-md">
          <div class="p-6 flex flex-col items-center">
            <img src="carbon_cloud-satellite-services.png" alt="service" />
            <h3 class="mt-5 mb-2 text-vibranio-blue text-lg">
              Información Básica del Negocio
            </h3>
            <p class="mb-2 text-vibranio-gray font-light">
              En tu landing page, podrás mostrar la información básica de tu
              negocio, como el nombre, la ubicación, el número de contacto y el
              horario de atención. Esto ayudará a tus clientes a encontrarte y
              obtener la información necesaria para visitarte o comunicarse
              contigo.
            </p>
          </div>
          <hr class="border-b border-vibranio-white" />
          <div class="flex p-6">
            <button type="button" class="flex-1 btn btn-purple">
              Contactar
            </button>
          </div>
        </div>
        <div id="card-3" class="flex flex-col rounded-md shadow-md">
          <div class="p-6 flex flex-col items-center">
            <img src="carbon_cloud-satellite-services.png" alt="service" />
            <h3 class="mt-5 mb-2 text-vibranio-blue text-lg">
              Redes Sociales Integradas
            </h3>
            <p class="mb-2 text-vibranio-gray font-light">
              Incluiremos botones y enlaces a tus perfiles de redes sociales
              para que tus clientes puedan seguirte, obtener actualizaciones
              sobre tus productos o servicios, y compartir tus contenidos con su
              red. Esto te ayudará a aumentar tu visibilidad en línea y a
              fortalecer tu presencia en las plataformas sociales.
            </p>
          </div>
          <hr class="border-b border-vibranio-white" />
          <div class="flex p-6">
            <button type="button" class="flex-1 btn btn-purple">
              Contactar
            </button>
          </div>
        </div>
        <div id="card-4" class="flex flex-col rounded-md shadow-md">
          <div class="p-6 flex flex-col items-center">
            <img src="carbon_cloud-satellite-services.png" alt="service" />
            <h3 class="mt-5 mb-2 text-vibranio-blue text-lg">
              Mapa de Localización
            </h3>
            <p class="mb-2 text-vibranio-gray font-light">
              Agregaremos un mapa interactivo para que tus clientes puedan
              encontrar fácilmente tu ubicación física. Esto es especialmente
              útil para negocios locales que dependen del tráfico en persona.
            </p>
          </div>
          <hr class="border-b border-vibranio-white" />
          <div class="flex p-6">
            <button type="button" class="flex-1 btn btn-purple">
              Contactar
            </button>
          </div>
        </div>
        <div id="card-5" class="flex flex-col rounded-md shadow-md">
          <div class="p-6 flex flex-col items-center">
            <img src="carbon_cloud-satellite-services.png" alt="service" />
            <h3 class="mt-5 mb-2 text-vibranio-blue text-lg">
              Diseño Responsivo
            </h3>
            <p class="mb-2 text-vibranio-gray font-light">
              Todas nuestras landing pages están optimizadas para dispositivos
              móviles y tabletas, lo que significa que se verán y funcionarán de
              manera excelente en cualquier tipo de pantalla. Esto garantiza una
              experiencia de usuario fluida y accesible, sin importar el
              dispositivo que utilicen tus visitantes.
            </p>
          </div>
          <hr class="border-b border-vibranio-white" />
          <div class="flex p-6">
            <button type="button" class="flex-1 btn btn-purple mb-0">
              Contactar
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
