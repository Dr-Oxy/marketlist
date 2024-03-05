export const formatMoney = money => {
  const formatted = new Intl.NumberFormat().format(money);

  return formatted;
};
