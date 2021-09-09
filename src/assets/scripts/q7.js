var monthConsole = "";
function nameMonth(month) {
  let monthFull = "";

  if (month == "01") {
    monthConsole = "Janeiro";
    return monthFull = `<span style="color:red">Janeiro</span>`;
  } else if (month == "02") {
    monthConsole = "Fevereiro";
    return monthFull = `<span style="color:blue">Fevereiro</span>`;
  } else if (month == "03") {
    monthConsole = "Março";
    return monthFull = `<span style="color:green">Março</span>`;
  } else if (month == "04") {
    monthConsole = "Abril";
    return monthFull = `<span style="color:palevioletred">Abril</span>`;
  } else if (month == "05") {
    monthConsole = "Maio";
    return monthFull = `<span style="color:orange">Maio</span>`;
  } else if (month == "06") {
    monthConsole = "Junho";
    return monthFull = `<span style="color:gray">Junho</span>`;
  } else if (month == "07") {
    monthConsole = "Julho";
    return monthFull = `<span style="color:purple">Julho</span>`;
  } else if (month == "08") {
    monthConsole = "Agosto";
    return monthFull = `<span style="color:brown">Agosto</span>`;
  } else if (month == "09") {
    monthConsole = "Setembro";
    return monthFull = `<span style="color:pink">Setembro</span>`;
  } else if (month == "10") {
    monthConsole = "Outubro";
    return monthFull = `<span style="color:violet">Outubro<span>`;
  } else if (month == "11") {
    monthConsole = "Novembro";
    return monthFull = `<span style="color:coral">Novembro</span>`;
  } else if (month == "12") {
    monthConsole = "Dezembro";
    return monthFull = `<span style="color:steelblue">Dezembro</span>`;
  }
}

function mostraData() {
  let date = document.querySelector(".date");
  let dates = document.querySelectorAll(".dates");
  let data = String(date.value);
  let dateNumbers = data.split("/");
  let day = dateNumbers[0];
  let month = dateNumbers[1];
  let year = dateNumbers[2];
  const monthName = nameMonth(month);

  if (isNaN(Number(day)) || isNaN(Number(month)) || isNaN(Number(year))) {
    alert("Data inválida!");
  } else {
    if (day[0].includes("0") || day[0] !== "0") {
      dates[0].innerHTML = `Dia: ${day}`;
      console.log(`Dia: ${day}`);
    } else {
      dates[0].innerHTML = `Dia: 0${day}`;
      console.log(`Dia: 0${day}`);
    }

    if (month[0].includes("0") || month[0] !== "0") {
      dates[1].innerHTML = `Mês: ${monthName}`;
      console.log(`Mês: ${monthConsole}`);
    } else {
      dates[1].innerHTML = `Mês: 0${monthName}`;
      console.log(`Mês: 0${monthConsole}`);
    }

    if (year.length === 4) {
      dates[2].innerHTML = `Ano: ${year}`;
      console.log(`Ano: ${year}`);
    } else {
      alert("Ano inválido inválida");
    }
  }
}