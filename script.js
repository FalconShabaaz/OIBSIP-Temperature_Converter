console.log("HELLO ,This project is created by 'Mohammed shabaaz❤️'");

const input = document.getElementById("tempInput");
const fromDropdown = document.getElementById("temperatureTypefrom");
const toDropdown = document.getElementById("temperatureTypeto");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");

convertBtn.addEventListener("click", convertTemperature);
clearBtn.addEventListener("click", clearFields);


function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit + 459.67) * 5 / 9;
}

function kelvinToFahrenheit(kelvin) {
  return kelvin * 9 / 5 - 459.67;
}


function convertTemperature() {
  const inputVal = Number(input.value);
  if(isNaN(inputVal)){
    console.log("error");
    alert("Please Enter a Valid Value.")
  }
  const fromVal = fromDropdown.value;
  const toVal = toDropdown.value;
 
  let resultVal;
  if (fromVal === "celsius" && toVal === "fahrenheit") {
    resultVal = celsiusToFahrenheit(inputVal);
    result.value = resultVal.toFixed(2) +' '+ 'F';
  } 
  else if (fromVal === "fahrenheit" && toVal === "celsius") {
    resultVal = fahrenheitToCelsius(inputVal);
    result.value = resultVal.toFixed(2) +' '+ '℃';
  } 
  else if (fromVal === "kelvin" && toVal === "celsius") {
    resultVal = kelvinToCelsius(inputVal);
    result.value = resultVal.toFixed(2) +' '+ '℃';
  } 
  else if (fromVal === "celsius" && toVal === "kelvin") {
    resultVal = celsiusToKelvin(inputVal);
    result.value = resultVal.toFixed(2) +' '+ 'K';
  } 
  else if (fromVal === "fahrenheit" && toVal === "kelvin") {
    resultVal = fahrenheitToKelvin(inputVal);
    result.value = resultVal.toFixed(2) +' '+ 'K';
  } 
  else if (fromVal === "kelvin" && toVal === "fahrenheit") {
    resultVal = kelvinToFahrenheit(inputVal);
    result.value = resultVal.toFixed(2) +' '+ 'F';
  } 
  else {
    resultVal = inputVal;
    result.value = resultVal.toFixed(2);
  }

}

function clearFields(){
    input.value = "";
    result.value = "";
}

