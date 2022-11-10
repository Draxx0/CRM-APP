import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Invoices</Link>
          </li>
          <li className="nav-item">
            <Link to="/clients">Clients</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
