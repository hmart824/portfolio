import "./Sidebar.css";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { GoProject } from "react-icons/go";
import { FiMessageCircle } from "react-icons/fi";

function Sidebar() {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  const toggleExpand = () => {
    console.log("clicked");
    setExpand(!expand);
  };

  // Close the sidebar on route change
  useEffect(() => {
    setExpand(false);
  }, [location.pathname]);

  return (
    <div className="menu">
      <nav className={expand ? "expand" : ""}>
        {expand ? (
          <span className="menu-icon" onClick={toggleExpand}>
            <RxCross1 />
          </span>
        ) : (
          <span className="menu-icon" onClick={toggleExpand}>
            <IoMdMenu />
          </span>
        )}
        <NavLink to='/' className={({isActive})=>isActive ? 'active' : ''} style={{ "--i": "1" }}>
          <IoHomeOutline /> <span>home</span>
        </NavLink>
        <NavLink to='/about' className={({isActive})=>isActive ? 'active' : ''} style={{ "--i": "2" }}>
          <IoIosContact /> <span>about</span>
        </NavLink>
        <NavLink to='/project' className={({isActive})=>isActive ? 'active' : ''} style={{ "--i": "3" }}>
          <GoProject /> <span>project</span>
        </NavLink>
        <NavLink to='/contact' className={({isActive})=>isActive ? 'active' : ''} style={{ "--i": "4" }}>
          <FiMessageCircle /> <span>contact</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
