import React, { useState, useEffect } from 'react';
import styles from '../../public/styles/Form.module.scss';

interface FormData {
    goal: string[];
    sleepQuality: number;
    stressLevel: number;
    painPoints: string[];
    medicalCheckFrequency: string[];
    goalAchievementCelebration: string[];
    diet: string;
    customDiet: string;
    withCoach: string;
}

const initialFormData: FormData = {
    goal: [],
    sleepQuality: 0,
    stressLevel: 0,
    painPoints: [],
    medicalCheckFrequency: [],
    goalAchievementCelebration: [],
    diet: '',
    customDiet: '',
    withCoach: ''
};

interface StepProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
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

    const handleMultiSelectChange = (option: string, name: keyof FormData) => {
        const selectedOptions = formData[name] as string[] || [];
        if (selectedOptions.includes(option)) {
            setFormData({ ...formData, [name]: selectedOptions.filter((item: string) => item !== option) });
        } else {
            setFormData({ ...formData, [name]: [...selectedOptions, option] });
        }
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
                return (formData.goal || []).length > 0;
            case 2:
                return (formData.goal || []).length > 0;
            case 5:
                return (formData.painPoints || []).length > 0;
            case 6:
                return (formData.medicalCheckFrequency || []).length > 0;
            case 7:
                return (formData.goalAchievementCelebration || []).length > 0;
            case 8:
                return formData.diet !== '';
            case 9:
                return formData.withCoach !== '';
            default:
                return true;
        }
    };

    const handleRangeChange = (name: keyof FormData, value: number) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={styles.container}>
            {subStep === 1 && (
                <>
                    <h2>Цель</h2>
                    <p>Что для вас сейчас важнее всего?</p>
                    <div className={styles.buttonsContainer}>
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
                        <button onClick={prevStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                        <button className={styles.skipButton} onClick={nextStep}>Пропустить</button>
                    </div>
                </>
            )}

            {subStep === 2 && (
                <>
                    <h2>Цель</h2>
                    <p>Какая у вас главная цель?</p>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={styles.optionButton}
                            onClick={() => handleMultiSelectChange('Сбросить вес', 'goal')}
                            style={{backgroundImage: 'url(/path/to/your/image1.jpg)'}}
                        >
                            Сбросить вес
                        </button>
                        <button
                            className={styles.optionButton}
                            onClick={() => handleMultiSelectChange('Нарастить мышечную массу', 'goal')}
                            style={{backgroundImage: 'url(/path/to/your/image2.jpg)'}}
                        >
                            Нарастить мышечную массу
                        </button>
                        <button
                            className={styles.optionButton}
                            onClick={() => handleMultiSelectChange('Быть в форме', 'goal')}
                            style={{backgroundImage: 'url(/path/to/your/image3.jpg)'}}
                        >
                            Быть в форме
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 3 && (
                <>
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
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 4 && (
                <>
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
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 5 && (
                <>
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
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 6 && (
                <>
                    <h2>Частота посещения врачей</h2>
                    <p>Как часто вы ходите по врачам?</p>
                    <div className={styles.multiSelectContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.medicalCheckFrequency?.includes('Проверяю без причины (редко)') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Проверяю без причины (редко)', 'medicalCheckFrequency')}
                        >
                            Проверяю без причины (редко)
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.medicalCheckFrequency?.includes('Сдаю анализы регулярно') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Сдаю анализы регулярно', 'medicalCheckFrequency')}
                        >
                            Сдаю анализы регулярно
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.medicalCheckFrequency?.includes('Хожу по врачам') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Хожу по врачам', 'medicalCheckFrequency')}
                        >
                            Хожу по врачам
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.medicalCheckFrequency?.includes('Не проверяюсь') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Не проверяюсь', 'medicalCheckFrequency')}
                        >
                            Не проверяюсь
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 7 && (
                <>
                    <h2>Отмечание достижения цели</h2>
                    <p>Как вы будете отмечать достижение своей цели?</p>
                    <div className={styles.multiSelectContainer}>
                        <button
                            className={`${styles.optionButton} ${formData.goalAchievementCelebration?.includes('Куплю новую одежду') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Куплю новую одежду', 'goalAchievementCelebration')}
                        >
                            Куплю новую одежду
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goalAchievementCelebration?.includes('Поеду в путешествие') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Поеду в путешествие', 'goalAchievementCelebration')}
                        >
                            Поеду в путешествие
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goalAchievementCelebration?.includes('Поделюсь в соц. сетях') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Поделюсь в соц. сетях', 'goalAchievementCelebration')}
                        >
                            Поделюсь в соц. сетях
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goalAchievementCelebration?.includes('Посещу концерт') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Посещу концерт', 'goalAchievementCelebration')}
                        >
                            Посещу концерт
                        </button>
                        <button
                            className={`${styles.optionButton} ${formData.goalAchievementCelebration?.includes('Другое') ? styles.active : ''}`}
                            onClick={() => handleMultiSelectChange('Другое', 'goalAchievementCelebration')}
                        >
                            Другое
                        </button>
                    </div>
                    <div className={styles.navigationButtons}>
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 8 && (
                <>
                    <h2>Следование диете</h2>
                    <p>Следуете ли вы какой-то диете?</p>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={styles.optionButton}
                            onClick={() => setFormData({ ...formData, diet: 'Да' })}
                        >
                            Да
                        </button>
                        <button
                            className={styles.optionButton}
                            onClick={() => setFormData({ ...formData, diet: 'Нет' })}
                        >
                            Нет
                        </button>
                        <button
                            className={styles.optionButton}
                            onClick={() => setFormData({ ...formData, diet: 'Свой вариант' })}
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
                        <button onClick={handlePrevSubStep}>Назад</button>
                        <button onClick={handleNextSubStep} disabled={isNextDisabled}>Далее</button>
                    </div>
                </>
            )}

            {subStep === 9 && (
                <>
                    <h2>С наставником или самостоятельно</h2>
                    <p>Вы хотите двигаться самостоятельно или с помощью наставника?</p>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={styles.optionButton}
                            onClick={() => setFormData({ ...formData, withCoach: 'С наставником' })}
                        >
                            С наставником
                        </button>
                        <button
                            className={styles.optionButton}
                            onClick={() => setFormData({ ...formData, withCoach: 'Самостоятельно' })}
                        >
                            Самостоятельно
                        </button>
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

export default MultiFormStep2;
