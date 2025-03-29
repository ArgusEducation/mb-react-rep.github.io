/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
//export const removePlus = (string) => string.replace(/^\+/, '');
export const removePlus = (string: string): string => string.replace(/^\+/, '');

//export const addPlus = (string) => `+${string}`;
export const addPlus = (string: string): string => `+${string}`;

//export const removeFirstZeros = (value) => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');
export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

//export const getBeautifulNumber = (value, separator = ' ') =>
export const getBeautifulNumber = (value: string, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

//export const round = (value, accuracy = 2) => {
export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

// Это регулярка - не надо трогать
const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

//export const getTransformFromCss = (transformCssString) => {
export const getTransformFromCss = (transformCssString: string) : {x: number; y: number} => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

//export const getColorContrastValue = ([red, green, blue]) =>
export const getColorContrastValue = ([red, green, blue]: number[]): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

//export const getContrastType = (contrastValue) => (contrastValue > 125 ? 'black' : 'white');
export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

//export const checkColor = (color) => {
export const checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

//export const hex2rgb = (color) => {
export const hex2rgb = (color: string): number[] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

//export const getNumberedArray = (arr) => arr.map((value, number) => ({ value, number }));
export const getNumberedArray = (arr: string[]): { number: number; value: string }[] => arr.map((value, number) => ({ value, number }));

//export const toStringArray = (arr) => arr.map(({ value, number }) => `${value}_${number}`);
export const toStringArray = (arr: { value: string; number: number }[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);

// export const transformCustomers = (customers) => {
//   return customers.reduce((acc, customer) => {
//     acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
//     return acc;
//   }, {});
// };

// Определяем тип для клиента
interface ICustomer {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
}

// Определяем тип для возвращаемого значения внутри массива
interface ITransformedCustomer {
  name: string;
  age: number;
  isSubscribed: boolean;
}

// Определяем тип для упакованного массива
interface ITransformedCustomerArray {
  [id: string] : ITransformedCustomer;
}

// вариант с упаковкой в объекты интерфейсов (можно вернуть значение как {[id: string] : ITransformedCustomer})
export const transformCustomers = (customers: ICustomer[]) : ITransformedCustomerArray => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as ITransformedCustomerArray);
};

// вариант с анонимными классами
export const transformCustomers2 = (customers: { id: string; name: string; age: number;isSubscribed: boolean;}[]): { [id: string]: { name: string; age: number; isSubscribed: boolean } } => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as { [id: string]: { name: string; age: number; isSubscribed: boolean } });
};

// Перенес функцию из 1_base.test.js, т.к. почему-то не работает import
describe('all', () => {
  it('transformCustomers', () => {
    const customers = [
      { id: 1, name: 'John', age: 25, isSubscribed: true },
      { id: 2, name: 'Mary', age: 40, isSubscribed: false },
      { id: 3, name: 'Bob', age: 32, isSubscribed: true },
      { id: 4, name: 'Alice', age: 22, isSubscribed: true },
      { id: 5, name: 'David', age: 48, isSubscribed: false },
    ];

    expect(transformCustomers(customers)).toEqual({
      1: { name: 'John', age: 25, isSubscribed: true },
      2: { name: 'Mary', age: 40, isSubscribed: false },
      3: { name: 'Bob', age: 32, isSubscribed: true },
      4: { name: 'Alice', age: 22, isSubscribed: true },
      5: { name: 'David', age: 48, isSubscribed: false },
    });
  });
});
