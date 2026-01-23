function clickButtonMenu() {
    const menu = document.querySelector('#burguer-menu')
    const icon = document.querySelector('#menu-button')
    const secbal = document.querySelector('#balance')

    menu.classList.toggle('active')
    icon.classList.toggle('active')
    secbal.classList.toggle('active')
}