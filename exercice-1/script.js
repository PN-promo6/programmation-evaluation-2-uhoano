function display(array){
  let i = 1;
  let newTable = document.createElement("table");
  document.body.appendChild(newTable);
  newTable.style.border = "1px solid black"

  let newThead = document.createElement("thead")
  newTable.appendChild(newThead);

  let headTr = document.createElement("tr");
  newThead.appendChild(headTr)

  let headTh = document.createElement("th")
  headTr.appendChild(headTh)
  headTh.colSpan = array.length;

  let newBody = document.createElement("tbody");
  newTable.appendChild(newBody);

  let newTr = document.createElement("tr");
  newBody.appendChild(newTr);
    while (i<array.length) {

      let currentElement = array[i];
      headTh.textContent = array[0];
      headTh.style.color = "red";
      let newTd = document.createElement("td");
      newTr.appendChild(newTd);
      newTd.innerText = array[i];
      newTd.style.border = "solid";
      newTd.style.display="block"
      i++
    }
    return newTable
}



let fishList = [
  ["Ordre" , "Famille", "Nom vernaculaire", "Nom binomal"],
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridea", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

display(fishList);

console.log(document.body.style);
