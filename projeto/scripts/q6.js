
var names = []

var aleatory = []

var button = document.querySelector("button")

function getNames(){

  var objectNames = {

    nome: "",

    numeroVogais: 0

  }

    objectNames.nome = document.querySelector("#nome").value

       
      //var x = Array.from(objectNames.nome)

          for( j = 0; j <objectNames.nome.length; j++){
            if(objectNames.nome[j].includes("a") == true || objectNames.nome[j].includes("A") == true){
              objectNames.numeroVogais += 1
            }
    
            if(objectNames.nome[j].includes("e") == true || objectNames.nome[j].includes("E") == true){
              objectNames.numeroVogais += 1
            }
    
            if(objectNames.nome[j].includes("i") == true || objectNames.nome[j].includes("I") == true){
              objectNames.numeroVogais += 1
            }
    
            if(objectNames.nome[j].includes("o") == true || objectNames.nome[j].includes("O") == true){
              objectNames.numeroVogais += 1
            }
    
            if(objectNames.nome[j].includes("u") == true || objectNames.nome[j].includes("U") == true){
              objectNames.numeroVogais += 1
            }
          }
    

    names.unshift(objectNames)

    if(names.length % 2 == 0){
      aleatory.push(objectNames.nome)
    }
    else{
      aleatory.unshift(objectNames.nome)
    }

    console.log(names)
    alert("Adicionado")


    if(names.length == 10){

      document.getElementById("contador").innerHTML = "Verifique a tabela abaixo"

     
      var table = document.getElementsByTagName("table")[0];
      var tbody = table.getElementsByTagName("tbody")[0];

      var invertida = document.getElementById("invertida")
      invertida.innerHTML = "<th>Ordem Invertida</th>"

      var vogais = document.getElementById("vogais")
      vogais.innerHTML = "<th>Número de Vogais</th>"

      var aleatoria = document.getElementById("aleatoria")
      aleatoria.innerHTML = "<th>Ordem Aleatória</th>"
  
      tbody.innerHTML = ""
    
    for (var i = 0; i < names.length; i++){
         tbody.innerHTML += "<tr><td>"+names[i].nome+"</td><td>"+names[i].numeroVogais+"</td><td>"+aleatory[i]+"</td></tr>"
    }



  }
}