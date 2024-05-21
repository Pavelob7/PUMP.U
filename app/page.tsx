// app/page.tsx

import React from 'react';
import Link from 'next/link';
import Form from './components/Form';
import Button from './components/Button'; // Импортируем компонент кнопки

const Home: React.FC = () => {
    const handleClick = () => {
        console.log('Button clicked');
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
                {/* Передаем функцию handleClick в компонент кнопки */}
                <Button onClick={handleClick} type="submit">Отправить</Button>
            </Form>
            <Link href="/register">Перейти к регистрации</Link>
        </div>
    );
};

export default Home;
