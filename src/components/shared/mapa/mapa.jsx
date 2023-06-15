import { component$ } from "@builder.io/qwik";

export const Mapa = component$(() => {
  return (
    <section id="mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931.0509374459921!2d-89.65397155833197!3d21.02453195902608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5675dde795b7bd%3A0x47b3655404a936e5!2sBACKSTREET%20VOLKS!5e0!3m2!1ses-419!2smx!4v1686866844388!5m2!1ses-419!2smx" width="100%" height={500} style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
});
