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
                    <label>Логин</label></div>
                <div className="inputForm">
                    <InputField
                        type="email"
                        placeholder="admin@gmail.com"
                        value={email}
                        onChange={setEmail}
                    />
                </div>

                <div className="flex-column">
                    <label>Пароль</label></div>
                <div className="inputForm">
                    <InputField
                        type="password"
                        value={password}
                        onChange={setPassword}
                    />
                </div>

                <div className={styles.navigationButtons}>
                    <Button>Войти</Button>
                    <Button icon={true}>
                        <span>Вход через Telegram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#00B3FF"/>
                            <g clipPath="url(#clip0_2120_3347)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M24.4809 11.6916C24.6868 11.605 24.9122 11.5751 25.1336 11.6051C25.355 11.6351 25.5643 11.7239 25.7398 11.8622C25.9152 12.0006 26.0504 12.1834 26.1312 12.3917C26.212 12.6 26.2355 12.8262 26.1992 13.0466L24.3092 24.5108C24.1259 25.6166 22.9125 26.2508 21.8984 25.7C21.05 25.2391 19.79 24.5291 18.6567 23.7883C18.09 23.4175 16.3542 22.23 16.5675 21.385C16.7509 20.6625 19.6675 17.9475 21.3342 16.3333C21.9884 15.6991 21.69 15.3333 20.9175 15.9166C18.9992 17.365 15.9192 19.5675 14.9009 20.1875C14.0025 20.7341 13.5342 20.8275 12.9742 20.7341C11.9525 20.5641 11.005 20.3008 10.2317 19.98C9.1867 19.5466 9.23754 18.11 10.2309 17.6916L24.4809 11.6916Z"
                                      fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2120_3347">
                                    <rect width="20" height="20" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                    <Button icon={true}>
                        <span> Вход через Вконтакте</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#1400F7"/>
                            <g clipPath="url(#clip0_2120_3348)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M27.5417 12.9566C27.68 12.5016 27.5417 12.1666 26.8792 12.1666H24.6917C24.135 12.1666 23.8783 12.4558 23.7392 12.775C23.7392 12.775 22.6267 15.4383 21.0508 17.1683C20.5408 17.67 20.3092 17.8291 20.0308 17.8291C19.8917 17.8291 19.6825 17.67 19.6825 17.2141V12.9566C19.6825 12.41 19.5292 12.1666 19.0658 12.1666H15.6258C15.2783 12.1666 15.0692 12.42 15.0692 12.6608C15.0692 13.1783 15.8575 13.2983 15.9383 14.755V17.92C15.9383 18.6141 15.8108 18.74 15.5325 18.74C14.7908 18.74 12.9867 16.0641 11.9158 13.0025C11.7083 12.4066 11.4983 12.1666 10.9392 12.1666H8.75C8.125 12.1666 8 12.4558 8 12.775C8 13.3433 8.74167 16.1666 11.4542 19.9008C13.2625 22.4508 15.8083 23.8333 18.1275 23.8333C19.5183 23.8333 19.69 23.5266 19.69 22.9975V21.07C19.69 20.4558 19.8217 20.3333 20.2625 20.3333C20.5875 20.3333 21.1433 20.4933 22.4417 21.7225C23.925 23.18 24.1692 23.8333 25.0042 23.8333H27.1917C27.8167 23.8333 28.13 23.5266 27.95 22.92C27.7517 22.3166 27.0433 21.4408 26.1042 20.4016C25.5942 19.81 24.8292 19.1725 24.5967 18.8533C24.2725 18.4441 24.365 18.2616 24.5967 17.8975C24.5967 17.8975 27.2633 14.2091 27.5408 12.9566"
                                      fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2120_3348">
                                    <rect width="20" height="20" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Authorization;