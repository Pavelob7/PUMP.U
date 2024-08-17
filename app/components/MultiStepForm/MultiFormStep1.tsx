import React from 'react';
import styles from '../../../public/styles/Form.module.scss';

// Определяем интерфейс для данных формы
export interface FormData1 {
    username: string;
    email: string;
    password: string;
    name: string;
    birthdate: string;
    phone: string;
    gender: string;
}

interface StepProps {
    formData: FormData1;
    setFormData: React.Dispatch<React.SetStateAction<FormData1>>;
    nextStep: () => void;
}

const Step1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, gender: e.target.value });
    };

    return (
        <div className={styles.container}>
            <form>
                <h2>Шаг 1</h2>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                </label>
                <label>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                </label>
                <label>
                    Имя
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                </label>
                <label>
                    Дата рождения
                    <input
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                </label>
                <label>
                    Телефон
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                </label>
                <label>
                    Пол
                    <div className={styles.radioContainer}>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleGenderChange}
                            /> Мужчина
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleGenderChange}
                            /> Женщина
                        </label>
                    </div>
                </label>
                <div className={styles.navigationButtons}>
                    <button type="button" onClick={nextStep}>Далее</button>
                </div>
            </form>
        </div>
    );
};

export default Step1;
