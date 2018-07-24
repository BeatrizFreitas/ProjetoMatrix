function somarInteiros(n){
  var soma = 0;
  if (typeof n === 'number'){
    for (var i = 0 ; i <= n; i++){
    soma += i;
    }
    return soma;
  }
}

