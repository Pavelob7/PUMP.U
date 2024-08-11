import React, { useState } from 'react';
import Step1 from './MultiFormStep1';
import Step2 from './MultiFormStep2';
import Step3 from './MultiFormStep3';

// Определение типа данных формы
interface FormData {
    username: string;
    email: string;
    password: string;
    name: string;
    birthdate: string;
    phone: string;
    gender: string;
}

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        name: '',
        birthdate: '',
        phone: '',
        gender: ''
    });

    const nextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        // Здесь можно добавить логику для отправки данных формы на сервер
    };

    switch (currentStep) {
        case 1:
            return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />;
        default:
            return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    }
};

export default MultiStepForm;
