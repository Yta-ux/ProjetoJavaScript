function compara(a, b) {
  return a - b
}

function signo(p2) {
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 1 && numeros[i] <= 12) {
      p2.innerHTML += `${numeros[i]}, signo: ${signos[numeros[i] - 1]}<img class="i" src="../images/signos/${signos[numeros[i] - 1]}.png" /><br>`
    }
    else {
      p2.innerHTML += `${numeros[i]}, signo: Dormir<img class="i" src="../images/flame1.png" /><br>`
    }
  }
  // p2.innerHTML += "<hr>"
}

var numeros = []
var signos = [
  'Rato',
  'Boi',
  'Tigre',
  'Coelho',
  'Dragão',
  'Serpente',
  'Cavalo',
  'Carneiro',
  'Macaco',
  'Cão',
  'Galo',
  'Porco'
]

function output() {
  numeros.push(parseInt(document.getElementById("input").value))
  document.getElementById("input").value = ""

  if (numeros.length === 9) {
    document.getElementById("input").setAttribute("disabled", true)
    document.getElementById("line").classList.remove("hide")
    numeros.sort(compara)

    var p = document.getElementsByTagName("span")[0]
    p.innerHTML = `
      Menor número: ${numeros[0]}<br>

      Número do meio: ${numeros[4]}<br>

      Maior número: ${numeros[8]}
      `
    var h5 = document.getElementsByTagName("h5")[0]
    h5.innerHTML = "Signos para cada número"

    var p2 = document.getElementsByTagName("span")[1]

    p2.innerHTML = ""

    signo(p2)

  }
}