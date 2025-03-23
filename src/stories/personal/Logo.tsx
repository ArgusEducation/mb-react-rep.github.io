import React from 'react';
import s from './logo.module.sass';

interface LogoProps {
    /**
     * Path to the logo image
     */
    src?: string;
    /**
     * Text to put on background
     */
    text?: string;
}

/**
 * Primary UI component for user interaction
 */
export function Logo({src, text}: LogoProps) {
    const isValidSource = typeof src === 'string' && src.trim() !== '';

    return (
        <div className={s.logo}>
            {isValidSource ? (<img src={src}></img>) : (<div>{text}</div>)}
        </div>
    );
}
