const allUsers = [];
const usersJSON = JSON.parse(localStorage.getItem('users'));

$('#logIn').click( () => {
	showLogIn();
	clearInput();
})

$("#iniciarSesion").click( (e) => {
	e.classList.toggle("hidden")
})

$('#submitLog').click( (e) => {
	e.preventDefault();
	
	const email = document.querySelector("#email").value
	const password = document.querySelector("#passwordLogIn").value

	const logedUser= {
		email,
		password
	}
	
	if(localStorage.length != 0 && localStorage.getItem('users') != null){

		if(usersJSON.find(u => u.email == logedUser.email && logedUser.password) != undefined){
			sessionStorage.setItem('activeSession', JSON.stringify( logedUser ))
			window.location.href="../index.html"
			toggleSessionButtons();
			alert("Inicio correcto")
		}
		else{
			alert("Usuario o contraseña incorrecta")
		}
	}	
})

$('#signIn').click( () => {
	showSingIn();
	clearInput();
})

$('#submitSig').click( () => {
	const email = document.querySelector("#emailSign").value;
	const password = document.querySelector("#passwordSignIn").value;
	const confirmPassword = document.querySelector("#confirmPassword").value;

	if(password === confirmPassword){
		const newUser = {
			email,
			password
		};

		if((localStorage.getItem('users')) != null){

			if(usersJSON.find(u => u.email == newUser.email) == undefined){
				console.log(usersJSON)
				usersJSON.push(newUser);
				localStorage.setItem('users', JSON.stringify(usersJSON));
				alert("El usuario quedó registrado, inicie sesión")
			}
			else{
				alert("El usuario ya esxiste");
			}
		}
		else{
			allUsers.push(newUser);
			localStorage.setItem('users', JSON.stringify(allUsers));
			alert("El usuario quedó registrado, inicie sesión")
		}
		showLogIn();
	} else {
		alert("Las contraseñas no coinciden");
		document.querySelector('#passwordSignIn').value = "";
		document.querySelector('#confirmPassword').value = "";
		showSingIn();
	}
})

const showSingIn = function () {
	document.getElementById('formSigIn').style.display='block';
	document.getElementById('formLogIn').style.display='none';
}

const showLogIn = function () {
	document.getElementById('formLogIn').style.display='block';
	document.getElementById('formSigIn').style.display='none';
}

const clearInput = () => {
	document.querySelector('#email').value = "";
	document.querySelector('#emailSign').value = "";
	document.querySelector('#passwordLogIn').value = "";
	document.querySelector('#passwordSignIn').value = "";
	document.querySelector('#confirmPassword').value = "";
}