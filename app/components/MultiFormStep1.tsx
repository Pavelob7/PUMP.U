// components/Step1.tsx
import React from 'react';
import styles from '../../public/styles/Form.module.scss';

interface StepProps {
    formData: {
        username: string;
        email: string;
        password: string;
        name: string;
        birthdate: string;
        phone: string;
        gender: string;
    };
    setFormData: (data: {
        username: string;
        email: string;
        password: string;
        name: string;
        birthdate: string;
        phone: string;
        gender: string;
    }) => void;
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
        <div className={styles['form-step']}>
            <h2>Step 1</h2>
            <label>
                Логин (почта):
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Пароль:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Имя:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Дата рождения:
                <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
            </label>
            <label>
                Телефон:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <label>
                Пол:
                <div>
                    <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleGenderChange} /> Мужчина
                    <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleGenderChange} /> Женщина
                </div>
            </label>
            <button onClick={nextStep}>Далее</button>
        </div>
    );
};

export default Step1;
