var numeroAleatorio = Math.round(Math.random()*20);
let contador=15;
var puntaje=0;

const buttonElem = document.querySelector(".btn.check");
buttonElem.addEventListener('click', () => {
  let oldText = buttonElem.innerText;
  const menssage=document.querySelector(".message");
  const guess=document.querySelector(".guess");
  let valorGuess=parseInt(document.querySelector(".guess").value);
  let distanciaGuess= guess.value.length;
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
      if(contador>0){
        if(oldText!="CHECK!"){
          buttonElem.innerText= "CHECK!";
          document.getElementById("cambiar").innerText="JUEGO DE ADIVINAR"
        }
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
          }
        }
        contador-=1;
      } else{
        alert('Lo sentimos, te quedaste sin intentos permitidos. Para volver a comenzar toca el boton: "De Nuevo!".');
      }
    }
  }
});

const buttonNew = document.querySelector(".btn.again");
buttonNew.addEventListener('click', function(){
  alert("El juego comienza de nuevo");
  numeroAleatorio = Math.round(Math.random()*20);
  document.querySelector(".guess").value="";
  document.querySelector(".score").textContent="0";
  document.querySelector(".right .barra").textContent="";
  document.querySelector(".right .barra").innerHTML=`<img src="img/heart.png" id="1">
  <img src="img/heart.png" id="2">
  <img src="img/heart.png" id="3">
  <img src="img/heart.png" id="4">
  <img src="img/heart.png" id="5">
  <img src="img/heart.png" id="6">
  <img src="img/heart.png" id="7">
  <img src="img/heart.png" id="8">
  <img src="img/heart.png" id="9">
  <img src="img/heart.png" id="10">
  <img src="img/heart.png" id="11">
  <img src="img/heart.png" id="12">
  <img src="img/heart.png" id="13">
  <img src="img/heart.png" id="14">
  <img src="img/heart.png" id="15">`;
  let oldText = buttonElem.innerText;
  if(oldText!="CHECK!"){
    buttonElem.innerText= "CHECK!";
    document.getElementById("cambiar").innerText="JUEGO DE ADIVINAR"
  }
})