
var pokemon1 = "Pikachu";



function mostrarNombre(){
  //aqui recibe nombre el valor que le introducimos
  const nombre = document.querySelector(".boton-nombre").value;

  //Aca puedes mostrarlo en un alerta o en cualquier parte del dom, para el ejemplo usaré un alert
  alert(`¡Hola ${nombre}!`);
}

const btn = document.querySelector(".boton-enviar");
btn.addEventListener("click",mostrarNombre);

/*function btnContinue() {
  var input=document.getElementById('inputName');
  if(input.value!='') {
    alert('¡Hola '+input.value+'!');
  }
} */
/* https://es.stackoverflow.com/questions/573918/mostrar-datos-de-una-caja-de-texto-en-java-script*/

//al dar enter funciona
document.getElementById('inputName').addEventListener('keydown', function(e) {
  if(e.keyCode === 13) {
    // entonces haces lo que quieras para poder reaccionar a la pulsación del enter.
    
    // si necesitas ver qué hay escrito en el campo de input accedes a e.target.value
    console.log(e.target.value);
    alert(`¡Hola ${e.target.value}!`);
    alert(`¡Hola ${nombre}!`);
  }
});
//https://desarrolloweb.com/faq/como-detectar-que-se-ha-pulsado-la-tecla-enter-sobre-un-campo-input