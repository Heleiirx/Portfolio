//------------------------------------Botones skills-----------------------------------------
const heart = document.querySelectorAll("i");

heart.forEach(i =>{
  i.addEventListener("click", cambioSlide);
  console.log(heart);
})

function cambioSlide(event){
  const fullHeart = event.target;
  fullHeart.classList.toggle("bi-suit-heart-fill");
  fullHeart.classList.toggle("bi-suit-heart");
}

//--------------------------Habilitar boton contacto-----------------------------------------
const botonContacto = document.getElementById("botonSubmit");

function habilitarBoton(){
  const input = document.querySelectorAll("input");
  console.log(input);

  botonContacto.removeAttribute("disabled");

}
habilitarBoton();