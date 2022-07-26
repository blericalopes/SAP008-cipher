import cipher from './cipher.js'; 
const criptarBtn = document.getElementById("criptar-btn"); //chama o botao
criptarBtn.addEventListener("click", () => { //evento para ser executado a partir do click
    const texto = document.getElementById("texto").value.toUpperCase(); //chama o texto input 
    const offset = parseInt(document.getElementById("deslo").value); //chama deslocamnto input
    const resultado = cipher.encode(offset,texto); //criada p exibir resultado da funçao
    const elResultado = document.getElementById("resultado"); //chama id da tag p no html
    const msg = "A mensagem Criptografada é: " + resultado; //criada para exibir o resultado
    elResultado.innerHTML = msg; //resultado exibido na pagina
   
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

