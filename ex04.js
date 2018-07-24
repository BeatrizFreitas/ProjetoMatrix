function multiplicarInteiros(n){
  if (isNumber(n) == false) return;
  var mult=1;
  for (var i = 1 ; i<= n; i++){
    mult *= i;
  }
  return mult;
}
function isNumber(n){
  return typeof n === 'number'
}

