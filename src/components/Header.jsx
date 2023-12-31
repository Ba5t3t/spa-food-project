import { Link } from "react-router-dom/cjs/react-router-dom";

export function Header() {
  return (
    <nav className='teal accent-4'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo center'>
          React Food SPA
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
