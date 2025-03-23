import React from 'react';
import s from './operationdisplay.module.sass';

interface ShortOperationDisplayProps {
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
}

/**
 * Primary UI component for user interaction
 */
export function ShortOperationDisplay({amount, category, title, description}: ShortOperationDisplayProps) {
    let slicedDesc;
    if (description && description.trim() !== '') {
        const ellipsis = '...';
        slicedDesc = description.slice(0, 50);
        if (slicedDesc != description) {
            slicedDesc = slicedDesc + ellipsis;
        }
    }

    return (
        <div className={s.short}>
            <div>Сумма: {amount}</div>
            <div>Категория: {category}</div>
            <div>Название: {title}</div>
            <div>Описание: {slicedDesc}</div> {/* Обрезка описания */}
        </div>
    );
}