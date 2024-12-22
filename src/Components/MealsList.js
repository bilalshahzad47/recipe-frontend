import React from "react";
import MealCard from "./MealCard";

const MealsList = ({ meals, setSelectedMealId, activeTab, handleDeleteMeal, selectedMealId, week }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            onClick={() => activeTab === "All Meals" && setSelectedMealId(meal.id)}
            isSelected={selectedMealId === meal.id}
            isDeletable={activeTab !== "All Meals"} // Show delete icon in weekly tabs
            handleDelete={() => handleDeleteMeal(meal.id, week)} // Pass delete logic
          />
        ))
      ) : (
        <p className="col-span-2 text-center text-gray-600">
          No meals available for this tab.
        </p>
      )}
    </div>
  );
};

export default MealsList;