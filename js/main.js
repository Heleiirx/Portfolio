const botonContacto = document.getElementById("botonSubmit");

function habilitarBoton(){
  const input = document.querySelectorAll("input");
  console.log(input);

  botonContacto.removeAttribute("disabled");

}
habilitarBoton();