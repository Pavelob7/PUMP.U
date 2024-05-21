// app/register/page.tsx

import React from 'react';
import Form from '../components/Form';

const Register: React.FC = () => {
    return (
        <div>
            <h2>Страница регистрации</h2>
            <Form>
                {/* Добавим несколько инпутов */}
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Зарегистрироваться</button>
            </Form>
        </div>
    );
};

export default Register;
