import React, { useEffect, useState } from 'react';
import styles from '../../../public/styles/Form.module.scss';

// Определите интерфейс для данных формы
export interface FormData3 {
    userHeight: number;
    userWeight: number;
    userFatPercent: number;
    userDreamWeight: number;
    userDreamFatPercent: number;
    rangeActivity: number;
    rangePhysicalLevel: number;
    levelStraightBack: number;
    hobby: string[];
    issues: string[];
    workoutType: string[];
    healthLimitations: string[];
    workoutLevel: string;
    workoutFrequency: string;
}

interface StepProps {
    formData: FormData3;
    setFormData: React.Dispatch<React.SetStateAction<FormData3>>;
    nextStep: () => void;
    prevStep: () => void;
    handleSubmit: () => void; // Обновите интерфейс, чтобы включить handleSubmit
}

const MultiFormStep3: React.FC<StepProps> = ({ formData, setFormData, nextStep, prevStep, handleSubmit }) => {
    const [subStep, setSubStep] = useState(1);
    const [isNextDisabled, setIsNextDisabled] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMultiSelectChange = (option: string, name: keyof FormData3) => {
        const selectedOptions = (formData[name] as string[]) || [];
        if (selectedOptions.includes(option)) {
            setFormData({ ...formData, [name]: selectedOptions.filter((item: string) => item !== option) });
        } else {
            setFormData({ ...formData, [name]: [...selectedOptions, option] });
        }
    };

    const handleSingleSelectChange = (option: string, name: keyof FormData3) => {
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
                return formData.userHeight > 0;
            case 2:
                return formData.userWeight > 0;
            case 3:
                return formData.userFatPercent > 0;
            case 4:
                return formData.userDreamWeight > 0;
            case 5:
                return formData.userDreamFatPercent > 0;
            case 6:
                return formData.rangeActivity > 0;
            case 7:
                return formData.rangePhysicalLevel > 0;
            case 8:
                return formData.levelStraightBack > 0;
            case 9:
                return Array.isArray(formData.hobby) && formData.hobby.length > 0;
            case 10:
                return Array.isArray(formData.issues) && formData.issues.length > 0;
            case 11:
                return Array.isArray(formData.workoutType) && formData.workoutType.length > 0;
            case 12:
                return Array.isArray(formData.healthLimitations) && formData.healthLimitations.length > 0;
            case 13:
                return formData.workoutLevel !== '';
            case 14:
                return formData.workoutFrequency !== '';
            default:
                return true;
        }
    };

    const handleRangeChange = (name: keyof FormData3, value: number) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={styles.container}>
            {subStep === 1 && (
                <>
                    <h2>Введите ваш рост</h2>
                    <input
                        type="number"
                        name="userHeight"
                        value={formData.userHeight}
                        onChange={handleChange}
                        placeholder="Ваш рост (см)"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 2 && (
                <>
                    <h2>Введите ваш вес</h2>
                    <input
                        type="number"
                        name="userWeight"
                        value={formData.userWeight}
                        onChange={handleChange}
                        placeholder="Ваш вес (кг)"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 3 && (
                <>
                    <h2>Введите процент жира в организме</h2>
                    <input
                        type="number"
                        name="userFatPercent"
                        value={formData.userFatPercent}
                        onChange={handleChange}
                        placeholder="Процент жира (%)"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 4 && (
                <>
                    <h2>Введите ваш желаемый вес</h2>
                    <input
                        type="number"
                        name="userDreamWeight"
                        value={formData.userDreamWeight}
                        onChange={handleChange}
                        placeholder="Желаемый вес (кг)"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 5 && (
                <>
                    <h2>Введите желаемый процент жира в организме</h2>
                    <input
                        type="number"
                        name="userDreamFatPercent"
                        value={formData.userDreamFatPercent}
                        onChange={handleChange}
                        placeholder="Желаемый процент жира (%)"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 6 && (
                <>
                    <h2>Уровень активности</h2>
                    <input
                        type="range"
                        name="rangeActivity"
                        value={formData.rangeActivity}
                        onChange={(e) => handleRangeChange('rangeActivity', Number(e.target.value))}
                        min="0"
                        max="10"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 7 && (
                <>
                    <h2>Уровень физической подготовки</h2>
                    <input
                        type="range"
                        name="rangePhysicalLevel"
                        value={formData.rangePhysicalLevel}
                        onChange={(e) => handleRangeChange('rangePhysicalLevel', Number(e.target.value))}
                        min="0"
                        max="10"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 8 && (
                <>
                    <h2>Оцените уровень ровной спины</h2>
                    <input
                        type="range"
                        name="levelStraightBack"
                        value={formData.levelStraightBack}
                        onChange={(e) => handleRangeChange('levelStraightBack', Number(e.target.value))}
                        min="0"
                        max="10"
                    />
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 9 && (
                <>
                    <h2>Выберите ваши увлечения</h2>
                    <div className={styles.buttonsContainer}>
                        {['Бег', 'Плавание', 'Йога', 'Велосипед'].map((hobby) => (
                            <button
                                key={hobby}
                                className={`${styles.optionButton} ${formData.hobby && formData.hobby.includes(hobby) ? styles.active : ''}`}
                                onClick={() => handleMultiSelectChange(hobby, 'hobby')}
                            >
                                {hobby}
                            </button>
                        ))}
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 10 && (
                <>
                    <h2>Какие у вас есть проблемы со здоровьем?</h2>
                    <div className={styles.buttonsContainer}>
                        {['Спина', 'Колени', 'Сердце', 'Легкие'].map((issue) => (
                            <button
                                key={issue}
                                className={`${styles.optionButton} ${formData.issues && formData.issues.includes(issue) ? styles.active : ''}`}
                                onClick={() => handleMultiSelectChange(issue, 'issues')}
                            >
                                {issue}
                            </button>
                        ))}
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 11 && (
                <>
                    <h2>Какой тип тренировок вы предпочитаете?</h2>
                    <div className={styles.buttonsContainer}>
                        {['Кардио', 'Силовые', 'Йога', 'Растяжка'].map((workout) => (
                            <button
                                key={workout}
                                className={`${styles.optionButton} ${formData.workoutType && formData.workoutType.includes(workout) ? styles.active : ''}`}
                                onClick={() => handleMultiSelectChange(workout, 'workoutType')}
                            >
                                {workout}
                            </button>
                        ))}
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 12 && (
                <>
                    <h2>Есть ли у вас ограничения по здоровью?</h2>
                    <div className={styles.buttonsContainer}>
                        {['Нет', 'Да'].map((limitation) => (
                            <button
                                key={limitation}
                                className={`${styles.optionButton} ${formData.healthLimitations && formData.healthLimitations.includes(limitation) ? styles.active : ''}`}
                                onClick={() => handleMultiSelectChange(limitation, 'healthLimitations')}
                            >
                                {limitation}
                            </button>
                        ))}
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 13 && (
                <>
                    <h2>Уровень тренировок</h2>
                    <div className={styles.buttonsContainer}>
                        {['Новичок', 'Средний', 'Продвинутый'].map((level) => (
                            <button
                                key={level}
                                className={`${styles.optionButton} ${formData.workoutLevel === level ? styles.active : ''}`}
                                onClick={() => handleSingleSelectChange(level, 'workoutLevel')}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
            {subStep === 14 && (
                <>
                    <h2>Частота тренировок</h2>
                    <div className={styles.buttonsContainer}>
                        {['1-2 раза в неделю', '3-4 раза в неделю', '5-6 раз в неделю'].map((frequency) => (
                            <button
                                key={frequency}
                                className={`${styles.optionButton} ${formData.workoutFrequency === frequency ? styles.active : ''}`}
                                onClick={() => handleSingleSelectChange(frequency, 'workoutFrequency')}
                            >
                                {frequency}
                            </button>
                        ))}
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={nextStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MultiFormStep3;
