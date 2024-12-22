import React from 'react';

const OptimizedMeals = () => {
  return (
    <div className="relative bg-cover bg-center min-h-40" style={{ backgroundImage: "url('/images/background1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-40 text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Optimized Your Meal</h1>
          <p className="text-sm text-black-900 mb-4">
            Select a meal to add to your week. You will be able to edit, modify, and change the meal weeks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptimizedMeals;