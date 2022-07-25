import cipher from './cipher.js';

let descriptarBtn = document.getElementById("descriptar-btn");
let criptarBtn = document.getElementById("criptar-btn");

criptarBtn.addEventListener("click", () => {
let criptarBtn = cipher.Criptar();
})

descriptarBtn.addEventListener("click", () => {
let descriptarBtn = cipher.Descriptar();   
})

