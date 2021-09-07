function quadrado(num) {
  return num**2;
}

function cubo(num) {
  return num**3;
}

function fibonacci(num) {
  if (num <= 0) {
      return "Ø"
  }
  else if (num === 1) {
      return 0
  }
  else if (num === 2) {
      return 1
  }

  let n2 = 0
  let n1 = 1
  let atual
  let tmp
  for (let i = 2; i < num; i++) {
      atual = n2 + n1
      tmp = n1
      n1 = atual
      n2 = tmp

  }
  return atual
}

function fatorial(num) {
  if (num < 0) {
      return "Ø"
  }
  else if (num === 0){
      return 1
  }
  var ans = num;
  for (var i = num-1; i > 0; i--){
      ans *= i;
  }
  return ans;
}

function raiz(num) {
  if (num < 0) {
      return "∈ C"
  }
  var ans = num**(1/2);
  return ans.toFixed(3);
}

var counter = 1;
function output() {
  numero = parseInt(document.getElementById("input").value);

  var tbody = document.getElementsByTagName("tbody")[0];
  if (counter === 1) {
      tbody.innerHTML = "";
      counter++;
  }
  tbody.innerHTML += `<tr>
      <td>${numero}</td>
      <td class="quadrado">${quadrado(numero)}</td>
      <td class="cubo">${cubo(numero)}</td>
      <td class="fib">${fibonacci(numero)}</td>
      <td class="fatorial">${fatorial(numero)}</td>
      <td class="raiz">${raiz(numero)}</td>
      </tr>`;
}