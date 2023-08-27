import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
        <span className='card-title'>{strCategory}</span>
      </div>
      <div className='card-content'>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className='card-action'>
        <Link to={`/category/${idCategory}`} className='btn'>
          Watch category
        </Link>
      </div>
    </div>
  );
}
