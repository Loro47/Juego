var numeroAleatorio = Math.round(Math.random()*20);
let contador=15;
var puntaje=0;
const gameOver=document.getElementById("game-over");
document.addEventListener('DOMContentLoaded', function(){
  gameOver.style.visibility="hidden";
})

const buttonElem = document.querySelector(".btn.check");
buttonElem.addEventListener('click', () => {
  let oldText = buttonElem.innerText;
  const menssage=document.querySelector(".message");
  const guess=document.querySelector(".guess");
  let valorGuess=parseInt(document.querySelector(".guess").value);
  let distanciaGuess= guess.value.length;
  if(valorGuess<0){
    menssage.textContent="⛔️ Ingrese un Numero igual o superior a 0!";
    alert("⛔️ Ingrese un Numero igual o superior a 0!");
    document.querySelector(".guess").value="0";
  } else{
    if(valorGuess>20){
      menssage.textContent="⛔️ Ingrese un Numero igual o inferior a 20!";
      alert("⛔️ Ingrese un Numero igual o inferior a 20!");
      document.querySelector(".guess").value="20";
    }else{
      if(distanciaGuess==0){
        menssage.textContent="⛔️ Ingrese un Numero!";
        alert("⛔️ Ingrese un Numero!");
      } else{
        let puntos=document.querySelector(".score");
        let numPuntos=parseInt(puntos.textContent);
        let highs=document.querySelector(".highscore");
        let max=parseInt(highs.textContent);
        if(contador==1){
          gameOver.style.visibility="visible";
        }
        if(contador>0){
          if(oldText!="CHECK!"){
            buttonElem.innerText= "CHECK!";
            document.getElementById("cambiar").innerText="JUEGO DE ADIVINAR"
          }
          valorGuess=Math.trunc(valorGuess);
          document.querySelector(".guess").value=`${valorGuess}`;
          if(valorGuess>numeroAleatorio){
            menssage.textContent="📈 Muy Alto!";
            alert("📈 Muy Alto!");
          }
          if(valorGuess<numeroAleatorio){
            menssage.textContent="📉 Muy bajo!";
            alert("📉 Muy bajo!")
          }
          if(valorGuess==numeroAleatorio){
            menssage.textContent="🎉 Es el número!";
            alert("🎉 Es el número!");
            numeroAleatorio=Math.round(Math.random()*20);
            document.querySelector(".guess").value="";
            if(numPuntos==0){
              puntaje=puntaje+100;
              puntos.innerText=`${puntaje}`;
              if(puntaje>max){
                highs.textContent=`${puntaje}`
                alert(`Tu número maxímo de punto se a actualizado a: ${puntaje}`);
              }
            } else{
                if(numPuntos==100){
                  puntaje+=200;
                  puntos.innerText=`${puntaje}`;
                  if(puntaje>max){
                    highs.textContent=`${puntaje}`
                    alert(`Tu número maxímo de punto se a actualizado a: ${puntaje}`);
                  }
                } else{
                  while(numPuntos<1300){
                    puntaje+=300;
                    puntos.innerText=`${puntaje}`;
                    if(puntaje>max){
                      highs.textContent=`${puntaje}`
                      alert(`Tu número maxímo de punto se a actualizado a: ${puntaje}`);
                    }
                    return puntaje
                  }
                  while(numPuntos>1200){
                    puntaje+=500;
                    puntos.innerText=`${puntaje}`;
                    if(puntaje>max){
                      highs.textContent=`${puntaje}`
                      alert(`Tu número maxímo de punto se a actualizado a: ${puntaje}`);
                    }
                    return puntaje
                  }
                }
              }
          }
          document.getElementById(`${contador}`).remove();
          if(contador==1){
            if(oldText!="OFF"){
              buttonElem.innerText= "OFF";
              document.getElementById("cambiar").innerText="ADIVINA EL NUMERO";
              document.getElementById("game-over").style.transition="all 2s ease-in-out";
              document.getElementById("game-over").style.transform="scale(0)";
              document.getElementById("game-over").style.opacity="0";
            }
            document.querySelector("audio").play();
          }
          contador-=1;
        } else{
          alert('Lo sentimos, te quedaste sin intentos permitidos. Para volver a comenzar toca el boton: "De Nuevo!".');
        }
      }
    }
  }
});

const buttonNew = document.querySelector(".btn.again");
buttonNew.addEventListener('click', function(){
  puntaje=0;
  contador=15;
  document.getElementById("game-over").style="";
  alert("El juego comienza de nuevo");
  numeroAleatorio = Math.round(Math.random()*20);
  document.querySelector(".guess").value="";
  document.querySelector(".score").textContent="0";
  document.querySelector(".right .barra").textContent="";
  document.querySelector(".right .barra").innerHTML=`<img src="heart.png" id="1">
  <img src="heart.png" id="2">
  <img src="heart.png" id="3">
  <img src="heart.png" id="4">
  <img src="heart.png" id="5">
  <img src="heart.png" id="6">
  <img src="heart.png" id="7">
  <img src="heart.png" id="8">
  <img src="heart.png" id="9">
  <img src="heart.png" id="10">
  <img src="heart.png" id="11">
  <img src="heart.png" id="12">
  <img src="heart.png" id="13">
  <img src="heart.png" id="14">
  <img src="heart.png" id="15">`;
  let oldText = buttonElem.innerText;
  if(oldText!="CHECK!"){
    document.getElementById("game-over").style.visibility="hidden";
    buttonElem.innerText= "CHECK!";
    document.getElementById("cambiar").innerText="JUEGO DE ADIVINAR"
  }
})