const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {

        // class togle
        let burgerClick = true;
        nav.classList.toggle('nav-active');
        burger.classList.toggle('darkburger');
        burger.classList.toggle('xburger');
        burger.classList.remove('hover');

        // link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

    });
}

const login = () => {
    const LoginForm = document.getElementById('login-form');
    const submitButton = document.getElementById('submit');
    LoginForm.addEventListener('submit', () => {

        preventDefault();
        console.log("form has been sumited");
    });
}






login();

navSlide();