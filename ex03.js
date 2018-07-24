function somarInteiros(n){
  if (isNumber(n) == false) return;
  var soma=0;
  for (var i = 0 ; i<= n; i++){
    soma += i;
  }
  return soma;
}
function somarImpares(n){
  if (!isNumber(n)) return;
  var soma=0;
  var cont=0;
  for (var i = 0 ; cont !== n; i++){
    if(i%2 !== 0){
      soma += i;
      cont++;
    }  
  }
  return soma;
}

function isNumber(n){
  return typeof n === 'number'
}

