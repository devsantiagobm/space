export default function modal(){
    const modal = document.querySelector('.modal')
    window.addEventListener('load', e => {
        modal.classList.add('modal--hide')
        document.body.style.backgroundColor = "hsl(240, 100%, 5%)"
    })
}