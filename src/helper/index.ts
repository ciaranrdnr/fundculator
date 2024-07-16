export const moneyDot = (num: any | undefined | null) => {
  if (num === null || num === undefined) {
    return '';
  } else if (num === 0) {
    return '0';
  }

  const str = num.toString().replace(/\./g, '').split('.');
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return str.join(',');
};

export const calculateInvestment = (targetAmount: number, estimatedReturn: number, investmentPeriodYears: number, inflationRate: number) => {
  const inflation = inflationRate / 100
  const estimatedRate = estimatedReturn / 100
  const months = investmentPeriodYears * 12;

  const inflationAdjustedTarget = targetAmount * Math.pow(1 + inflation, investmentPeriodYears);

  let returnAdjustedTarget = inflationAdjustedTarget;
  if (investmentPeriodYears > 1) {
    returnAdjustedTarget = inflationAdjustedTarget / Math.pow(1 + estimatedRate, investmentPeriodYears);
  }

  const monthlyInvestment = returnAdjustedTarget / months;

  const totalAmountPayable = monthlyInvestment * months;

  return {
    monthlyInvestment: Math.round(monthlyInvestment),
    totalAmountPayable: Math.round(totalAmountPayable)
  };
}