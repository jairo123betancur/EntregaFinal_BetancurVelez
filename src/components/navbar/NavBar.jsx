import { Link } from 'react-router-dom';
import Logo from './Logo';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  const categories = ['disco-duro', 'memoria-ram', 'boards', 'graficadoras'];

  return (
    <nav className="navbar">
      {}
      <Link to="/" className="navbar-brand">
        <Logo />
      </Link>

      {}
      <ul className="navbar-categories">
        <li className="navbar-category">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>

        {}
        {categories.map((category, index) => (
          <li key={index} className="navbar-category">
            <Link to={`/category/${category}`} className="navbar-link">
              {category.replace('-', ' ')}
            </Link>
          </li>
        ))}
      </ul>

      {}
      <CartWidget />
    </nav>
  );
};

export default NavBar;