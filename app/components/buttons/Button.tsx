// components/SkipButton.tsx
"use client";

import React from 'react';
import styles from '../../../public/styles/buttons/Button.module.scss';

type ButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
    icon?: boolean; // Новый пропс для определения наличия иконки
};

const Button: React.FC<ButtonProps> = ({ onClick, children, icon = false }) => {
    const btnClass = icon ? `${styles.btn} ${styles.icon}` : `${styles.btn}`;

    return (
        <button onClick={onClick} className={btnClass}>
            {children}
        </button>
    );
};

export default Button;
