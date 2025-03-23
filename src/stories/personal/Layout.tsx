import React from 'react';
import s from './layout.module.sass';
import {Header} from "./Header";

interface LayoutProps {
    /**
     * Header component
     */
    header: Header; // Если компонент неизвестен, то можно React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export function Layout({header}: LayoutProps) {
    return (
        <div className={s.layout}>
            {header}
        </div>
    );
}
