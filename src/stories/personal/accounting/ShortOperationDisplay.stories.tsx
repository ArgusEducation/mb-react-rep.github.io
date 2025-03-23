import type { Meta } from '@storybook/react';
import { ShortOperationDisplay } from "./ShortOperationDisplay";

const meta: Meta<typeof ShortOperationDisplay> = {
    title: 'Example/ShortOperationDisplay',
    component: ShortOperationDisplay,
    tags: ['autodocs']
};

export default meta;

export const Default = {
    args: {
        amount: 123,
        category: 'Категория 1',
        title: 'Именование категории',
        description: 'Куча текста, которая обрежется из-за ограничения на количество символов'
    }
};

export const MultipleInstance = () => (
    <>
        <ShortOperationDisplay
            amount={456}
            category='Категория 1'
            title='Заголовок 1'
            description='Куча текста, которая обрежется из-за ограничения на количество символов'
        />
        <ShortOperationDisplay
            amount={789}
            category='Категория 2'
        />
        <ShortOperationDisplay
            amount={678}
            category='Категория 6'
            title='Заголовок 6'
            description='Необрезанный текст'
        />
    </>
);