const π=(el)=>{
   return document.querySelector(el);
}

let menuToggler=π(".menu-toggler");
const togglerLines=document.querySelectorAll(".toggler-line");
const togglerLinesTransitions=["rot45deg","_width","rot-45deg"];
let navBar=π(".bar");

menuToggler.addEventListener('click',()=>{
   menuToggler.classList.toggle('rotate');
   
   togglerLines.forEach(line=>{
      togglerLinesTransitions.forEach(trans=>{
         line.classList.toggle(trans);
      })
   })
   
   navBar.classList.toggle('display')
})


const navBarLinks=document.querySelectorAll(".nav-link")
navBarLinks.forEach(link=>{
   link.href="javascript:void(0)"
})


