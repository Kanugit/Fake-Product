import PropTypes from "prop-types";
import { FaCartPlus, FaUserAlt, FaRedoAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ searchTerm, handleSearch, sortCriteria, handleSort }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo"></div>
      </div>

      <div className="nav-search">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search items..."
        />

        <select onChange={handleSort} value={sortCriteria}>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="nav-signin">
        <button className="nav-button">
          <p>
            <span>Hello, Sign in</span>
          </p>
          <p className="sign">
            <FaUserAlt className="icon" /> Account & Lists
          </p>
        </button>
      </div>

      <div className="orders">
        <button className="nav-button">
          <p>
            <span>Returns</span>
          </p>
          <p className="sign">
            <FaRedoAlt className="icon" /> & Orders
          </p>
        </button>
      </div>

      <div className="cart">
        <button className="nav-button">
          <FaCartPlus className="icon" /> Cart
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  sortCriteria: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default Navbar;
