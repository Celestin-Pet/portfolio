 let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('');
    navbar.classList.toggle('');


};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec =>  {
let top = window.scrollY;
let offset = sec.offsetTop -150;
let height = sec.offsetHeight;
let id= sec.getAttribute('id');


if(top >= offset && top < offset + height ){
    navlinks.forEach(links => {
    links.classList.remove('active');
   document.querySelector('header nav a[href*=' + id + ']').classList.add('active')


});

};

});

let header =document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('');
navbar.classList.remove('');


};


ScrollReaveal({
     reset: true,
     distance:'80px',
     duration: 2000,
     delay:200
});
ScrollReaveal().reveal('.home-content, .heading',{origin:'top' });
ScrollReaveal().reveal('.home-img, .service-container , -portifolio , -contact form',{origin:'bottom' });

const typed = new typed ('.multiple-text', {
    String:['Front-End Developer','Back-End Developer'],
    typespeed: 100,
    backspeed:100,
    backdelay:1000,
    loop:true
});
