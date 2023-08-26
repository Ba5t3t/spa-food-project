export function CategoryItem(props) {
  const { idCategory, strMeal, strCategory, strMealThumb, strInstructions } =
    props;

  return (
    <div class='card'>
      <div class='card-image'>
        <img src={strMealThumb} />
        <span class='card-title'>{idCategory}</span>
        <a class='btn-floating halfway-fab waves-effect waves-light red'>
          <i class='material-icons'>add</i>
        </a>
      </div>
      <div class='card-content'>
        <p>{strMeal}</p>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
}
