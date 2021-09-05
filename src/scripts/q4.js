/*
-------Lista de Exercício --------
Curso: Informática
Disciplina: Programação Web I
Equipe: 7
Nome: Lavínia Leite da Silva
Matrícula: 2019322657
*/

function exibir(){
  var res = document.querySelector(".idades");
  var ida = document.getElementById("idade").value;
  var id = String(ida);
  var lista = id.split(" ");
  var votar = 0;
  var menores = 0;
  var presos = 0;
  var aposentar = 0;
  var prioridade = 0;

  
  for(var x = 0; x<lista.length; x++){
      if (lista[x] < 16){
          menores += 1;
      } if (lista[x] > 16){
          votar += 1;
      } if (lista[x] > 18){
          presos += 1;
      } if (lista[x] > 65){
          aposentar += 1;
      } if (lista[x] > 80){
          prioridade += 1;
      }
  }
  res.innerHTML =`<p style="color:pink">Pessoas com idade menor que 16 anos: ${menores} </p>`;
  res.innerHTML +=`<p style="color:blue">Pessoas que já podem votar (+16 anos): ${votar} </p>`;
  res.innerHTML +=`<p style="color:gray">Pessoas que já podem ser presas (+18 anos): ${presos} </p>`;
  res.innerHTML +=`<p style="color:red"><strong>Pessoas que já podem se aposentar (+65 anos): ${aposentar}</strong></p>`;
  res.innerHTML +=`<p style="color:yellow">Pessoas que possuem alta prioridade em filas (+80 anos): ${prioridade}</p>`;
} 