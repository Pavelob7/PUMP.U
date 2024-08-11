//app/page/page.tsx
"use client";

import React, { useState } from 'react';
import styles from '../../public/styles/Form.module.scss';
import Button from '../components/buttons/Button';
import InputField from "../components/InputField";


const Authorization: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className="flex-column">
                    <label>Email </label></div>
                <div className="inputForm">
                    <InputField
                        type="email"
                        placeholder="Введите email"
                        value={email}
                        onChange={setEmail}
                    />
                </div>

                <div className="flex-column">
                    <label>Password </label></div>
                <div className="inputForm">
                    <InputField
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={setPassword}
                    />
                </div>

                <div className={styles.navigationButtons}>
                    <Button>Войти</Button>
                </div>
            </form>
        </div>
    );
};

export default Authorization;
