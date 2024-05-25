// components/SkipButton.tsx
"use client"; // Указываем, что компонент является клиентским

import React from 'react';
import styles from '../../../public/styles/buttons/Eror404Button.module.scss'; // Скорректированный путь

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

const SkipButton: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {children}
        </button>
    );
};

export default SkipButton;
