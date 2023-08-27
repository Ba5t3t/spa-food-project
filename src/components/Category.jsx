import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getFilteredCategory } from "../api";
import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name);
  }, [name]);
  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}
