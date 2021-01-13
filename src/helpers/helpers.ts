export const convertMoney = (money: number) => {
  const converter = money
    .toLocaleString('pt-Br', { style: 'currency', currency: 'USD' })
    .split('US')[1];

  return converter;
};
