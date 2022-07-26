import { UI } from "./clases.js";

export function crew(){
    const items = document.querySelector('.crew__list')
    const ui = new UI;
    ui.fondoEscala()
    function eventos(){
        items.addEventListener('click', e => {
            if(e.target.classList.contains('crew__item')) ui.crew(e);
        })
    }
    eventos()
}