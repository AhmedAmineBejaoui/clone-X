// Header.jsx
import "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className="header bg-black text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;