var kfcknop = document.getElementById("imgkfc");
var sound = document.getElementById("audio");
const aanuitknop = document.querySelector(".aanuitknop");


function kfc(){
  if (kfc) {
      sound.play();
      tekst.textContent ='Its Finger Licking Good!!!'
  }
}

kfcknop.addEventListener("click", kfc);

function aanuitknopDarkMode(){
  const aanuit = document.getElementById("aanuit");
  if(aanuit.classList.contains("light-mode")){
    aanuit.classList.remove("light-mode");
    aanuit.classList.add("dark-mode");
  }
  else{
    aanuit.classList.remove("dark-mode");
    aanuit.classList.add("light-mode");
  }
}

aanuitknop.addEventListener("click", aanuitknopDarkMode);