// app/register/page.tsx
"use client"; // Указываем, что компонент является клиентским

import React from 'react';
import Form from '../components/Form';
import SkipButton from '../components/buttons/SkipButton';

const Register: React.FC = () => {
    const handleClick = () => {
        console.log('SkipButton clicked');
        // Ваша логика обработки клика на кнопке
    };

    return (
        <div>
            <h2>Страница регистрации</h2>
            <Form>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="email">Электронная почта:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <SkipButton onClick={handleClick}>Зарегистрироваться</SkipButton>
            </Form>
        </div>
    );
};

export default Register;
