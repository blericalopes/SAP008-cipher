const cipher = {encode, decode}; 
function encode (offset,texto) { 
  if (typeof offset !== "number" || typeof texto !== "string"){//condição para receber tipo correto e disparar erro
    throw new TypeError("Parametros invalidos")//com throw ele encerra e não precisa de else
  }
  let transfTextoCi = "";//texto q vai ser transformado
  for (let i =0; i< texto.length; i++) { //acessa letra por letra q foi digitada
    let textoCifrado = ((texto.charCodeAt(i) - 65 + offset) % 26) + 65; //criada p identificar texto entre 65 e 90
    transfTextoCi += String.fromCharCode(textoCifrado); //transf em string
   
  }
return transfTextoCi;//retorna 
}
function decode (offset,texto) { 
  if (typeof offset !== "number" || typeof texto !== "string"){
    throw new TypeError("Parametros invalidos")
  }
  let transfTextoDe = ""; 
  for( let i =0; i< texto.length; i++) { 
    let textoDecifrado = ((texto.charCodeAt(i) + 65 - offset) % 26) + 65; 
    transfTextoDe += String.fromCharCode(textoDecifrado); 
    
  }
  return transfTextoDe;
}
export default cipher;

