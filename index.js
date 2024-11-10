// Capturar el evento de envío del formulario
  document.getElementById('mortgageForm').addEventListener('submit', getDataForm)

// Función para capturar los datos del form
  function getDataForm(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los datos del formulario
    const formData = new FormData(event.target);
    const mortgageData = {}; // Nuevo objeto vacío para almacenar los datos del form

    // Convertir los datos del form a un Objeto
    formData.forEach((value, key) => {
      const inputField = event.target.elements[key];

      // Si el campo es de tipo "number", convertir el valor a número
      if (inputField.type === "number") {
        mortgageData[key] = parseFloat(value);
      } else {
        mortgageData[key] = value;
      }
    });

    // Llamar a la función que calcula la hipoteca
    calculateMortgage(mortgageData)

  };

  function calculateMortgage({amount, term, interest_rate, mortgage_type}) {

    // Variables para ambas funciones
    const monthlyRate = (interest_rate / 100) / 12;
    const totalNumberPayments = term * 12;

    // Selecciona la función a ejecutar dependiendo del tipo de hipoteca y retorna su valor
    return (mortgage_type === 'repayment') ? calculateRepayment() : calculateInterestOnly();

    function calculateRepayment() {
      // Calculo de la hipoteca completa (monto + intereses)
      const repaymentMonthly = amount * (monthlyRate * ((1 + monthlyRate) ** totalNumberPayments) / ((1 + monthlyRate) ** totalNumberPayments - 1));
      const repaymentTotal = repaymentMonthly * totalNumberPayments;

      console.log(repaymentMonthly, repaymentTotal);
      // Retorna los resultados como objeto
      return {
        monthlyPayment: repaymentMonthly,
        totalPayment: repaymentTotal
      };
    }

    function calculateInterestOnly() {
      // Calculo de solo los intereses (mensual y total)
      const interestOnlyMonthly = amount * monthlyRate;
      const interestOnlyTotal = interestOnlyMonthly * totalNumberPayments;

      console.log(interestOnlyMonthly, interestOnlyTotal);
      // Retorna los resultados como objeto
      return {
        monthlyPayment: interestOnlyMonthly,
        totalPayment: interestOnlyTotal
      }
    }
  }