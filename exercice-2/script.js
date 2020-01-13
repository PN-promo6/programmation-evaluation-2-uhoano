let container
let newTitle
let newPara
let newButton

function display(screen) {
  container = document.createElement("div")
  document.body.appendChild(container)

  newTitle = document.createElement("h1");
  container.appendChild(newTitle);
  newTitle.textContent = "Cinéma le Dauphin";
  newTitle.style.fontStyle = "bold";


  newPara = document.createElement("p");
  container.appendChild(newPara);
  newPara.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualités. des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-gôuters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi).";

  newButton = document.createElement("input");
  newButton.type = "button";
  container.appendChild(newButton);
  newButton.value = "Voir les films à l'affiche cette semaine";

  container.style.display="block";
}

display(container)

let moviesInfo = [
  ["Titre du film", "Réalisateur","Nationalité", "Année", "Durée","Version"],
  ["IN MY ROOM" , "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENTS DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE", "Roberto Minervini", "Etats-Unis/Italies","2018","2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo","Corée du sud", "2018", "1h06", "vostfr"]
];
