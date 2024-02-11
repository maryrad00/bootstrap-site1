

  var section2 = document.querySelector(".section-2");
    var navbar = document.querySelector(".navbar");


window.addEventListener('scroll',()=>{
  
    let top = (section2.offsetTop) - (window.innerHeight);
     if ((window).scrollY>= top) {
    navbar.classList.toggle("sticky")

 
}})
