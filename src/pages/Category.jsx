import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { useState, useEffect } from 'react';
import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';

export function Category() {
  const { meal } = useParams();

  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(meal).then((data) => setMeals(data.meals));
  }, [meal]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
}
