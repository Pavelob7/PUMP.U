// app/register/page.tsx
import React from 'react';
import Form from '../components/Form';

const Register: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        // Ваша логика обработки формы
    };

    return (
        <div>
            <h2>Главная страница</h2>
            <Form onSubmit={handleSubmit}>
                {/* Ваши поля формы здесь */}
                <button type="submit">Отправить</button>
            </Form>
        </div>
    );
};

export default Register;
