const menu = document.querySelector('.menu-hamburger');
const lines = document.querySelectorAll('.line');
const list = document.querySelector('.navlist')

function openMenu(){
    lines[0].classList.toggle('line_1');
    lines[1].classList.toggle('line_2');
    lines[2].classList.toggle('line_3');

    list.classList.toggle('show');
}

menu.addEventListener('click', openMenu)