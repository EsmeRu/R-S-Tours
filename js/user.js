/* Se agregó un usuario de ejemplo para iniciar 
const allUsers = [{email: "usuario@ejemplo", password: "password"}];
localStorage.setItem('users', JSON.stringify( allUsers )); 
*/

$('#logIn').click( () => {
	showLogIn();
	clearInput();
})

$('#submitLog').click( () => {
	const logUserMail = document.querySelector("#email").value
	const logUserPassword = document.querySelector("#passwordLogIn").value

	const logedUser= {
		email: logUserMail,
		password: logUserPassword
	}

	for(var x = 0; x<localStorage.length; x++){
		let searchingUser = 'user'+x;
		const actualCompareUser = JSON.parse(localStorage.getItem('user0'))

		console.log(actualCompareUser.email)

		if(actualCompareUser.email == logedUser.email){
			if(actualCompareUser.password == logedUser.password){
				confirm('Usuario y contraseña encontrados');
			} else {
				alert("Contraseña incorrecta");
			}
		} else {
			alert("Usuario no encontrado")
		}
	}

	/*const usersJSON = JSON.parse(localStorage.getItem('users'))
	usersJSON.forEach(u => {
		if(u.email == user.email || u.password == user.password){
			sessionStorage.setItem('activeSession', JSON.stringify( user ))
		}
	})*/
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
		const newUser = [{
			email: newUserEmail,
			password: newUserPassword
		}];

		const newUserJSON = JSON.stringify(newUser);
		localStorage.setItem(('user'+localStorage.length),newUserJSON);
		confirm("Usuario registrado con éxito");
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