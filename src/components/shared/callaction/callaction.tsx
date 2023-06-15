import { component$ } from "@builder.io/qwik";

export const CallAction = component$(() => {
  return (
    <section id="callaction" class="py-20 bg-vibranio-white">
      <div id="headingcall" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-vibranio-blue">Contáctanos</h1>
        <p class="text-center text-vibranio-gray mt-4">
          Mejora tu presencia en línea
        </p>
      </div>
      <div class="flex flex-1 flex-col items-center lg:items-center pt-10">
        <div class="flex justify-center flex-wrap gap-6">
          <button class="btn btn-purple">Contactar</button>
        </div>
      </div>
    </section>
  );
});
