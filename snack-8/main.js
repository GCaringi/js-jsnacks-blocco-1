const numArray = [1 ,2, 3, 4, 5, 6, 8];

let sum = Number(0);

for (let i = 0; i < numArray.length; i++){
    if (i % 2 !== 0){
        sum += Number(numArray[i]);
    }
}

console.log(sum);