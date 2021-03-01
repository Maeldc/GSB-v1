const DataPraticien = [
  {
      "id": 1,
      "nom": "Lee",
      "prenom": "Bruce",
      "adresse": "Marseille",
      "specialite": "Ophtalmologue"
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
      "specialite": "Ophtalmologue"
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
      "specialite": "0phtalmologue"
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

const url = "http://localhost:90/gsb/praticien";


//Afficher dans la console tous les praticiens de Marseille

fetch(url + "?ville=Marseille")
.then(response => response.json())
.then((datas) => {
    datas.forEach( (element)=> {
        console.log('praticiens de Marseille => [' +element.nom+' => '+element.adresse);
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

 /*   const list = document.querySelector('.cartes_praticiens');
    DataPraticien.forEach((datas) => {
        console.log(datas.nom);
        console.log(datas.prenom);
        console.log(datas.adresse);
        console.log(datas.specialite);

        list.insertAdjacentHTML('beforeend', `
            
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
*/
    


