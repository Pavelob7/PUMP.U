// components/MultiFormStep1.tsx
import React from 'react';

interface StepProps {
    formData: { username: string; email: string; password: string };
    setFormData: (data: { username: string; email: string; password: string }) => void;
    nextStep: () => void;
}

const MultiFormStep1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Step 1</h2>
            <label>
                Имя пользователя:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <button onClick={nextStep}>Далее</button>
        </div>
    );
};

export default MultiFormStep1;
