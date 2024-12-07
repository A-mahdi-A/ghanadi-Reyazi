import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/Logo.png";
function Navbar() {
  return (
    <>
      <header>
        {/* --------------Button start-------- */}
        <div id="btn-start">
          <Link>بزن بریم</Link>
        </div>
        {/* -----------list ----------- */}
        <div id="list">
          {" "}
          <ul>
          <Link>
              <li>درباره ما</li>
            </Link>
         
            <Link>
              <li>تمرین ها</li>
            </Link>
          
            <Link>
              <li>دوره ها</li>
            </Link>
            <Link>
              <li>خانه</li>
            </Link>
            
          </ul>
        </div>
        {/* ----------Logo */}
        <div id="Logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </header>
    </>
  );
}
export default Navbar;
