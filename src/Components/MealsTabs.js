import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import MealsList from "./MealsList";
import axios from "axios";

const MealsTabs = () => {
  const [activeTab, setActiveTab] = useState("All Meals");
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState("");
  const [weekMeals, setWeekMeals] = useState({
    "Week 1": [],
    "Week 2": [],
    "Week 3": [],
    "Week 4": [],
  });

  const [allMeals, setAllMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setAllMeals(response.data.recipes);
      } catch (err) {
        setError("Failed to load meals. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const tabs = ["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"];

  // Function to handle saving the selected meal to the selected week
  const handleSaveMealToWeek = () => {
    const selectedMeal = allMeals.find((meal) => meal.id === selectedMealId);
    if (selectedMeal && selectedWeek) {
      if (!weekMeals[selectedWeek].some((meal) => meal.id === selectedMeal.id)) {
        setWeekMeals((prevMeals) => ({
          ...prevMeals,
          [selectedWeek]: [...prevMeals[selectedWeek], selectedMeal],
        }));
        alert(`${selectedMeal.name} has been added to ${selectedWeek}`);
      } else {
        alert("This meal is already added to this week.");
      }
    } else {
      alert("Please select both a meal and a week.");
    }
  };

  // Delete a meal from a specific week
  const handleDeleteMealFromWeek = (mealId, week) => {
    setWeekMeals((prevMeals) => ({
      ...prevMeals,
      [week]: prevMeals[week].filter((meal) => meal.id !== mealId),
    }));
  };

  const getMealsForActiveTab = () => {
    if (activeTab === "All Meals") {
      return allMeals;
    }
    return weekMeals[activeTab] || [];
  };

  return (
    <div className="py-8">
      <h1 className="max-w-4xl mx-auto font-bold text-xl">Week Orders</h1>
      <div className="mt-6">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} tabs={tabs} handleSaveMealToWeek={handleSaveMealToWeek}/>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
      {loading ? (
          <p>Loading meals...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
            <MealsList
            meals={getMealsForActiveTab()}
            setSelectedMealId={setSelectedMealId}
            activeTab={activeTab}
            handleDeleteMeal={handleDeleteMealFromWeek}
            week={activeTab}
            selectedMealId={selectedMealId}
          />
        )}
      </div>
    </div>
  );
};

export default MealsTabs;
