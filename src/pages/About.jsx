import { Link } from 'react-router-dom';

export function About() {
  return (
    <>
      <h1>About page</h1>
      <Link to="/" className="btn">
        Home
      </Link>
    </>
  );
}
