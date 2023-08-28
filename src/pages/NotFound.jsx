import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/" className="btn">
        Home
      </Link>
    </>
  );
}
