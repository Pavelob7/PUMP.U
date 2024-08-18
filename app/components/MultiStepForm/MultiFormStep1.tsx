import React from 'react';
import styles from '../../../public/styles/Form.module.scss';
import InputField from '../InputField';

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

// Интерфейс для свойств компонента Step1
interface StepProps {
    formData: FormData1;
    setFormData: React.Dispatch<React.SetStateAction<FormData1>>;
    nextStep: () => void;
}

// Компонент Step1
const Step1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {
    // Обработчик изменений для всех инпутов
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Обработчик изменений для выбора пола
    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, gender: e.target.value });
    };

    return (
        <div className={styles.container}>
            <form>
                <label>
                    Email
                    <InputField
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Пароль
                    <InputField
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Имя
                    <InputField
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Дата рождения
                    <InputField
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Телефон
                    <InputField
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Выберите пол
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
