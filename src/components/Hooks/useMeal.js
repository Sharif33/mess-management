import { useEffect, useState } from 'react';

const useMeal = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('./mealInfo.json')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);
    return [meals, setMeals];
};

export default useMeal;