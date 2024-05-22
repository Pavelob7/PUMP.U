// app/register/page.tsx
"use client"; // Указываем, что компонент является клиентским

import React from 'react';
import Form from '../components/Form';
import Button from '../components/Button';

const Register: React.FC = () => {
    const handleClick = () => {
        console.log('Button clicked');
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
                <Button onClick={handleClick}>Зарегистрироваться</Button>
            </Form>
        </div>
    );
};

export default Register;
