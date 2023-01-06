//Dead Pixel Checker

let dpcButton = document.getElementById("dpcCheck");
let dpcColor = document.getElementById("dpcDiv");

dpcButton.addEventListener("click", openFullscreen);

function openFullscreen() {
    if (dpcColor.requestFullscreen) {
      dpcColor.requestFullscreen();
    } else if (dpcColor.webkitRequestFullscreen) { /* Safari */
      dpcColor.webkitRequestFullscreen();
    } else if (dpcColor.msRequestFullscreen) { /* IE11 */
      dpcColor.msRequestFullscreen();
    }
  }
