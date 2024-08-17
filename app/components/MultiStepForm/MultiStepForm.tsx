import React, { useState } from 'react';
import Step1, { FormData1 } from './MultiFormStep1';
import Step2, { FormData2 } from './MultiFormStep2';
import Step3, { FormData3 } from './MultiFormStep3';

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData1, setFormData1] = useState<FormData1>({
        username: '',
        email: '',
        password: '',
        name: '',
        birthdate: '',
        phone: '',
        gender: ''
    });
    const [formData2, setFormData2] = useState<FormData2>({
        goal: [],
        mainGoal: '',
        sleepQuality: 0,
        stressLevel: 0,
        painPoints: [],
        healthCheckFrequency: [],
        celebrationMethods: [],
        diet: '',
        customDiet: '',
        withCoach: ''
    });
    const [formData3, setFormData3] = useState<FormData3>({
        userHeight: 0,
        userWeight: 0,
        userFatPercent: 0,
        userDreamWeight: 0,
        userDreamFatPercent: 0,
        rangeActivity: 0,
        rangePhysicalLevel: 0,
        levelStraightBack: 0,
        hobby: [],
        issues: [],
        workoutType: [],
        healthLimitations: [],
        workoutLevel: '',
        workoutFrequency: ''
    });

    const nextStep = () => setCurrentStep(prevStep => prevStep + 1);
    const prevStep = () => setCurrentStep(prevStep => prevStep - 1);
    const handleSubmit = () => {
        console.log('Form Data 1:', formData1);
        console.log('Form Data 2:', formData2);
        console.log('Form Data 3:', formData3);
    };

    switch (currentStep) {
        case 1:
            return <Step1 formData={formData1} setFormData={setFormData1} nextStep={nextStep} />;
        case 2:
            return <Step2 formData={formData2} setFormData={setFormData2} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <Step3 formData={formData3} setFormData={setFormData3} nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit} />;
        default:
            return <Step1 formData={formData1} setFormData={setFormData1} nextStep={nextStep} />;
    }
};

export default MultiStepForm;
