console.log("am the one");

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.click = () => {
    menuIcon.classList.toggle('bx bx-x');
navbar.classList.toggle('active');
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
   document.querySelector('header nav a[href*=' + id + ']').classList.add('active');


     });

  };
  });

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx bx-x');
navbar.classList.remove('active');

  };
  
  ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     Delay:200,

     
    });
    ScrollReveal().reveal('.home_content, .heading', { origin: top });