// Sélectionnez les éléments triangulaires
const upTriangle = document.getElementById("up");
const rightTriangle = document.getElementById("right");
const downTriangle = document.getElementById("down");
const leftTriangle = document.getElementById("left");

// Ajoutez des gestionnaires d'événements de clic à chaque triangle
upTriangle.addEventListener("click", () => {
    upTriangle.style.borderBottomColor = "black"; // Changez seulement la couleur de la bordure inférieure

    // Remettre la couleur rouge après 2 secondes
    setTimeout(() => {
        upTriangle.style.borderBottomColor = "red";
    }, 300);
});

rightTriangle.addEventListener("click", () => {
    rightTriangle.style.borderLeftColor = "black"; // Changez seulement la couleur de la bordure gauche

    // Remettre la couleur rouge après 2 secondes
    setTimeout(() => {
        rightTriangle.style.borderLeftColor = "red";
    }, 300);
});

downTriangle.addEventListener("click", () => {
    downTriangle.style.borderTopColor = "black"; // Changez seulement la couleur de la bordure supérieure

    // Remettre la couleur rouge après 2 secondes
    setTimeout(() => {
        downTriangle.style.borderTopColor = "red";
    }, 300);
});

leftTriangle.addEventListener("click", () => {
    leftTriangle.style.borderRightColor = "black"; // Changez seulement la couleur de la bordure droite

    // Remettre la couleur rouge après 2 secondes
    setTimeout(() => {
        leftTriangle.style.borderRightColor = "red";
    }, 300);
});


document.getElementById("plein_ecran_btn").addEventListener("click", function() {
  toggleFullScreen();
});

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

  