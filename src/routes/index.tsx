import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/shared/navbar/navbar";
import { Hero } from "~/components/shared/hero/hero";
import { Features } from "~/components/shared/features/features";
import { Contact } from "~/components/shared/contact/contact";
import { Footer } from "~/components/shared/footer/footer";
import { Ws } from "~/components/shared/floatbutton/whatsapp";
import { Gallery } from "~/components/shared/gallery/gallery";
import { Mapa } from "~/components/shared/mapa/mapa";

export default component$(() => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Mapa />
      <Contact />
      <Ws />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Backstreet Volks",
  meta: [
    {
      name: "description",
      content:
        "Backstreet Volks tememos pasión y experiencia en el corazón de cada reparación y restauración. Transformando tu Vocho en una obra maestra.",
    },
  ],
};
