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

const children = document.querySelectorAll('.restorant_card');

// Find the tallest child div
var tallest = 0;
for (var i = 0; i < children.length; i++) {
  if (children[i].offsetHeight > tallest) {
    tallest = children[i].offsetHeight;
  }
}

// Set the height of all child divs to the tallest height
for (var i = 0; i < children.length; i++) {
  children[i].style.height = tallest + 'px';
}