// components/MultiFormStep2.tsx
import React from 'react';

interface StepProps {
    formData: { username: string; email: string; password: string };
    setFormData: (data: { username: string; email: string; password: string }) => void;
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
                Электронная почта:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <button onClick={prevStep}>Назад</button>
            <button onClick={nextStep}>Далее</button>
        </div>
    );
};

export default MultiFormStep2;
