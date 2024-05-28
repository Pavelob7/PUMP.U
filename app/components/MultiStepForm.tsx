// components/MultiStepForm.tsx
import React, { useState } from 'react';
import MultiFormStep1 from './MultiFormStep1';
import MultiFormStep2 from './MultiFormStep2';
import MultiFormStep3 from './MultiFormStep3';

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
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
            return <MultiFormStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <MultiFormStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <MultiFormStep3 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />;
        default:
            return <MultiFormStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    }
};

export default MultiStepForm;
