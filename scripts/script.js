function clickHomePageMenu() {
    const menu = document.querySelector('#burguermenu')
    const icon = document.querySelector('#home-page-menu')

    menu.classList.toggle('active')
    icon.classList.toggle('active')
}