import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
      <nav className="navigation">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/problemset'>Problems</Link></li>
          <li><Link to='/status'>채점현황</Link></li>
          <li><Link to='/submit'>Submit</Link></li>
          <li><Link to='/Tmp'>etc</Link></li>
        </ul>
      </nav>
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