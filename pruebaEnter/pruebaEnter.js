document.getElementById('inputName').addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
      // entonces haces lo que quieras para poder reaccionar a la pulsación del enter.
      
      // si necesitas ver qué hay escrito en el campo de input accedes a e.target.value
      console.log(e.target.value);
      alert(`¡Hola !`);
    }
});