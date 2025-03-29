/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

type Category = {
    id: string;
    name: string;
    photo?: string;
};

type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
};

type Operation = Cost | Profit;

type Cost = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Cost';
};

type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit';
};

const generateRandomString = (length: number): string => {
    // Просто потому что id: string
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const createRandomCategory = (): Category => {
    const id = generateRandomString(10);
    return {
        id:id,
        name: `Category ${id}`,
        photo: Math.random() > 0.5 ? `https://example.com/photo${id}.jpg` : undefined,
    };
};

export const createRandomProduct = (createdAt: string): Product => {
    const id = generateRandomString(10);
    return {
        id: id,
        name: `Product ${id}`,
        photo: `https://example.com/photo${id}.jpg`,
        desc: Math.random() > 0.5 ? `Description for product ${id}` : undefined,
        createdAt,
        oldPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 1000) : undefined,
        price: Math.floor(Math.random() * 1000),
        category: createRandomCategory(),
    };
};

export const createRandomOperation = (createdAt: string): Operation => {
    const isCostOperationType = Math.random() > 0.5; // случайно выбираем тип операции
    const id = generateRandomString(10);
    const baseOperation = {
        id: id,
        name: `Operation ${id}`,
        desc: Math.random() > 0.5 ? `Description for operation ${id}` : undefined,
        createdAt,
        amount: Math.floor(Math.random() * 1000),
        category: createRandomCategory(),
    };

    if (isCostOperationType) {
        return {
            ...baseOperation,
            type: 'Cost',
        } as Cost;
    } else {
        return {
            ...baseOperation,
            type: 'Profit',
        } as Profit;
    }
};