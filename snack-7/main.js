
// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nameList = ["gianni", "marco", "giulio", "matteo"];
const surnameList = ["rossi", "bianchi", "verdi", "pazzi"];
const fakeList = [];

for (let i = 0; i < nameList.length; i++){
    fakeList.push(nameList[Math.floor(Math.random()*nameList.length)] + " " +  surnameList[Math.floor(Math.random()*surnameList.length)]);
}

console.log(fakeList);