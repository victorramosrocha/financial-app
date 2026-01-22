function clickButtonMenu() {
    const menu = document.querySelector('#burguer-menu')
    const icon = document.querySelector('#menu-button')

    menu.classList.toggle('active')
    icon.classList.toggle('active')
}