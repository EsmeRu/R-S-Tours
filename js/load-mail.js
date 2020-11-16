const nameField = document.getElementById("nombre");
const emailField = document.getElementById("email");

if(sessionStorage.getItem('activeSession')){
    const loggedUser = JSON.parse(sessionStorage.getItem('activeSession'));
  } else {
    document.getElementById("iniciarSesion").classList.remove("hidden");
    document.getElementById("cerrarSesion").classList.add("hidden");
  }