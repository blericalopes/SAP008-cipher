const cipher = {Criptar,Descriptar};

function Criptar () {
  let texto = document.getElementById("texto").value.toUpperCase();
  let deslocamento = parseInt(document.getElementById("deslo").value);
console.log (texto); 
console.log (deslocamento);

  let transfTextoCi = "";
    for( let i =0; i< texto.length; i++) { 
    let textoCifrado = ((texto.charCodeAt(i) - 65 + deslocamento) % 26) + 65;
    transfTextoCi += String.fromCharCode(textoCifrado);

    let elementoResultado = document.getElementById("resultado");
    let resultado = "A mensagem Criptografada é: " + 
    transfTextoCi; elementoResultado.innerHTML = resultado;
 }
 console.log (transfTextoCi);
}

function Descriptar () {
  let texto = document.getElementById("texto").value.toUpperCase();
  let deslocamento = parseInt(document.getElementById("deslo").value);
console.log (texto); 
console.log (deslocamento);

  let transfTextoDe = "";
    for( let i =0; i< texto.length; i++) { 
      let textoDecifrado = ((texto.charCodeAt(i) - 65 - deslocamento) % 26) + 65;
      transfTextoDe += String.fromCharCode(textoDecifrado); 

      let elementoResultado = document.getElementById("resultado");
      let resultado = "A mensagem Descriptografada é: " + 
      transfTextoDe; elementoResultado.innerHTML = resultado;
 }
 console.log (transfTextoDe);
}

export default cipher;
