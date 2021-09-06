
var names = []

var aleatory = []

var button = document.querySelector("button")

counter = 10;

function getNames() {

  var objectNames = {

    nome: "",

    numeroVogais: 0

  }

  objectNames.nome = document.querySelector("#nome").value

  for (j = 0; j < objectNames.nome.length; j++) {
    if (objectNames.nome[j].includes("a") == true || objectNames.nome[j].includes("A") == true) {
      objectNames.numeroVogais += 1
    }

    if (objectNames.nome[j].includes("e") == true || objectNames.nome[j].includes("E") == true) {
      objectNames.numeroVogais += 1
    }

    if (objectNames.nome[j].includes("i") == true || objectNames.nome[j].includes("I") == true) {
      objectNames.numeroVogais += 1
    }

    if (objectNames.nome[j].includes("o") == true || objectNames.nome[j].includes("O") == true) {
      objectNames.numeroVogais += 1
    }

    if (objectNames.nome[j].includes("u") == true || objectNames.nome[j].includes("U") == true) {
      objectNames.numeroVogais += 1
    }
  }


  // Contador - conta a quantidade de nomes restantes, quando o contador for menor ou igual a zero, o conteúdo no html fica vazio
  counter -= 1

  var information__counter = document.getElementById("information__counter")
  information__counter.innerHTML = `Restam ${counter} nomes`

  if (counter == 1) {
    information__counter.innerHTML = `Resta ${counter} nome`
  }
  if (counter <= 0) {
    information__counter.innerHTML = ``
  }
  // Contador

  names.unshift(objectNames)

  aleatory.push(objectNames.nome)

  for (var i = aleatory.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [aleatory[i], aleatory[j]] = [aleatory[j], aleatory[i]];
  }

  console.log(names)


  if (names.length == 10) {

    button__delete.innerHTML = "Deletar tabela"

    counter = 10


    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tbody.innerHTML = ""

    for (var i = 0; i < names.length; i++) {
      tbody.innerHTML += "<tr><td>" + names[i].nome + "</td><td>" + names[i].numeroVogais + "</td><td>" + aleatory[i] + "</td></tr>"
    }

  }
}

function deleteNames() {

  for (var c = 0; c < 10; c++) {
    names.pop()
  }
  console.log(names)

  var table = document.getElementsByTagName("table")[0];
  var tbody = table.getElementsByTagName("tbody")[0];

  tbody.innerHTML = ""
}