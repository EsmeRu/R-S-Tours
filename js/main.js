/* HEADER - BARRA DE NAVEGACIÓN */
// POSISIÓN FIJADA
window.onscroll = function() {navFunction()};

const header = document.getElementById("navHeader");
const sticky = header.offsetTop;

function navFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// MENÚ HAMBURGUESA
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* BANNER */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

if(sessionStorage.getItem('activeSession')){
  document.getElementById("iniciarSesion").classList.add("hidden");
  document.getElementById("cerrarSesion").classList.remove("hidden");
} else {
  document.getElementById("iniciarSesion").classList.remove("hidden");
  document.getElementById("cerrarSesion").classList.add("hidden");
}

document.getElementById("cerrarSesion").addEventListener("click", () =>{
  sessionStorage.removeItem('activeSession');
})
