// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import '../public/styles/globals.scss';

const RootLayout: React.FC = ({children}) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>My Next.js App</title>
        </head>
        <body>
        <header className="mainHeader">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Главная</Link>
                    </li>
                    <li>
                        <Link href="/register">Регистрация</Link>
                    </li>
                </ul>
            </nav>
        </header>

        {children}
        </body>
        </html>
    );
};

export default RootLayout;
