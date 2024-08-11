// app/register/page.tsx
"use client";

import React from 'react';
import MultiStepForm from '../components/MultiStepForm/MultiStepForm';

const Register: React.FC = () => {
    return (
        <div>
            <img src="/img/Logo.svg" alt="logo"/>
            <MultiStepForm/>
        </div>
    );
};

export default Register;
