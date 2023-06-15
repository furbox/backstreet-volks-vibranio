import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-vibrano-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Taller <br />
            <span class="font-bold">Backstreet Volks</span>
          </h2>
          <p class="text-vibranio-gray text-lg text-center lg:text-left mb-6">
            Tenemos pasión y experiencia en el corazón de cada reparación y
            restauración.
            <br />
            Transformando tu Vocho en una obra maestra.
          </p>
          <div class="flex justify-center flex-wrap gap-6">
            <a
              target="_blank"
              href="https://wa.me/529991304046/"
              class="btn btn-white"
            >
              Whatsapp
            </a>
          </div>
        </div>
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full rounded-lg shadow-lg"
            src="Portada.jpg"
            alt="Portada Backstreet Volks"
          />
        </div>
      </div>
    </section>
  );
});
