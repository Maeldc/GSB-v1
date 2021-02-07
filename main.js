const DataPraticien = [
    {
        "id": 1,
        "nom": "Lee",
        "prenom": "Bruce",
        "adresse": "Marseille",
        "specialite": "ophtalmologue"
    },
    {
        "id": 2,
        "nom": "Hugo",
        "prenom": "Victor",
        "adresse": "Aix-En-Provence",
        "specialite": "Dentiste"
    },
    {
        "id": 3,
        "nom": "Mozart",
        "prenom": "Amadeus",
        "adresse": "Paris",
        "specialite": "Dentiste"
    },
    {
        "id": 4,
        "nom": "Beethoven",
        "prenom": "Ludwig Von",
        "adresse": "Nantes",
        "specialite": "ophtalmologue"
    },
    {
        "id": 5,
        "nom": "Proust",
        "prenom": "Marcel",
        "adresse": "Marseille",
        "specialite": "Dentiste"
    },
    {
        "id": 6,
        "nom": "Arouet",
        "prenom": "François-Marie",
        "adresse": "Paris",
        "specialite": "ophtalmologue"
    },
    {
        "id": 7,
        "nom": "Poquelin",
        "prenom": "Jean-baptiste",
        "adresse": "Lille",
        "specialite": "Dentiste"
    },
    {
        "id": 8,
        "nom": "Shakespear",
        "prenom": "William",
        "adresse": "Paris",
        "specialite": "Infirmier"
    },
    {
        "id": 9,
        "nom": "Geldog",
        "prenom": "Bob",
        "adresse": "Rouen",
        "specialite": "Infirmier"
    },
    {
        "id": 10,
        "nom": "Shakespear",
        "prenom": "William",
        "adresse": "Lille",
        "specialite": "Dentiste"
    }
];

const list = document.querySelector('.cartes_praticiens');
    DataPraticien.forEach((datas) => {
        console.log(datas.nom);
        console.log(datas.prenom);
        console.log(datas.adresse);
        console.log(datas.specialite);

        list.insertAdjacentHTML('beforeend', `
            <div class="bloc_praticien">
              <div class="bloc_actions">
              <img class="update" src="images/3592815-compose-create-edit-edit-file-office-pencil-writing_107734.png" alt="Modifier un praticien">
                <div id="myModal" class="modal">
                  <div class="modal-content">
                    <span class="close"><img class="exit" src="images/clear.png" alt="quitter"></span>
                    <br>
                    <p></p>
                  </div>
                </div>
                <img class="delete" src="images/delete.png" alt="Supprimer un praticien">
              </div>
              <div class="bloc_name">
                <p><b>Dr. ${datas.nom} ${datas.prenom}</b></p>
              </div>
              <div class="bloc_specialite">
                <p>${datas.specialite}</p>
              </div>
              <div id="space2">
                &nbsp;
              </div>
              <div class="bloc_location">
                <img class="location" src="images/japan.png" alt="${datas.adresse}">
                <p>à ${datas.adresse}</p>
              </div>
            </div> 
        `);
        // je recupere le modal
        let modal = document.querySelector("#myModal");
        console.log(modal);

        // je recupere le bouton
        let img = document.querySelector(".update");
        console.log(img);

        // je lui affecte une action au click
        img.addEventListener('click', ()=>{
            modal.style.display = "block";
        });

        // Je recupere le span qui contient la croix pour quitter
        let span = document.getElementsByClassName("exit")[0];

        // quand je click sur la croix je quitte 
        span.addEventListener('click', ()=>{
          modal.style.display = "none";
        });
        
    });


const button = document.querySelector('.button_connect');
console.log(button);

let mail;
/*

<div>
                <img src='${datas.album.cover_medium}' class="imgClick">
                <br>
                <p>${datas.title}</p>
                <br>
                <audio controls>
                    <source src="${datas.preview}" type="audio/mpeg">
                </audio>
            </div> 


button.addEventListener('click', () => {
    
    mail = document.querySelector('#username').value;
    if(mail === "mae.lodico@gmail.com"){

    }


    alert('vous avez mis'+mail);
    console.log(mail);

});

/* const equipes = document.querySelectorAll('ul li');

//equipes.style.display = "none";
console.log(equipes);
equipes.forEach((equipe) => {
    if(equipe.innerText === "Leeds"){
        equipe.style.display = "none";
    }
});

const img = document.querySelector('img');

/* setTimeout(() => {
    img.style.borderRadius = "50%";
}, 2000); 

setTimeout(() => {
    img.classList.add('circle');
}, 2000); */

///////// recuperer la valur d'un formulaire //////////////

/* const userAge = document.querySelector('#user_input');

console.log(parseInt(userAge.value));

const img = document.querySelector('img');
const nvlImg = document.querySelector('#sun'); */

/* nvlImg.addEventListener(TYPEEVENT, CALLBACK) */

/* img.addEventListener('click', () => {
    img.classList.toggle('circle');
}); */

/* 
var validClick = 0;
img.addEventListener('click', () => {
    if(validClick === 0){
        validClick = 1;
        img.classList.add('circle');
    } else {
        validClick = 0;
        img.classList.remove('circle');
    }
}); */


/*
const bodyPage = document.querySelector('body');
const r = document.querySelector('#rouge');
const b = document.querySelector('#bleu');
const v = document.querySelector('#vert');


r.addEventListener('mouseover', () => {

    bodyPage.classList.add("rouge");    
    bodyPage.classList.remove("vert");    
    bodyPage.classList.remove("bleu");    

});

b.addEventListener('mouseover', () => {

    bodyPage.classList.add("bleu");   
    bodyPage.classList.remove("vert");    
    bodyPage.classList.remove("rouge");   

});
v.addEventListener('mouseover', () => {

    bodyPage.classList.add("vert");   
    bodyPage.classList.remove("rouge");    
    bodyPage.classList.remove("bleu");   

});


/////////// AUTRE POSSIBILITE ////////
/* const affichage = () =>{
    alert('eh Mercééééé');
}
 
nvlImg .addEventListener('click', affichage);*/
////////////////////////////////////////////