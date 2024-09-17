
var pokemon1 = "Pikachu";


const btn = document.querySelector(".boton-enviar");
btn.addEventListener("click",mostrarNombre);

function mostrarNombre(){
const nombre = document.querySelector(".boton-nombre").value;

//Aca puedes mostrarlo en un alerta o en cualquier parte del dom, para el ejemplo usaré un alert
alert(`¡Hola ${nombre}!`);
}

/*function btnContinue() {
  var input=document.getElementById('inputName');
  if(input.value!='') {
    alert('¡Hola '+input.value+'!');
  }
} */
/* https://es.stackoverflow.com/questions/573918/mostrar-datos-de-una-caja-de-texto-en-java-script*/