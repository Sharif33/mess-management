import React from 'react';

const Meal = ({meal}) => {
  const date = new Date();
 
    return (
      <>
      <div className="col rounded">
      <div className="card p-3 border custom-shadow h-100">
        <div className="d-flex justify-content-between align-items-center">
          <img className='img-fluid border rounded-circle w-25' src={meal.image} alt="" />
          <h6>{meal.name}</h6> <br />
          <p>{date.toLocaleDateString()}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center text-center">
          <p>Meal Deposite: <span><button className='btn btn-success'>{meal.mealDeposite}</button></span> </p>
          <p>Meal Taken: <span><button className='btn btn-warning'>{meal.mealTaken}</button></span></p>
        </div>
        <div className="d-flex justify-content-between align-items-center text-center">
          <p>Total Meal: <span><button className='btn btn-success'>{meal.mealDeposite}</button></span></p>
          <p>Meal Cost: <span><button className='btn btn-warning'>{meal.mealTaken}</button></span></p>
        </div>
        
        </div>
        </div>
      </>
      
    );
};

export default Meal;