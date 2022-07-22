import cipher from './cipher.js';

let descriptarBtn = document.getElementById("descriptar-btn");
let criptarBtn = document.getElementById("criptar-btn");

criptarBtn.addEventListener("click", () => {
let texto = document.getElementById("texto").value.toUpperCase();
let deslocamento = parseInt(document.getElementById("deslo").value);
let transfTextoCi = cipher.Criptar();
})

descriptarBtn.addEventListener("click", () => {
let texto = document.getElementById("texto").value.toUpperCase();
let deslocamento = parseInt(document.getElementById("deslo").value);
let transfTextoDe = cipher.Descriptar();   
})

