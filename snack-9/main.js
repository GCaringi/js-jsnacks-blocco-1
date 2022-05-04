let firstArray = ["elem", "elem", "elem", "elem", "elem", "elem", "elem", "elem", "elem"];
let secondArray = ["elem", "elem", "elem", "elem", "elem", "elem", "elem", "elem", "elem", "elem"];



if (firstArray.length > secondArray.length){
    for (let i = secondArray.length; i < firstArray.length; i++){
        secondArray.push("elem");
    }
}else{
    for (let i = firstArray.length; i < secondArray.length; i++){
        firstArray.push("elem");
    }
}

console.log(firstArray);
console.log(secondArray);