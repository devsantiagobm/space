import { UI } from "./clases.js";

export function tech(){
    const items = document.querySelector('.tech__list')
    const ui = new UI();
    function eventos(){
        items.addEventListener('click', e => {if(e.target.classList.contains('tech__item')) ui.tech(e)})
    }
    eventos()
}