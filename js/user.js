localStorage.clear(); /** Se limpian los datos almacenados */

/** Se agregó un usuario de ejemplo para iniciar */
const allUsers = [{email: "usuario@ejemplo", password: "password"}];
localStorage.setItem('users', JSON.stringify( allUsers ));

$(document).ready( ()=> {
	$('#logIn').click( () => {
		document.getElementById('id01').style.display='block';
		document.getElementById('id02').style.display='none';

		$('#submitLog').click( () => {
			const user= {
				email: document.querySelector("#email").value,
				password: document.querySelector("#password").value
			}

			const usersJSON = JSON.parse(localStorage.getItem('users'))
			usersJSON.forEach(u => {
				if(u.email == user.email || u.password == user.password){
					sessionStorage.setItem('activeSession', JSON.stringify( user ))
				}
			})
		})
	})
})

$(document).ready( ()=>{
	$('#signIn').click( () => {
		document.getElementById('id02').style.display='block';
		document.getElementById('id01').style.display='none';
	})
	clearInput();
})

const clearInput = () => {
	document.querySelector('#email').value = "";
    document.querySelector('#password').value = "";
}
