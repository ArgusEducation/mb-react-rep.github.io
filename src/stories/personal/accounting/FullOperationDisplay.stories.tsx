import type { Meta } from '@storybook/react';
import { FullOperationDisplay } from "./FullOperationDisplay";

const meta: Meta<typeof FullOperationDisplay> = {
    title: 'Example/FullOperationDisplay',
    component: FullOperationDisplay,
    tags: ['autodocs']
};

export default meta;

export const Default = {
    args: {
        amount: 12345,
        category: 'Категория операции',
        title: 'Именование категории операции',
        description: 'Описание операции',
        date: new Date('2023-10-01')
    }
};

const data = [
    {
        amount: 1500,
        category: 'Расходы',
        title: 'Покупка техники',
        description: 'Куплен ноутбук',
        date: new Date('2023-10-01'),
    },
    {
        amount: 300,
        category: 'Доходы',
        title: 'Зарплата',
        description: 'Оклад за октябрь',
        date: new Date('2023-10-10'),
    },
    {
        amount: 120,
        category: 'Доходы',
        date: new Date('2023-10-15'),
    },
];

export function MultipleInstance() {
    return (
        <div>
            {data.map((item, index) => (
                <FullOperationDisplay
                    key={index}
                    {...item}
                />
            ))}
        </div>
    );
}