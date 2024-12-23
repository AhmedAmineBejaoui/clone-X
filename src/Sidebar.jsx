// Sidebar.jsx
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import PostButton from "./PostButton";
import ProfileSection from "./ProfileSection";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaPen, FaUsers, FaStar, FaUserAlt, FaEllipsisH } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaSearch />, label: "Explore" },
    { icon: <FaBell />, label: "Notifications" },
    { icon: <FaEnvelope />, label: "Messages" },
    { icon: <FaPen />, label: "Grok" },
    { icon: <FaUsers />, label: "Communities" },
    { icon: <FaStar />, label: "Premium" },
    { icon: <FaUserAlt />, label: "Profile" },
    { icon: <FaEllipsisH />, label: "More" },
  ];

  return (
    <div className="h-screen bg-black flex flex-col justify-between">
      <div>
        <Logo />
        <MenuItems items={menuItems} />
        <PostButton />
      </div>
      <ProfileSection />
    </div>
  );
};

export default Sidebar;