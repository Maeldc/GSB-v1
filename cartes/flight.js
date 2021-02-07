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

    const list = document.querySelector('.cartes_praticiens');
    DataPraticien.forEach((datas) => {
        console.log(datas.nom);
        console.log(datas.prenom);
        console.log(datas.adresse);
        console.log(datas.specialite);

        list.insertAdjacentHTML('beforeend', `
            <div class="bloc_praticien">
              <div class="bloc_actions">
              <img class="update" src="3592815-compose-create-edit-edit-file-office-pencil-writing_107734.png" alt="Modifier un praticien">
                <div id="myModal" class="modal">
                  <div class="modal-content">
                    <span class="close"><img class="exit" src="clear.png" alt="quitter"></span>
                    <br>
                    <p></p>
                  </div>
                </div>
                <img class="delete" src="delete.png" alt="Supprimer un praticien">
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
                <img class="location" src="japan.png" alt="${datas.adresse}">
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

    


