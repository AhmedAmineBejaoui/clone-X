// MenuItems.jsx
import PropTypes from "prop-types";

const MenuItems = ({ items }) => {
  return (<div className="p-6  ">
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-2 text-white hover:bg-gray-800 p-2 rounded-md cursor-pointer"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="font-semibold">{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
    
  );
};

MenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuItems;