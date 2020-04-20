//Toggle menu
const toggleMenuButton = document.getElementById('nav__btn-toggle');
const navNav = document.getElementById('nav__navigation');

toggleMenuButton.addEventListener('click', function () {
    navNav.classList.toggle('nav__show-nav');
});


// //Preloader
// window.addEventListener("load", function() {
//     document.querySelector(".preloader").style.display="none";
// });
