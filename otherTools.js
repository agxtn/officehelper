//Random number generator processes
let rngBtn = document.getElementById("generateRandom");
let min = document.getElementById("minNum");
let max = document.getElementById("maxNum");
let rngOutput = document.getElementById("rngResult");

rngBtn.addEventListener("click", getRandomIntInclusive);

function getRandomIntInclusive() {
  minNumber = Math.ceil(min.value);
  maxNumber = Math.floor(max.value);
  rngOutput.innerText = "Result: " + (Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber));
}


//Dead Pixel Checker
let dpcButton = document.getElementById("dpcCheck");
let dpcColor = document.getElementById("dpcDiv");

dpcButton.addEventListener("click", openFullscreen);


//This function opens the full screen div for the dead pixel checker
function openFullscreen() {
    if (dpcColor.requestFullscreen) {
      dpcColor.requestFullscreen();
    } else if (dpcColor.webkitRequestFullscreen) { /* Safari */
      dpcColor.webkitRequestFullscreen();
    } else if (dpcColor.msRequestFullscreen) { /* IE11 */
      dpcColor.msRequestFullscreen();
    }
    alert("Click to change color\nEsc to exit")
  }

//This function takes care of the changing of colors by simply clicking the screen
dpcColor.addEventListener("click", () => {
    if (dpcColor.style.background === "red"){
        dpcColor.style.background = "green";
    }
    else if (dpcColor.style.background === "green"){
        dpcColor.style.background = "blue";
    }
    else if (dpcColor.style.background === "blue"){
        dpcColor.style.background = "darkgray";
    }
    else dpcColor.style.background = "red";
} )


