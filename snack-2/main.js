let userStr = prompt("Inserisci una parola")
let userStrCmp = prompt("Inserisci una parola")

if (userStr.length <= userStrCmp.length){
    console.log(userStr, userStrCmp);
}else{
    console.log(userStrCmp, userStr);
}