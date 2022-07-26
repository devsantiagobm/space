import { datos } from "./datos.js";

export class UI {
    constructor(){
        this.style = document.querySelector(':root').style;
    }
    
    desplazarPagina(e) {
        this.nameUrl = e.currentTarget.querySelector('.nav__text').textContent;
        this.title(this.nameUrl)
        this.transform = e.currentTarget.dataset.trans;
        this.style.setProperty('--translate', this.transform)
        this.cambiarFondo(this.nameUrl)
    }

    cambiarFondo(nombre){
        this.fondos = document.querySelectorAll('.bg__item')
        this.fondos.forEach( item => {
            item.dataset.bg === nombre ? item.classList.add('bg__item--active') :  item.classList.remove('bg__item--active')
        })
    }

    fondoEscala(){
        this.fondo = document.querySelector('.bg')
        this.alturaPagina = document.body.scrollHeight;
        this.fondo.style.minHeight = `${this.alturaPagina}px`;
    }

    title(text){
        if(text === "home") return document.title = "Space";

        const size = text.length;
        const firstLetter = text.charAt(0).toUpperCase()
        text = firstLetter + text.substring(1,size)
        document.title = text;
    }
    
    clasesItemsNav(e, arr) {
        e.currentTarget.classList.add('nav__item--active')
        arr.forEach(newItem => { if (newItem != e.currentTarget) newItem.classList.remove('nav__item--active') })
    }

    desplazarExplore(){
        this.item = document.querySelectorAll('.nav__item')[1]
        this.item.click()
    }

    reload(){
        location.reload()
    }

    destino(e){
        this.item = e.target;
        this.gestionarCajas(e, "destination")
        this.gestionarClases(this.item, 'destination__item--active', '.destination__item');

        this.contenido = {
            name: this.caja.querySelector('h1'), 
            images: this.caja.querySelector('img'),
            text: this.caja.querySelector('.destination__text'),
            distance: this.caja.querySelector('.destination__distance'),
            travel: this.caja.querySelector('.destination__time'),
        }

        this.datos = datosJson.datosDestino.filter(item => item.name == this.item.textContent)[0]
        this.agregarContenidoDestino(this.datos, this.contenido);
    }

    agregarContenidoDestino(datos, contenido){
        const {name, images, text, distance, travel} = contenido;

        name.textContent = datos.name;
        images.src = datos.images.png;
        text.textContent = datos.description;
        distance.textContent = datos.distance;
        travel.textContent = datos.travel;
    }

    crew(e){
        this.item = e.target;
        this.gestionarCajas(e, 'crew')
        this.gestionarClases(this.item, 'crew__item--active', '.crew__item')

        this.contenido = {
            name: this.caja.querySelector('.crew__name'), 
            images: this.caja.querySelector('img'),
            text: this.caja.querySelector('.crew__text'),
            role: this.caja.querySelector('.crew__profession'),
        }

        this.datos = datosJson.datosCrew.filter(item => item.role == this.item.dataset.role)[0]

        this.agregarContenidoCrew(this.datos, this.contenido)
    }

    agregarContenidoCrew(datos, contenido){
        const {name, images, text, role} = contenido;

        name.textContent = datos.name;
        images.src = datos.images.png;
        text.textContent = datos.bio;
        role.textContent = datos.role;
    }

    tech(e){
        this.item = e.target;
        this.gestionarCajas(e, 'tech')
        this.gestionarClases(this.item, 'tech__item--active', '.tech__item')

        this.contenido = {
            name: this.caja.querySelector('.tech__title'), 
            images: this.caja.querySelector('img'),
            text: this.caja.querySelector('.tech__text'),
        }

        this.datos = datosJson.datosTech.filter(item => item.name == this.item.dataset.name)[0]
        this.agregarContenidoTech(this.datos, this.contenido)
    }

    agregarContenidoTech(datos, contenido){
        const {name, images, text} = contenido;

        name.textContent = datos.name;
        images.src = datos.images.portrait;
        text.textContent = datos.description;
    }

    gestionarClases(itemSeleccionado, add, remove){
        itemSeleccionado.classList.add(add);
        this.items = document.querySelectorAll(remove)
        this.items.forEach(item => { 
            if(item != itemSeleccionado) item.classList.remove(add) 
        })
    }

    gestionarCajas(e, box){
        this.item = e.target;
        this.caja = document.querySelector(`.${box}`)
        this.caja.classList.add(`${box}--active`)
        setTimeout(() => this.caja.classList.remove(`${box}--active`), 800);
    }

    botonMenu(){
        this.menuButton = document.querySelector('.menu');
        this.menuButton.classList.add('menu--active')

        this.nav = document.querySelector('.nav');
        this.nav.classList.add('nav--active')
    }

    abrirMenu(){
        this.nav = document.querySelector('.nav');
        this.nav.classList.add('nav--shown')
    }

    cerrarMenu(){
        this.nav = document.querySelector('.nav');
        this.nav.classList.remove('nav--shown')
    }

    cambiarImagenes(imagenes){
        imagenes.forEach(item => {
            const nuevoSrc = item.src.replace("desktop", "tablet")
            item.src = nuevoSrc;
        })
    }
}

class DatosJSON {
    constructor(){
        this.datosDestino = datos["destinations"]
        this.datosCrew = datos["crew"]
        this.datosTech = datos["technology"]
    }
}

const datosJson = new DatosJSON()