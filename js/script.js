document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var tel = document.getElementById("telefone");

function validaFormulario(){
  if(nome.value != "" && email.value != "" && tel.value != ""){
    alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!") 
  }
}

