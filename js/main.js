
//--------------------------Habilitar boton contacto-----------------------------------------
const botonContacto = document.getElementById("botonSubmit");
const textArea = document.getElementById("textarea");

function habilitarBoton(){
  const inputs = document.querySelectorAll("input");
  console.log("Input" + JSON.stringify(inputs,null,2));
  
  // let input = ;
  // console.log(input.value);
  
//--------------------------Cambiar slide-----------------------------------------

  if (inputs[0].value && inputs[1].value && inputs[2].value && textArea.value) {
    console.log(inputs);
        botonContacto.removeAttribute("disabled");
      }
    }

    // const heart = document.querySelectorAll("i");
      
    //   heart.forEach(i =>{
    //     i.addEventListener("click", cambioSlide);
    //     console.log(heart);
    //   })

    function cambioSlide(desplazamiento, deg, event){
      let activeHeart = document.querySelector(".bi-suit-heart-fill");
      if (activeHeart) {
        activeHeart.classList.remove("bi-suit-heart-fill");
        activeHeart.classList.add("bi-suit-heart");
      }
      event.target.classList.remove("bi-suit-heart");
      event.target.classList.add("bi-suit-heart-fill");
      

      let carousel = document.getElementById("carousel");
      carousel.style.animation="none";
      // carousel.style.animationPlayState="paused";
      carousel.style.transform= `translateZ(${desplazamiento}) rotateY(${deg})`;    
    }
//------------------------------------Botones skills-----------------------------------------
      
      
//       function estiloCorazon(event){
//         const fullHeart = event.target;
//         fullHeart.classList.toggle("bi-suit-heart-fill");
//         fullHeart.classList.toggle("bi-suit-heart");
//       }
// }