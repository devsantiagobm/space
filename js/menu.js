import { UI } from "./clases.js";

export default function menu(){
    const ui = new UI();
    const menu = document.querySelector('.menu')
    const nav = document.querySelector('.nav');
    const buttonCloseMenu = document.querySelector('.nav__picture')
    
    if(window.screen.width <= 992){
        ui.botonMenu();
    }

    menu.addEventListener('click', () => ui.abrirMenu() )
    buttonCloseMenu.addEventListener('click', () => ui.cerrarMenu() )
}