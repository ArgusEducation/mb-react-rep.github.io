import React from 'react';
import s from './header.module.sass';
import {Logo} from "./Logo";

interface HeaderProps {
    /**
     * Logo component
     */
    logo: Logo; // Если компонент неизвестен, то можно React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export function Header({logo}: HeaderProps) {
    return (
        <div className={s.header}>
            {logo}
        </div>
    );
}
