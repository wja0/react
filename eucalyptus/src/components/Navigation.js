import React from "react";
import {Link } from "react-router-dom";
import "./Navigation.css"
function Navigation(){
    return (
      <div className="menu">
        <h3>Eucalyptus</h3>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="nav_menu-item"><Link to ='/'>Home</Link></li>
            <li className="nav_menu-item"><Link to ='/problemset'>Problems</Link>
              {/* <ul className="nav_submenu">
                <li className="nav_submenu-item"> <Link to =''>즐겨찾기 목록</Link></li>
              </ul> */}
            </li>
            <li className="nav_menu-item"><Link to =''>Problems</Link>
              {/* <ul className="nav_submenu">
                <li className="nav_submenu-item"> <Link to =''>이런문제</Link></li>
              </ul> */}
            </li>
            <li className="nav_menu-item"><Link to =''>ITCPC</Link>
              <ul className="nav_submenu">
              </ul>
            </li>
            <li className="nav_menu-item"><Link to =''>etc</Link></li>
          </ul>
        </nav>
      </div>
    );
}
export default Navigation;