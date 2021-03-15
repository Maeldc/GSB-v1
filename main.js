const formulaire = document.getElementById('formulaire');


let nomPraticien = document.querySelector('#nom');
let secteurGeographique = document.querySelector('#secteur');
let specialitePraticien = document.querySelector('#specialite');

const liste = document.getElementById('list');

const tousLesPraticiens = document.querySelector('.lien_praticiens');


let url = "http://localhost:90/gsb/praticien?";

let rechercher = document.querySelector('.button_search');


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

rechercher.addEventListener('click', (event)=>{
    event.preventDefault();
    liste.innerHTML = "";

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
        url += `nom=${nomPraticien.value}&`;
         }
    if(secteurGeographique.value !== ''){
        url += `ville=${secteurGeographique.value}&`; 
    }           
    if(specialitePraticien.value !== ''){
        url += `specialite=${specialitePraticien.value}&`;
    }
    if(visite !== ''){
        url += `specialite=${visite}&`;
    }

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
                                    <a id="specialite" href="fiche_praticien.html"> voir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            console.log('praticiens de  => [' +element.nom+' => '+element.adresse+' '+ element.adresse+ ']');
        });
    });
    console.log(url);
    url = "http://localhost:90/gsb/praticien?";
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