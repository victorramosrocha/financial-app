function buttonBurguerMenu() {
    const burguerMenu = document.querySelector('#button_burguer_menu')
    const menu = document.querySelector('#burger_menu')

    if (menu.style.display == 'block') {
        
        menu.style.display = 'none'

        burguerMenu.style.width = '60px'
        burguerMenu.style.borderRadius = '50%'
        burguerMenu.style.marginBottom = '10px'
        
    } else {
        menu.style.display = 'block'
        
        burguerMenu.style.width = '90vw'
        burguerMenu.style.borderRadius = '10px 10px 0 0'
        burguerMenu.style.marginBottom = '0'
    }

}