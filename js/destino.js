import { UI } from "./clases.js";
import { datos } from "./datos.js";
export function destino(){
    const items = document.querySelector('.destination__list')
    const datosDestino = datos["destinations"];
    items.addEventListener('click', e => { if(e.target.classList.contains('destination__item')) ui.destino(e) })
    const ui = new UI;

}