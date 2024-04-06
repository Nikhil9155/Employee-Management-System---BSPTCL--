import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div>
      <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>
      <div className="header-wrapper">
    <div className="gradient" />
      <div className="links">
        <NavLink to={"/"} >Signup</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/ems"}>EMS</NavLink>
      </div>
    </div>
    </div>
  );
}

export default Header;
