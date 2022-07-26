import cipher from './cipher.js'; 
const criptarBtn = document.getElementById("criptar-btn"); 
criptarBtn.addEventListener("click", () => { 
    const texto = document.getElementById("texto").value.toUpperCase(); 
    const offset = parseInt(document.getElementById("deslo").value); 
    const resultado = cipher.encode(offset,texto); 
    const elResultado = document.getElementById("resultado"); 
    const msg = "A mensagem Criptografada é: " + resultado; 
    elResultado.innerHTML = msg; 
   
})
const descriptarBtn = document.getElementById("descriptar-btn"); 
descriptarBtn.addEventListener("click", () => { 
    const texto = document.getElementById("texto").value.toUpperCase(); 
    const offset = parseInt(document.getElementById("deslo").value); 
    const resultado = cipher.decode(offset,texto);
    const elResultado = document.getElementById("resultado"); 
    const msg = "A mensagem Descriptografada é: " + resultado; 
    elResultado.innerHTML = msg; 
})

