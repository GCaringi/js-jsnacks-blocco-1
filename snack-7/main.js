const nameList = ["gianni", "marco", "giulio", "matteo", "federico", "samuele", "eligio", "fabio"];
const surnameList = ["rossi", "bianchi", "verdi", "pazzi", "sarra", "black", "red", "white"];
const fakeList = [];

for (let i = 0; i < nameList.length; i++){
    //fakeList.push(nameList[Math.floor(Math.random()*nameList.length)] + " " +  surnameList[Math.floor(Math.random()*surnameList.length)]);
    fakeList.push(`${nameList[Math.floor(Math.random()*nameList.length)]} ${surnameList[Math.floor(Math.random()*surnameList.length)]}`);
}

console.log(fakeList);