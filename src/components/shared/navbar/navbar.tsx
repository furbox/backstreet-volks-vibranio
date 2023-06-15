import { component$ } from "@builder.io/qwik";

export const Navbar = component$(() => {
  return (
    <header>
      <nav class="container flex items-start py-4 mt-4 sm:mt-12 bg-vibranio-blue rounded-lg">
        <div class="py-1">
          <img width={150} src="logo_bv.jpg" alt="Logo Backstreet Volks" class="rounded-lg" />
        </div>
        <ul class="hidden sm:flex flex-1 m-auto justify-end items-center gap-12 text-vibranio-white uppercase text-xs">
          <li><a href="#features">servicios</a></li>
          <li><a href="#gallery">galeria</a></li>
          <li><a href="#contact">contacto</a></li>
          <a target="_blank" href="https://wa.me/529991304046/"
            class="bg-vibranio-white text-vibranio-blue rounded-md px-7 py-3"
          >
            Whatsapp
          </a>
        </ul>
        <div class="flex sm:hidden flex-1 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
            ></path>
          </svg>
        </div>
      </nav>
      
    </header>
  );
});
