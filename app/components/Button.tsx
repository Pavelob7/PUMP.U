// components/Button.tsx

import React from 'react';
import styles from '../../styles/Button.module.scss';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;
