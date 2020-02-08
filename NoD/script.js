window.addEventListener('DOMContentLoaded', function(){

let fir = document.querySelector('.first'), 
sec = document.querySelector('.second'), 
ans = document.querySelector('.answer'),
btnNod = document.querySelector('.check');




btnNod.addEventListener('click', function calcNod(a, b){

  a = +fir.value;
  b = +sec.value;
  let prom = a % b;

  if(a == 0 || b == 0 || isNaN(a) || a == "" || a == null || isNaN(b) || b == "" || b == null){
    alert('Указаны неверные значения');
    console.log('Неверные значения');
  }
  else if (a < b) {
    ans.value = a;
  }
  else if (prom == 0) {
    let del = a / b;
    ans.value = del;
  }
  else {
    calcNod(b, prom);
    console.log('w');
  }
});

});