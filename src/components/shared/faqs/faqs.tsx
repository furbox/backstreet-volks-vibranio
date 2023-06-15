import { component$ } from "@builder.io/qwik";

export const Faqs = component$(() => {
  return (
    <section id="faqs" class="bg-vibranio-white py-20">
      <div class="container">
        <div id="headingfaqs" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-vibranio-blue">
            Preguntas frecuentes (FAQs)
          </h1>
          <p class="text-center text-vibranio-gray mt-4">
            Te dejamos algunas preguntas que nos hacen con frecuencia
          </p>
        </div>
        <div class="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">¿Qué es una landing page?</span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <p class="text-vibranio-gray text-sm">
            Una landing page es una página web diseñada específicamente para
            promocionar y presentar información relevante sobre un producto,
            servicio o negocio en particular. Su objetivo principal es convertir
            visitantes en clientes potenciales y generar acciones específicas,
            como realizar una compra o completar un formulario de contacto.
          </p>
        </div>
        <div class="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">
              ¿Por qué debería tener una landing page para mi negocio?
            </span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <p class="text-vibranio-gray text-sm">
            Una landing page es una herramienta efectiva para establecer tu
            presencia en línea y proporcionar a tus clientes potenciales la
            información necesaria sobre tu negocio. Te permite presentar tus
            productos o servicios de manera clara y atractiva, y facilita que
            los visitantes realicen acciones que impulsen el crecimiento de tu
            negocio.
          </p>
        </div>
        <div class="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">
              ¿Cómo puedo obtener una landing page en Vibranio?
            </span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <p class="text-vibranio-gray text-sm">
            Es muy sencillo. Solo tienes que contactar a un asesor en
            Vibranio.com.mx, luego, nuestro equipo te guiará a través del
            proceso de recopilación de información y diseño de tu landing page
            personalizada. Una vez que esté lista, te la entregaremos y podrás
            empezar a aprovechar los beneficios de tener presencia en línea.
          </p>
        </div>
        <div class="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">
              ¿Qué información necesito proporcionar para mi landing page?
            </span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <p class="text-vibranio-gray text-sm">
            Para crear tu landing page, necesitaremos información básica sobre
            tu negocio, como el nombre, la ubicación, el número de contacto y el
            horario de atención. Además, cualquier otro contenido adicional que
            desees incluir, como imágenes, descripciones de productos o
            servicios, testimonios de clientes, etc.
          </p>
        </div>
        <div class="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">
              ¿Puedo personalizar el diseño de mi landing page?
            </span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <p class="text-vibranio-gray text-sm">
            ¡Por supuesto! En Vibranio, nos esforzamos por ofrecerte una landing
            page que se adapte a tu marca y objetivos. Trabajaremos contigo para
            personalizar el diseño, los colores, las fuentes y otros elementos
            visuales de acuerdo con tus preferencias y la identidad de tu
            negocio.
          </p>
        </div>
        <div class="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">
              ¿Qué sucede si quiero realizar cambios en mi landing page después
              del lanzamiento?
            </span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <p class="text-vibranio-gray text-sm">
            En Vibranio, entendemos que las necesidades de tu negocio pueden
            evolucionar con el tiempo. Si deseas realizar cambios en tu landing
            page después del lanzamiento, estaremos encantados de ayudarte.
            Ponte en contacto con nuestro equipo de soporte y te brindaremos la
            asistencia necesaria para hacer las modificaciones deseadas.
          </p>
        </div>
        <div class="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">
              ¿Puedo integrar mi landing page con mis perfiles de redes
              sociales?
            </span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <p class="text-vibranio-gray text-sm">
            ¡Absolutamente! En Vibranio, ofrecemos la opción de integrar tus
            perfiles de redes sociales en tu landing page. Podemos agregar
            botones y enlaces que dirijan a tus visitantes a tus perfiles de
            redes sociales, lo que te permite expandir tu alcance y mantener una
            presencia en línea sólida.
          </p>
        </div>
      </div>
    </section>
  );
});
