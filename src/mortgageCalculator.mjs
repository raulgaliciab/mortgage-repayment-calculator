export function calculateMortgage({ amount, term, interest_rate, mortgage_type }) {
  const monthlyRate = (interest_rate / 100) / 12;
  const totalNumberPayments = term * 12;

  return mortgage_type === 'repayment' ? calculateRepayment() : calculateInterestOnly();

  function calculateRepayment() {
    const repaymentMonthly = amount * (monthlyRate * ((1 + monthlyRate) ** totalNumberPayments) / ((1 + monthlyRate) ** totalNumberPayments - 1));
    const repaymentTotal = repaymentMonthly * totalNumberPayments;
    console.log(repaymentMonthly, repaymentTotal);
    return {
      monthlyPayment: repaymentMonthly,
      totalPayment: repaymentTotal
    };
  }

  function calculateInterestOnly() {
    const interestOnlyMonthly = amount * monthlyRate;
    const interestOnlyTotal = interestOnlyMonthly * totalNumberPayments;
    console.log(interestOnlyMonthly, interestOnlyTotal);
    return {
      monthlyPayment: interestOnlyMonthly,
      totalPayment: interestOnlyTotal
    };
  }
}