function compara(a, b) {
  return a - b
}

function signo(p2) {
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 1 && numeros[i] <= 12) {
      p2.innerHTML += `${numeros[i]}, signo: ${signos[numeros[i] - 1]}<img class="i" src="../assets/images/signos/${signos[numeros[i] - 1]}.png" /><br>`
    }
    else {
      p2.innerHTML += `${numeros[i]}, signo: Dormir<img class="i" src="../assets/images/signos/Dormir.png" /><br>`
    }
  }
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

var counter = 9

function output() {
  numeros.push(parseInt(document.getElementById("input").value))
  document.getElementById("input").value = ""

  counter -= 1
  let information__counter = document.getElementById("counter")
  information__counter.innerHTML = `Restam ${counter} números`
  if (counter == 1) {
    information__counter.innerHTML = `Resta ${counter} número`
  }
  if (counter <= 0) {
    information__counter.innerHTML = ""
  }

  if (numeros.length === 9) {
    document.getElementById("input").setAttribute("disabled", true)
    document.getElementById("line").classList.remove("hide")
    numeros.sort(compara)

    information__counter.innerHTML = ""

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