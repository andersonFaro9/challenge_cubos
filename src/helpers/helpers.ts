const convertMoney = (money: number) => {
  const x = money
    .toLocaleString('pt-Br', { style: 'currency', currency: 'USD' })
    .split('US')[1];

  return x;
};
export default convertMoney;

/*
  Em caso de duas funções num mesmo arquivo Typescript não utilize o "default" no export, px:

  export const convert1 = (money?: number) => {
  const x = money?.toLocaleString('pt-Br', { style: 'currency', currency: 'USD' })
    .split('US')[1];
  return x;
};
  export const convert2 = (money?: number) => {
  const x = money?.toLocaleString('pt-Br', { style: 'currency', currency: 'USD' })
    .split('US')[1];
  return x;
};
  e no import em outro local: import { convert1, convert2 } from
*/
