//variables
let boba = "Se me antojó un tamal de salsa verde aompañado de un atole de galleta.";
let boba2 = boba.toUpperCase();
let boba3 =boba2.replace("CADENAS", "STRINGS");

//document
document.getElementById('axo').innerHTML=boba;
document.getElementById('axo2').innerHTML=boba2;
document.getElementById('axo3').innerHTML=boba3;

//consola
//console.log(boba.length);

//consola
console.log(boba.at(10));
console.log(boba.toUpperCase());