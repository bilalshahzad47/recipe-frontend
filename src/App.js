import MealsTabs from "./Components/MealsTabs";
import OptimizedMeals from "./Components/OptimizedMeals";

function App() {
  return (
    <>
    <OptimizedMeals />
    <div className="bg-gradient-to-r from-[#FAF2F6] to-[#EAF6FA] ">
      <MealsTabs />
    </div>
    </>
  );
}

export default App;