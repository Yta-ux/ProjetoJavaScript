var people = []
var limit = 0;

var men = 0;
var woman = 0;

var nameWoman = "";
var heightWoman = 0;

var nameMen = "";
var heightMen = 999;

var obese = "";
var womanObese = 0;
var menObese = 0;

var button = document.querySelector('.submit');
var message = document.querySelectorAll('.valor');
var messages = document.querySelector('.valores');
var tabela = ``;

function quantSex(sex) {
  if (sex === 'M') {
    men += 1;
  } else if (sex === 'F') {
    woman += 1;
  }
}

function infoHeight(sex, height, name) {
  if (sex === 'F') {
    if (height > heightWoman) {
      heightWoman = height;
      nameWoman = name;
    }
  };

  if (sex === 'M') {
    if (heightMen > height) {
      heightMen = height;
      nameMen = name;
    }
  };
}

function imcPerson(weight, height) {
  let imc = weight / (height ** 2);

  return imc.toFixed(2);
}

function ageNow(age) {
  let valuesData = age.split('-');
  let yearBefore = Number(valuesData[0]);
  let monthBefore = Number(valuesData[1]);
  let dayBefore = Number(valuesData[2]);

  let dayNow = new Date().getDate();
  let monthNow = new Date().getMonth() + 1;
  let yearNow = new Date().getFullYear();

  let idade = yearNow - yearBefore;

  if (monthBefore > monthNow) {
    idade -= 1;
    return idade;
  } else {
    if (monthNow === monthBefore) {
      if (dayNow < dayBefore) {
        idade -= 1;
        return idade;
      }
    }
    return idade;
  }
}

function personObese(imc, sex) {
  if (imc >= 30) {
    if (sex === 'F') {
      womanObese += 1;
    } else if (sex === 'M') {
      menObese += 1;
    }
  }

}

function cleanInput() {
  nome = document.querySelector('.nome').value = "";
  altura = document.querySelector('.altura').value = "";
  peso = document.querySelector('.peso').value = "";
  data = document.querySelector('.data').value = "";
  masc = document.querySelector('.masc');
  fem = document.querySelector('.fem');
  masc.checked = false;
  fem.checked = false;
}

function adicionar() {
  if (people.length <= 10) {
    let nome = document.querySelector('.nome').value;
    let altura = document.querySelector('.altura').value;
    let peso = document.querySelector('.peso').value;
    let data = document.querySelector('.data').value;
    let sexo = document.querySelector('input[type="radio"]:checked').value;

    let person = {
      nome: nome,
      altura: altura,
      peso: peso,
      data: data,
      sexo: sexo
    }
    people.push(person);

    quantSex(person.sexo);
    infoHeight(person.sexo, person.altura, person.nome);
    const age = ageNow(person.data);

    const imc = imcPerson(Number(person.peso), Number(person.altura));

    personObese(imc, person.sexo);

    if (womanObese > menObese) {
      obese = `Temos mais mulheres obesas, com uma quantidade de ${womanObese}`
    } else if (menObese > womanObese) {
      obese = `Temos mais homens obesos, com uma quantidade de ${menObese}`
    } else {
      obese = `Temos a mesma quantidade de mulheres e homens obesos, com uma quantidade de ${menObese}`
    }

    tabela = `<tr><td>${person.nome}</td><td>${person.sexo}</td><td>${age}</td><td>${person.peso}</td><td>${person.altura}</td><td>${imc}</td></tr>`;

    document.querySelector('.tabela').innerHTML += tabela;

    cleanInput();
  } else {
    button.setAttribute('disabled', 'true');
    messages.classList.add('hide');
    if (men === 0) {
      message[0].innerHTML = `Não foi cadastrado homens`;
    } else {
      message[0].innerHTML = `Total de Homens: ${men}`;
    }

    if (woman === 0) {
      message[1].innerHTML = `Não foi cadastrado mulheres`;
    } else {
      message[1].innerHTML = `Total de Mulheres: ${woman}`;
    }

    if (heightWoman === 0) {
      message[2].innerHTML = `Não existe mulher mais alta`;
    } else {
      message[2].innerHTML = `A mulher mais alta é ${nameWoman} com altura de ${heightWoman}m`;
    }

    if (heightMen === 999) {
      message[2].innerHTML = `Não existe homem mais baixo`;
    } else {
      message[2].innerHTML = `O homem mais baixo é ${nameMen} com altura de ${heightMen}m`;
    }

    if (womanObese === 0 && menObese === 0) {
      message[3].innerHTML = `Não existe mulher ou homem obeso`;
    } else {
      message[4].innerHTML = obese;
    }
  }
}