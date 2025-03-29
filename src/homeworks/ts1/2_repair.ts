/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
// export const getFakeApi = async (): void => {
//     const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
//     console.log(result);
// };
// Делаю не возврат any, а возврат string, ибо json
export const getFakeApi = async (): Promise<string> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
// export class SomeClass {
//     constructor() {
//         this.set = new Set([1]);
//         this.channel = new BroadcastChannel('test-broadcast-channel');
//     }
// }
export class SomeClass {
    set: Set<number>;
    channel: BroadcastChannel;

  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

// // Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
// const getDataAmount = (data: Data): number => {
//     switch (data.type) {
//         case 'Money':
//             return data.value.amount;
//
//         default: {
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//             const unhandled: never = data; // здесь, возможно, нужно использовать нечто другое. :never должен остаться
//             throw new Error('unknown type: ${data.type}');
//         }
//     }
// };

// Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
const getDataAmount = (data: Data): number => {
  const { type, value } = data;

  // Я или использую case 'Percent', или проверяю в default, что тип точно не является Percent
  switch (type) {
    case 'Money':
      return (value as Money).amount;
    // case 'Percent':
    //   return (value as Percent).percent;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      if (type !== 'Percent') {
          const unhandled: never = type; // здесь, возможно, нужно использовать нечто другое. :never должен остаться
          throw new Error(`unknown type: ${type}`);
      }
      // обработку Percent не делаем вовсе
    }
  }
};
