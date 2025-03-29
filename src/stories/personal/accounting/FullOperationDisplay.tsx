import React from 'react';
import s from './operationdisplay.module.sass';
import {ShortOperationDisplayProps} from "src/stories/personal/accounting/ShortOperationDisplay";

interface FullOperationDisplayProps extends ShortOperationDisplayProps {
    /**
     * Operation date
     */
    date: Date;
}

/**
 * Primary UI component for user interaction
 */
export function FullOperationDisplay(props: FullOperationDisplayProps) {
    const { amount, category, title, description, date } = props;

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