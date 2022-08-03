const cipher = {encode, decode}; 
function encode (offset,texto) { 
  if (typeof offset !== "number" || typeof texto !== "string"){
    throw new TypeError("Parâmetros inválidos.") 
  }
  let transfTextoCi = "";
  for (let i = 0; i < texto.length; i++) { 
    let textoCifrado = ((texto.charCodeAt(i) - 65 + offset) % 26) + 65; 
    transfTextoCi += String.fromCharCode(textoCifrado); 
  }
return transfTextoCi;
}
function decode (offset,texto) { 
  if (typeof offset !== "number" || typeof texto !== "string"){
    throw new TypeError("Parâmetros inválidos.")
  }
  let transfTextoDe = ""; 
  for( let i =0; i< texto.length; i++) { 
    let textoDecifrado = ((texto.charCodeAt(i) + 65 - offset) % 26) + 65; 
    transfTextoDe += String.fromCharCode(textoDecifrado); 
  }
  return transfTextoDe;
}
export default cipher;

