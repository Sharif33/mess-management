/* eslint-disable eqeqeq */
import { CircularProgress } from '@mui/material';
import React from 'react';
import useMeal from '../Hooks/useMeal';
import Meal from './Meal';

const Meals = () => {
    const [meals] = useMeal();
    console.log(meals);
    const total=(meals.reduce((total,currentItem) =>  total = parseFloat(total + currentItem.mealDeposite) , 0 ));
    const mealRate=(meals.reduce((total,currentItem) =>  total = parseFloat(total + currentItem.mealTaken) , 0 ));

    console.log(total);
  
    const avg =(total/mealRate).toFixed(2);
   
    return (
        <>
            <div className="container mt-5">
                <div>

                </div>
                <div className="text-center pt-2">
           
                    <h3>Total Amount: {total}</h3>
                    <h3>Meal rate: {avg}</h3>
                </div>
                <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                    {meals.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        meals.map(meal => <Meal
                            key={meal.id}
                            meal={meal}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default Meals;