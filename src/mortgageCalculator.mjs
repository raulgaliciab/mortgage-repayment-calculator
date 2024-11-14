import { displayResults } from "./displayResults.mjs";

export function calculateMortgage({ amount, term, interest_rate, mortgage_type }) {
  const monthlyRate = (interest_rate / 100) / 12;
  const totalNumberPayments = term * 12;

  return mortgage_type === 'repayment' ? calculateRepayment() : calculateInterestOnly();

  function calculateRepayment() {
    const repaymentMonthly = amount * (monthlyRate * ((1 + monthlyRate) ** totalNumberPayments) / ((1 + monthlyRate) ** totalNumberPayments - 1));
    const repaymentTotal = repaymentMonthly * totalNumberPayments;

    const results = {
      monthlyPayment: repaymentMonthly,
      totalPayment: repaymentTotal
    };

    displayResults(results);
  }

  function calculateInterestOnly() {
    const interestOnlyMonthly = amount * monthlyRate;
    const interestOnlyTotal = interestOnlyMonthly * totalNumberPayments;

    const results = {
      monthlyPayment: interestOnlyMonthly,
      totalPayment: interestOnlyTotal
    };

    displayResults(results);
  }
}