import { UI } from "./clases.js";

export default function imagenesMobile(){
    const imagenes = document.querySelectorAll('.bg__item')
    const ui = new UI();
    if(window.screen.width <= 992) {
        ui.cambiarImagenes(imagenes);
    }
}