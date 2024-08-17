import React, { useState, useEffect } from 'react';
import styles from '../../../public/styles/Form.module.scss';

export interface FormData2 {
    goal: string[];
    mainGoal: string;
    sleepQuality: number;
    stressLevel: number;
    painPoints: string[];
    healthCheckFrequency: string[];
    celebrationMethods: string[];
    diet: string;
    customDiet: string;
    withCoach: string;
}

const initialFormData: FormData2 = {
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
};

interface StepProps {
    formData: FormData2;
    setFormData: React.Dispatch<React.SetStateAction<FormData2>>;
    nextStep: () => void;
    prevStep: () => void;
}

const MultiFormStep2: React.FC<StepProps> = ({ formData, setFormData, nextStep, prevStep }) => {
    const [subStep, setSubStep] = useState(1);
    const [isNextDisabled, setIsNextDisabled] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMultiSelectChange = (option: string, name: keyof FormData2) => {
        const selectedOptions = formData[name] as string[] || [];
        if (selectedOptions.includes(option)) {
            setFormData({ ...formData, [name]: selectedOptions.filter((item: string) => item !== option) });
        } else {
            setFormData({ ...formData, [name]: [...selectedOptions, option] });
        }
    };

    const handleSingleSelectChange = (option: string, name: keyof FormData2) => {
        setFormData({ ...formData, [name]: option });
    };

    const handleNextSubStep = () => {
        setSubStep(subStep + 1);
    };

    const handlePrevSubStep = () => {
        setSubStep(subStep - 1);
    };

    useEffect(() => {
        setIsNextDisabled(!checkIfSelectionMade());
    }, [formData, subStep]);

    const checkIfSelectionMade = () => {
        switch (subStep) {
            case 1:
                return Array.isArray(formData.goal) && formData.goal.length > 0;
            case 2:
                return typeof formData.mainGoal === 'string' && formData.mainGoal !== '';
            case 3:
                return formData.sleepQuality !== null;
            case 4:
                return formData.stressLevel !== null;
            case 5:
                return Array.isArray(formData.painPoints) && formData.painPoints.length > 0;
            case 6:
                return Array.isArray(formData.healthCheckFrequency) && formData.healthCheckFrequency.length > 0;
            case 7:
                return Array.isArray(formData.celebrationMethods) && formData.celebrationMethods.length > 0;
            case 8:
                if (formData.diet === 'Свой вариант') {
                    return (formData.customDiet || '').trim() !== '';
                }
                return formData.diet === 'Да' || formData.diet === 'Нет' || formData.diet === 'Свой вариант';
            case 9:
                return typeof formData.withCoach === 'string' && formData.withCoach !== '';
            default:
                return true;
        }
    };

    const handleRangeChange = (name: keyof FormData2, value: number) => {
        setFormData({ ...formData, [name]: value });
    };


    return (
        <div className={styles.container}>
            {subStep === 1 && (
                <>
                <div className={styles.backBlock}>
                    <button className={styles.backButton} onClick={prevStep}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_27_837)">
                                <path
                                    d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                    fill="#FFB45B"/>
                            </g>
                        </svg>
                    </button>
                </div>
                    <h2>Цель</h2>
                    <p>Что для вас сейчас важнее всего?</p>
                    <div className={styles.multiSelectContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.goal && formData.goal.includes('Чувствовать себя уверенно') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Чувствовать себя уверенно', 'goal')}
                        >
                            Чувствовать себя уверенно
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goal && formData.goal.includes('Снять стресс') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Снять стресс', 'goal')}
                        >
                            Снять стресс
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goal && formData.goal.includes('Улучшить здоровье') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Улучшить здоровье', 'goal')}
                        >
                            Улучшить здоровье
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goal && formData.goal.includes('Зарядиться энергией') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Зарядиться энергией', 'goal')}
                        >
                            Зарядиться энергией
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goal && formData.goal.includes('Набрать форму') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Набрать форму', 'goal')}
                        >
                            Набрать форму
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 2 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>Цель</h2>
                    <p>Какая у вас главная цель?</p>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.mainGoal && formData.mainGoal.includes('Сбросить вес') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('Сбросить вес', 'mainGoal')}
                        >
                            Сбросить вес
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.mainGoal && formData.mainGoal.includes('Нарастить мышечную массу') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('Нарастить мышечную массу', 'mainGoal')}
                        >
                            Нарастить мышечную массу
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.mainGoal && formData.mainGoal.includes('Быть в форме') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('Быть в форме', 'mainGoal')}
                        >
                            Быть в форме
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 3 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>Качество сна</h2>
                    <p>Оцените качество вашего сна</p>
                    <input
                        type="range"
                        name="sleepQuality"
                        min="0"
                        max="4"
                        step="1"
                        value={formData.sleepQuality}
                        onChange={(e) => handleRangeChange('sleepQuality', parseInt(e.target.value))}
                        className={styles.rangeSlider}
                    />
                    <div className={styles.sliderLabels}>
                        <span>Очень плохо</span>
                        <span>Плохо</span>
                        <span>Средне</span>
                        <span>Хорошо</span>
                        <span>Отлично</span>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 4 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>Уровень стресса</h2>
                    <p>Оцените ваш уровень стресса</p>
                    <input
                        type="range"
                        name="stressLevel"
                        min="0"
                        max="4"
                        step="1"
                        value={formData.stressLevel}
                        onChange={(e) => handleRangeChange('stressLevel', parseInt(e.target.value))}
                        className={styles.rangeSlider}
                    />
                    <div className={styles.sliderLabels}>
                        <span>Очень низкий</span>
                        <span>Низкий</span>
                        <span>Средний</span>
                        <span>Высокий</span>
                        <span>Очень высокий</span>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 5 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>Болевые точки</h2>
                    <p>Где у вас есть боли?</p>
                    <div className={styles.multiSelectContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.painPoints?.includes('Голова') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Голова', 'painPoints')}
                        >
                            Голова
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.painPoints?.includes('Шея') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Шея', 'painPoints')}
                        >
                            Шея
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.painPoints?.includes('Спина') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Спина', 'painPoints')}
                        >
                            Спина
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.painPoints?.includes('Руки') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Руки', 'painPoints')}
                        >
                            Руки
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 6 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>Частота посещения врачей</h2>
                    <p>Как часто вы ходите по врачам?</p>
                    <div className={styles.multiSelectContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.healthCheckFrequency?.includes('Проверяю без причины (редко)') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Проверяю без причины (редко)', 'healthCheckFrequency')}
                        >
                            Проверяю без причины (редко)
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.healthCheckFrequency?.includes('Сдаю анализы регулярно') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Сдаю анализы регулярно', 'healthCheckFrequency')}
                        >
                            Сдаю анализы регулярно
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.healthCheckFrequency?.includes('Хожу по врачам') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Хожу по врачам', 'healthCheckFrequency')}
                        >
                            Хожу по врачам
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.healthCheckFrequency?.includes('Не проверяюсь') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Не проверяюсь', 'healthCheckFrequency')}
                        >
                            Не проверяюсь
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 7 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>Отмечание достижения цели</h2>
                    <p>Как вы будете отмечать достижение своей цели?</p>
                    <div className={styles.multiSelectContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.celebrationMethods?.includes('Куплю новую одежду') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Куплю новую одежду', 'celebrationMethods')}
                        >
                            Куплю новую одежду
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.celebrationMethods?.includes('Поеду в путешествие') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Поеду в путешествие', 'celebrationMethods')}
                        >
                            Поеду в путешествие
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.celebrationMethods?.includes('Поделюсь в соц. сетях') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Поделюсь в соц. сетях', 'celebrationMethods')}
                        >
                            Поделюсь в соц. сетях
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.celebrationMethods?.includes('Посещу концерт') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Посещу концерт', 'celebrationMethods')}
                        >
                            Посещу концерт
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.celebrationMethods?.includes('Другое') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Другое', 'celebrationMethods')}
                        >
                            Другое
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 8 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>Следование диете</h2>
                    <p>Следуете ли вы какой-то диете?</p>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.diet && formData.diet.includes('Да') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('Да', 'diet')}
                        >
                            Да
                        </button>


                        <button
                            className={`${styles.optionButton} ${formData.diet && formData.diet.includes('Нет') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('Нет', 'diet')}
                        >
                            Нет
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.diet && formData.diet.includes('Свой вариант') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('Свой вариант', 'diet')}
                        >
                            Свой вариант
                        </button>
                    </div>
                    <textarea
                        name="customDiet"
                        placeholder="Опишите вашу диету"
                        value={formData.customDiet}
                        onChange={handleChange}
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 9 && (
                <>
                    <div className={styles.backBlock}>
                        <button className={styles.backButton} onClick={handlePrevSubStep}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_27_837)">
                                    <path
                                        d="M5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5L3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19L5 5ZM12.703 16.95C12.796 16.8571 12.8697 16.7468 12.9201 16.6254C12.9704 16.504 12.9963 16.3739 12.9963 16.2425C12.9963 16.1111 12.9704 15.981 12.9201 15.8596C12.8697 15.7382 12.796 15.6279 12.703 15.535L10.167 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11L10.167 11L12.703 8.464C12.8905 8.27636 12.9958 8.02192 12.9957 7.75665C12.9956 7.49138 12.8901 7.23701 12.7025 7.0495C12.5149 6.86199 12.2604 6.7567 11.9951 6.7568C11.7299 6.75689 11.4755 6.86236 11.288 7.05L7.046 11.293C6.85853 11.4805 6.75321 11.7348 6.75321 12C6.75321 12.2652 6.85853 12.5195 7.046 12.707L11.288 16.95C11.3809 17.043 11.4912 17.1167 11.6126 17.1671C11.734 17.2174 11.8641 17.2433 11.9955 17.2433C12.1269 17.2433 12.257 17.2174 12.3784 17.1671C12.4998 17.1167 12.6101 17.043 12.703 16.95Z"
                                        fill="#FFB45B"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <h2>С наставником или самостоятельно</h2>
                    <p>Вы хотите двигаться самостоятельно или с помощью наставника?</p>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.withCoach && formData.withCoach.includes('С наставником') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('С наставником', 'withCoach')}
                        >
                            С наставником
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.withCoach && formData.withCoach.includes('Самостоятельно') ? styles.active : ''}`}
                            onClick={() => handleSingleSelectChange('Самостоятельно', 'withCoach')}
                        >
                            Самостоятельно
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={nextStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MultiFormStep2;
