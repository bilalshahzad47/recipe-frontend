import React from "react";
import { FaTrash } from "react-icons/fa";

const MealCard = ({ meal, onClick, isSelected, isDeletable, handleDelete }) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-lg shadow-md p-4 relative border cursor-pointer ${
        isDeletable ? "border-gray-300" : ""
      } ${
        isSelected ? "border-4 border-blue-900" : "border-gray-300"
      }`}
      onClick={onClick}
    >
        {isDeletable && (
        <button
          className="absolute top-6 left-6 bg-red-300 text-white px-1 py-1"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering meal selection
            handleDelete();
          }}
        >
          <FaTrash />
        </button>
      )}
      {/* Meal Type Badge */}
       <div className="absolute top-6 right-6 bg-[#000000] text-white font-bold px-6 py-0 text-xs">
         {meal.mealType.join(", ")}
       </div>

       {/* Meal Image */}
       <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{meal.name}</h3>

         {/* Instructions */}
         <div className="text-gray-600 mt-2">
           {meal.instructions.map((instruction, index) => (
            <p key={index} className="text-xs">
              {instruction}
            </p>
          ))}
        </div>

        {/* Cuisine and Rating */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-gray-600 text-xs">
            <span className="font-bold">Cuisine:</span> {meal.cuisine}
          </p>
          <p className="text-gray-600 text-xs">
            <span className="font-bold">Rating:</span> {meal.rating} ⭐⭐⭐⭐⭐
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;