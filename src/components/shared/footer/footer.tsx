import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer id="footer" class="bg-vibranio-purple text-white py-8">
      <div class="container flex flex-col md:flex-row items-center">
        <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img width={150} src="logo_bv.jpg" alt="logo Backstreet Volks" />
          <ul class="flex flex-wrap text-white uppercase gap-12 text-xs">
            <li class="cursor-pointer">
              <a href="#features">servicios</a>
            </li>
            <li class="cursor-pointer">
              <a href="#gallery">galeria</a>
            </li>
            <li class="cursor-pointer">
              <a href="#contact">contacto</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-wrap gap-10 mt-12 md:mt-0">
          <li class="list-none text-white text-2xl">
            <a target="_blank" href="https://www.facebook.com/backstreetvolks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="list-none text-sm">Copyright © 2023 <a href="https://www.linkedin.com/in/furbox/">Christopher Flores</a></li>
        </div>
      </div>
    </footer>
  );
});
