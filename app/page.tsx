// app/page.tsx
import React from 'react';
import Link from 'next/link';
import Button from './components/Button';

const Home: React.FC = () => {
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div className="home">
            <h2>Главная страница</h2>
            <Button onClick={handleClick}>Нажми меня</Button>
            <Link href="/register">Перейти к регистрации</Link>
        </div>
    );
};

export default Home;
