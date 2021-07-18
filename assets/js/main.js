var nav = document.querySelector('nav');


window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'text-white', 'shadow');

    }else{
        nav.classList.remove('bg-dark', 'text-white', 'shadow');

    }
});


var menuIcon = document.getElementById('iconMenu');

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100) {
        menuIcon.style.color = '#FFFFFF';

    }else{
        menuIcon.style.color = 'transparent';

    }
});