import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";
const NavBar = (props) => {
  return (
    <div className="navbar">
      {/* Tao phan Title va 2 nut cho Navbar */}
      <div className="navbar_head">
        <div>Booking Website</div>
        <div className="navbar_head_login">
          <button className="navbar_button">Register</button>
          <button className="navbar_button">Login</button>
        </div>
      </div>
      {/* Tao 1 NavBar item cho moi thanh phan Navbar cua data */}
      <div className="navbar_items_layout">
        {props.items.map((expense) => (
          <NavBarItem
            key={expense.type}
            type={expense.type}
            icon={expense.icon}
            active={expense.active}
          />
        ))}
      </div>
    </div>
  );
};
//export component
export default NavBar;
