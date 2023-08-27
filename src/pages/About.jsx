import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function About() {
  return (
    <>
      <h1>About page</h1>
      <Link to='/' className='btn'>
        Home
      </Link>
    </>
  );
}
