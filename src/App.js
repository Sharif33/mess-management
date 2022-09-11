import * as React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Meals from "./components/MealInfo/Meals";

function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Meals />} />
   </Routes>
   </>
  );
}

export default App;
