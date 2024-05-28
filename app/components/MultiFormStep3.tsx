// components/MultiFormStep3.tsx
import React from 'react';

interface StepProps {
    formData: { username: string; email: string; password: string };
    setFormData: (data: { username: string; email: string; password: string }) => void;
    prevStep: () => void;
    handleSubmit: () => void;
}

const MultiFormStep3: React.FC<StepProps> = ({ formData, setFormData, prevStep, handleSubmit }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Step 3</h2>
            <label>
                Пароль:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button onClick={prevStep}>Назад</button>
            <button onClick={handleSubmit}>Завершить</button>
        </div>
    );
};

export default MultiFormStep3;
