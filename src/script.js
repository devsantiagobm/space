import { navDesplazamiento } from "../js/nav.js";
import { destino } from "../js/destino.js";
import { crew } from "../js/crew.js";
import { tech } from "../js/tech.js";
import modal from "../js/modal.js";
import menu from "../js/menu.js";
import imagenesMobile from "../js/imagenesMobile.js";
navDesplazamiento();
destino();
crew()
tech();
modal();
menu()
imagenesMobile()

const mainContent = document.querySelector('.main__content')
const header = document.querySelector('.header')
mainContent.style.minHeight = `calc(100vh - ${header.scrollHeight}px)`;

