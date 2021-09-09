let numbers = ""

soma = 0


function MaiorValor(numbers) {
  var biggest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i]

    }
  }
  return biggest;
}
function somatorio() {
  for (var number of numbers) {
    number = Number(number)
    soma += number
  }
}

function resultado() {
  var input = document.querySelector("input").value
  numbers = input.split(" ")
  console.log(numbers)
  somatorio()

  if (numbers.length == 13) {
    let output = document.getElementById("output")
    output.innerHTML = "Somatório: " + soma
    let output2 = document.getElementById("output2")
    output2.innerHTML = "Maior número: " + MaiorValor(numbers)
    let output3 = document.getElementById("output3")
    output3.innerHTML = "Mediana: " + numbers[6]
    let output4 = document.getElementById("output4")
    output4.innerHTML = "Média: " + (soma / 13).toFixed(2)
  }
}