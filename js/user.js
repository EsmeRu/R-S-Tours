const allUsers = [];

$('#logIn').click( () => {
	showLogIn();
	clearInput();
})

$('#submitLog').click( (e) => {
	e.preventDefault();
	
	const logUserMail = document.querySelector("#email").value
	const logUserPassword = document.querySelector("#passwordLogIn").value

	const logedUser= {
		email: logUserMail,
		password: logUserPassword
	}
	
	if(localStorage.length != 0 && localStorage.getItem('users') != null){
		const usersJSON = JSON.parse(localStorage.getItem('users'))
		const validUser = usersJSON.find(u => u.email == logedUser.email && logedUser.password)
		if(validUser != undefined){
			sessionStorage.setItem('activeSession', JSON.stringify( logedUser ))
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
	const newUserEmail = document.querySelector("#emailSign").value;
	const newUserPassword = document.querySelector("#passwordSignIn").value;
	const confirmPassword = document.querySelector("#confirmPassword").value;

	if(newUserPassword === confirmPassword){
		const newUser = {
			email: newUserEmail,
			password: newUserPassword
		};
		if((localStorage.getItem('users')) != null){
			const usersJSON = JSON.parse(localStorage.getItem('users'))
			console.log(usersJSON)
			usersJSON.push(newUser);
			localStorage.setItem('users', JSON.stringify(usersJSON));
		}
		else{
			allUsers.push(newUser);
			localStorage.setItem('users', JSON.stringify(allUsers));
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

const clearLocalStorage = function () {
	localStorage.clear();
}