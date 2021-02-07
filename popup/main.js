// je recupere le modal
const modal = document.getElementById("myModal");

// je recupere le bouton
const img = document.querySelector(".update");

// je lui affecte une action au click
img.addEventListener('click', ()=>{
    modal.style.display = "block";
});

// Je recupere le span qui contient la croix pour quitter
const span = document.getElementsByClassName("close")[0];

// quand je click sur la croix je quitte  
span.onclick = function() {
  modal.style.display = "none";
}
