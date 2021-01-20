import React from "react";
import {Link } from "react-router-dom";
import "./Navigation.css"
function Navigation(){
    return (
      <div className="menu">
        <span className="header">
          <h3>Eucalyptus</h3>
        </span>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="nav_menu-item"><Link to ='/'>Home</Link></li>
            <li className="nav_menu-item"><Link to ='/problemset'>Problems</Link>
              {/* <ul className="nav_submenu">
                <li className="nav_submenu-item"> <Link to =''>즐겨찾기 목록</Link></li>
              </ul> */}
            </li>
            <li className="nav_menu-item"><Link to ='/status'>채점 현황</Link>
              {/* <ul className="nav_submenu">
                <li className="nav_submenu-item"> <Link to =''>이런문제</Link></li>
              </ul> */}
            </li>
            <li className="nav_menu-item"><Link to ='/submit'>Submit</Link>
              <ul className="nav_submenu">
              </ul>
            </li>
            <li className="nav_menu-item"><Link to =''>etc</Link></li>
          </ul>
        </nav>
      </div>
      // <div className="header">
      //   <div className="topbar">
      //     <div className="container">
      //       <ul className="loginbar">
      //         <li>
      //           <a>login</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      //   <div className="navbar navar-default mega-memu" role="navigation">
      //     <div className="container">
      //       <div className="navbar-header">
      //         <Link to='/'>Eucalyptus</Link>
      //       </div>
      //       <div className="collapse navbar">
      //         <ul className="nav navbar-nav">
      //           <li className="dropdwon menu active">
      //             <Link to='/problemset'>문제</Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
}
export default Navigation;