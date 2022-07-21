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
 }
 console.log (transfTextoCi);
}

function Descriptar () {
  let texto = document.getElementById("texto").value.toUpperCase();
  let deslocamento = parseInt(document.getElementById("deslo").value);
//console.log (texto); 
//console.log (deslocamento);

  let transfTextoDe = "";
    for( let i =0; i< texto.length; i++) { 
      let textoDecifrado = ((texto.charCodeAt(i) - 65 - deslocamento) % 26) + 65;
      transfTextoDe += String.fromCharCode(textoDecifrado); 
 }
 console.log (transfTextoDe);
}

export default cipher;
