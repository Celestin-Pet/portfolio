

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

   https://www.loom.com/share/39a258a49b3c48008bf2a1653a5d52d8

   
     });

  };
  });
  };
  
