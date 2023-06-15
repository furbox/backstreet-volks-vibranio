import { component$ } from "@builder.io/qwik";

export const Contact = component$(() => {
  return (
    <section id="contact" class="bg-vibranio-blue text-white py-20">
      <div class="container">
        <div class="sm:w-3/4 lg:w-2/4 mx-auto">
          <p class="font-light uppercase text-center mb-8">
            Dedicados a mantener a tu Vocho en excelente estado
          </p>
          <h1 class="text-3xl text-center">Contáctanos</h1>
        </div>
        <div class="flex justify-center flex-wrap gap-6 mt-5">
          <a
            target="_blank"
            href="https://wa.me/529991304046/"
            class="btn btn-white"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
});
