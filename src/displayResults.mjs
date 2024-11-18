export function displayResults({monthlyPayment, totalPayment}) {

  // QuerySelector para mostrar los datos

const resultsMonthlyHTML = document.querySelector('#results-data__monthly');
const resultsTotalHTML = document.querySelector('#results-data__total');

// QuerySelector para el display

const resultsEmptyDisplay = document.querySelector('#results__empty');
const resultsFilledDisplay = document.querySelector('#results__filled');

const resultsMonthlyStyled = parseFloat(monthlyPayment.toFixed(2)).toLocaleString("en-US");
const resultsTotalStyled = parseFloat(totalPayment.toFixed(2)).toLocaleString("en-US");

resultsMonthlyHTML.innerHTML = `£${resultsMonthlyStyled}`;
resultsTotalHTML.innerHTML = `£${resultsTotalStyled}`;

// Cambio de display
resultsEmptyDisplay.style.display = "none";
resultsFilledDisplay.style.display = "flex";
}