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

const formulaire = document.getElementById('formulaire');


let nomPraticien = document.querySelector('#nom');
let secteurGeographique = document.querySelector('#secteur');
let specialitePraticien = document.querySelector('#specialite');
let valeur;

const liste = document.getElementById('list');

const tousLesPraticiens = document.querySelector('.lien_praticiens');


let url = "http://localhost:90/gsb/praticien";
console.log(nomPraticien);

let rechercher = document.querySelector('.button_search');

let cpt = 0;


tousLesPraticiens.addEventListener('click', (event)=>{
    event.preventDefault();

    formulaire.style.display = "none";

    fetch(url)
    .then(response => response.json())
    .then((datas) => {
        datas.forEach( (element)=> {
            liste.insertAdjacentHTML('beforeend', `
                <div class="bloc_card">
                    <div class="card">
                        <div class="avatar_card">
                            <img class="doctor_card" src='images/doctor_carte.png'>
                        </div>
                        <div class="information_card">
                            <div class="information_card2">
                                <p>Dr. ${element.nom}</p>
                                <p id="specialite">${element.specialite}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    });
});

let url2= url;

rechercher.addEventListener('click', (event)=>{
    event.preventDefault();
    liste.innerHTML = "";
   //formulaire.style.display = "none";

    if (document.getElementById('oui').checked) {
        visite = document.getElementById('oui').value;
        console.log(visite);

    } else if(document.getElementById('non').checked){
        visite = document.getElementById('non').value;
        console.log(visite);
    } else {
        visite = "";
        console.log(visite);
    }


    if(nomPraticien.value !== ''){
        if(cpt === 0){
            url2 = url2 + "?nom=" + nomPraticien.value;
            cpt = 1;
        } else {
            url2 = url2 + "&nom=" + nomPraticien.value;
        }
    }
    if(secteurGeographique.value !== ''){
        if(cpt === 0){
            url2 = url2 + "?ville=" + secteurGeographique.value;
            cpt = 1;
        } else {
            url2 = url2 + "&ville=" + secteurGeographique.value;
        }
    }
    if(specialitePraticien.value !== ''){
        if(cpt === 0){
            url2 = url2 + "?specialite=" + specialitePraticien.value;
            cpt = 1;
        } else {
            url2 = url2 + "&specialite=" + specialitePraticien.value;
        }
    }
    if(visite !== ''){
        if(cpt === 0){
            url2 = url2 + "?visite=" + visite;
            cpt = 1;
        } else {
            url2 = url2 + "&visite=" + visite;
        }
    }

    fetch(url2)
    .then(response => response.json())
    .then((datas) => {
        datas.forEach( (element)=> {
                liste.insertAdjacentHTML('beforeend', `
                    <div class="bloc_card">
                        <div class="card">
                            <div class="avatar_card">
                                <img class="doctor_card" src='images/doctor_carte.png'>
                            </div>
                            <div class="information_card">
                                <div class="information_card2">
                                    <p>Dr. ${element.nom}</p>
                                    <p id="specialite">${element.specialite}</p>
                                    <a id="specialite" href="fiche_praticien.html"> voir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            console.log('praticiens de  => [' +element.nom+' => '+element.adresse+' '+ element.adresse+ ']');
        });
    });
    console.log(url2);
    nomPraticien.value = "";
    secteurGeographique.value = "";
    specialitePraticien.value = "";
    visite = "";
});

/*
fetch(url + "?nom=Marseille")
.then(response => response.json())
.then((datas) => {
    datas.forEach( (element)=> {
        console.log('praticiens de Marseille => [' +element.nom+' => '+element.adresse+']');
    });
});


//Afficher dans la console tous les dentistes de Paris

fetch(url + "?ville=Paris&specialite=Dentiste")
.then(response => response.json())
.then((datas) => {
    datas.forEach( (element)=> {
        console.log('dentistes de Paris => [' +element.nom+', '+ element.adresse +' '+element.specialite+']');
    });
});


//Afficher dans la console tous les praticiens qui ont été visité

fetch(url + "?visite=1")
.then(response => response.json())
.then((datas) => {
    datas.forEach( (element)=> {
        console.log('praticiens qui ont été visité => [' +element.nom+' => '+element.specialite+']');
    });
});


//Afficher dans la console tous les dentistes de Marseille qui ont été visité
  
fetch(url + "?ville=Marseill&specialite=Dentiste&visite=1")
.then(response => response.json())
.then((datas) => {
    datas.forEach( (element)=> {
        console.log('dentistes de Marseille qui ont été visité => [' +element.nom+' => '+element.specialite+']');
    });
});


console.log(nomPraticien);
console.log(secteurGeographique);
console.log(specialite);
console.log(visite);
*/


/*********************** COULEUR ONGLETS ***********************/

const ongletMedicament = document.querySelector('#medicaments');
const addMedicament = document.querySelector('#addmedicament');
const ongletPraticien = document.querySelector('#praticiens');
const addPraticien = document.querySelector('#addpraticien');
const ongletVisiteur = document.querySelector('#visiteurs');
const addVisiteur = document.querySelector('#addvisiteur');
const ongletMonCompte = document.querySelector('#compte');
const ongletDeconnexion = document.querySelector('#deconnexion');

const marge = document.querySelector('.marge');
const space = document.querySelector('.space');

marge.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
space.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});

ongletMedicament.addEventListener('mouseover', () => {
    ongletMedicament.classList.add("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
addMedicament.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.add("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
ongletPraticien.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.add("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
addPraticien.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.add("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
ongletVisiteur.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.add("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
addVisiteur.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.add("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
ongletMonCompte.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.add("mouseover_onglet"); 
    ongletDeconnexion.classList.remove("mouseover_onglet"); 
});
ongletDeconnexion.addEventListener('mouseover', () => {
    ongletMedicament.classList.remove("mouseover_onglet");    
    addMedicament.classList.remove("mouseover_onglet");    
    ongletPraticien.classList.remove("mouseover_onglet"); 
    addPraticien.classList.remove("mouseover_onglet");    
    ongletVisiteur.classList.remove("mouseover_onglet"); 
    addVisiteur.classList.remove("mouseover_onglet");    
    ongletMonCompte.classList.remove("mouseover_onglet"); 
    ongletDeconnexion.classList.add("mouseover_onglet"); 
});