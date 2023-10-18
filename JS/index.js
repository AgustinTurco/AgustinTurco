let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
toggle_open.addEventListener('click', togglemenu);

function togglemenu(){
    menu.classList.toggle('show-menu')
}
