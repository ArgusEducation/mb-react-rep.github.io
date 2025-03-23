import React from 'react';
import s from './operationdisplay.module.sass';

interface FullOperationDisplayProps {
    /**
     * Accounting operation amount
     */
    amount: number;
    /**
     * Accounting category
     */
    category: string;
    /**
     * Custom operation title
     */
    title?: string;
    /**
     * Custom operation description
     */
    description?: string;
    /**
     * Operation date
     */
    date: Date;
}

/**
 * Primary UI component for user interaction
 */
export function FullOperationDisplay({amount, category, title, description, date}: FullOperationDisplayProps) {
    return (
        <div className={s.full}>
            <div>Сумма: {amount}</div>
            <div>Категория: {category}</div>
            <div>Название: {title}</div>
            <div>Описание: {description}</div>
            <div>Дата: {date.toLocaleDateString()}</div>
            <button disabled>Редактировать</button> {/* Временно неактивная кнопка */}
        </div>
    );
}