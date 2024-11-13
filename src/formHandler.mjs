import { calculateMortgage } from './mortgageCalculator.mjs';

export function getDataForm(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los datos del formulario
  const formData = new FormData(event.target);
  const mortgageData = {}; // Nuevo objeto vacío para almacenar los datos del form

  // Convertir los datos del form a un Objeto
  formData.forEach((value, key) => {
    const inputField = event.target.elements[key];

    // Si el campo es de tipo "number", convertir el valor a número
    mortgageData[key] = inputField.type === "number" ? parseFloat(value) : value;
  });

  // Llamar a la función que calcula la hipoteca
  calculateMortgage(mortgageData);
}
