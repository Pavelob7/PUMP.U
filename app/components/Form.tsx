// components/Form.tsx
"use client";  // Указываем, что компонент является клиентским


import React, { ReactNode } from 'react';

type FormProps = {
    children: ReactNode;
};

const Form: React.FC<FormProps> = ({ children }) => {
    return (
        <form className="form">
            {children}
        </form>
    );
};

export default Form;
