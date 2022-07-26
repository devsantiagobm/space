import { UI } from "./clases.js";
export function navDesplazamiento() {
    const navItems = document.querySelectorAll('.nav__item');
    const buttonHome = document.querySelector('.home__explore');
    const buttonReload = document.querySelector('.header__picture')

    const ui = new UI();
    
    eventos();
    function eventos() {
        navItems.forEach(item => {
            item.addEventListener('click', e => {
                ui.clasesItemsNav(e, navItems)
                ui.desplazarPagina(e)
            })
        })

        buttonHome.addEventListener('click', () => ui.desplazarExplore())
        buttonReload.addEventListener('click', () => ui.reload())
    }


}
