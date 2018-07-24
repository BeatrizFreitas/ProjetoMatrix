function somarInteiros(n){
  
  function somar(n){
    var soma=0; 
    soma = n > 0 ? (n + somar(n-1)): n;
    return soma;
  }
  
  if (isNumber(n)){
  return somar(parseInt(n));
  }
}
function multiplicarInteiros(n){
  function multiplicar(n){
    var mult=1;
    mult = n > 1 ? (n * multiplicar(n-1)): n;
    return mult;
  }
   if (isNumber(n)) {
     return multiplicar(parseInt(n));
   }
}


function somarImpares(n){
  function somar(n){
     var soma=0;
    soma = n > 0 ? (2*n-1 + somar(n-1)) : n;
    return soma
  }
   if (isNumber(n)){
     return somar(parseInt(n));
   }
 
}

function isNumber(n){
  return typeof parseInt(n) === 'number'
}

console.log(somarInteiros('10'))
console.log(multiplicarInteiros('5'))
console.log(somarImpares('5'))