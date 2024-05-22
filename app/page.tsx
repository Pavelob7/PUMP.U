// app/page.tsx
"use client"; // Указываем, что компонент является клиентским

import React from 'react';
import Link from 'next/link';
import Form from './components/Form';
import SkipButton from './components/SkipButton';

const Home: React.FC = () => {
    const handleClick = () => {
        console.log('SkipButton clicked');
        // Ваша логика обработки клика на кнопке
    };

    return (
        <div>
            <h2>Главная страница</h2>
            <Form>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <SkipButton onClick={handleClick}>Отправить</SkipButton>
            </Form>
            <Link href="/register">Перейти к регистрации</Link>
        </div>
    );
};

export default Home;
