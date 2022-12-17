const nav = document.querySelector('nav');
const dateElement = document.querySelector('#date');
dateElement.textContent=new Date().getFullYear();
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

