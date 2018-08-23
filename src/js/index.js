import '../scss/main.scss'

let button = document.getElementById('menu-icon');

button.addEventListener('click', function() {
    let body = document.getElementById('body');
    
    if (body.classList.contains('menu-active')){
        body.classList.remove('menu-active');
    } else {
        body.classList.add('menu-active')
    }
});