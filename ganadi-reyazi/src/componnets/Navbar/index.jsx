import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo/Logo.png'
function Navbar() {
  return (
    <>
      <header>
        <div id="Logo">
          <Link to='/'>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div id="list"></div>
        <div id="btn-start"></div>
      </header>
    </>
  );
}
export default Navbar;
