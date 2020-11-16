const allUsers = [];
const usersJSON = JSON.parse(localStorage.getItem('users'));

$('#logIn').click( () => {
	showLogIn();
	clearInput();
})

$('#submitLog').click( (e) => {
	e.preventDefault();	
	
	const email = document.querySelector("#email").value
	const password = document.querySelector("#passwordLogIn").value
	
	if(localStorage.length != 0 && localStorage.getItem('users') != null){
		const logedUser= {
			name,
			email,
			password
		}
		if(usersJSON.find(u => u.email == logedUser.email && logedUser.password) != undefined){
			logedUser.name = usersJSON.find(u => u.email == logedUser.email && logedUser.password).name;
			sessionStorage.setItem('activeSession', JSON.stringify( logedUser ))
			window.location.href="../index.html"
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
	const name = document.getElementById("name").value;
	const email = document.getElementById("emailSign").value;
	const password = document.getElementById("passwordSignIn").value;
	const confirmPassword = document.getElementById("confirmPassword").value;

	if(name != ""){
		if(email != ""){
			if(password != "") {
				if(confirmPassword != ""){
					if(password === confirmPassword){		
						const newUser = {
							name: name,
							email: email,
							password: password
						};
				
						if((localStorage.getItem('users')) != null){				
							if(usersJSON.find(u => u.email == newUser.email) == undefined){
								console.log(usersJSON);
								usersJSON.push(newUser);
								localStorage.setItem('users', JSON.stringify(usersJSON));
								alert("El usuario quedó registrado, inicie sesión");
								showLogIn();
							}
							else{
								alert("El usuario ya esxiste");
							}
						}
						else{
							allUsers.push(newUser);
							localStorage.setItem('users', JSON.stringify(allUsers));
							alert("El usuario quedó registrado, inicie sesión");
							showLogIn();
						}		
					} else {
						alert("Las contraseñas no coinciden");
						document.querySelector('#confirmPassword').value = "";
						showSingIn();
					}
				} else {
					alert("Por favor confirme su contraseña");
				}
			} else {
				alert("El campo Contraseña no puede quedar vacío");
			}
		} else {
			alert("El campo Email no puede quedar vacío");
		}
	} else {
		alert("El campo Nombre no puede quedar vacío");
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