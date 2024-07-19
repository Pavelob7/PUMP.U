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
                Пол:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
            </label>
            <button onClick={prevStep}>Назад</button>
            <button onClick={handleSubmit}>Завершить</button>
        </div>
    );
};

export default MultiFormStep3;
