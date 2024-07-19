import React from 'react';

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
    setFormData: React.Dispatch<React.SetStateAction<{
        username: string;
        email: string;
        password: string;
        name: string;
        birthdate: string;
        phone: string;
        gender: string;
    }>>;
    nextStep: () => void;
    prevStep: () => void;
}

const MultiFormStep2: React.FC<StepProps> = ({ formData, setFormData, nextStep, prevStep }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Step 2</h2>
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
            <button onClick={prevStep}>Назад</button>
            <button onClick={nextStep}>Далее</button>
        </div>
    );
};

export default MultiFormStep2;
