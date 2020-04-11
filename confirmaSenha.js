var senha = document.getElementById("senha");
var senhaConfirm = document.getElementById("senha-confirm");

function validaSenha() {
	if(senha.value != senhaConfirm.value) {
		senhaConfirm.setCustomValidity("Senhas diferentes, verifique se digitou corretamente");
	} else {

		senhaConfirm.setCustomValidity('');
	}


}

senha.onchange = validaSenha;
senhaConfirm.onkeyup = validaSenha;