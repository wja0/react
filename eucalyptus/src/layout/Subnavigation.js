// import React from "react";
import React, { Component } from 'react';
import {Link } from "react-router-dom";
import "./Subnavigation.css"

function Subnavigation() {
    return (
        <div className="subnav_structure">
          <input name="nav" type="radio" className="subnav first" id="first" defaultChecked="checked" />
          <div className="page first">
            <div className="page-contents">
            </div>
          </div>
          {/* htmlFor="first" 을 통해 해당 id jsx코드로 이동 -> 필요한 기능 연결하면 됨 */}
          <label className="subnav" htmlFor="first">
            <span className="contents">
              {/* <Link to={{pathname: `/submit/${Pnum}`}}> */}
              Submit
            {/* </Link> */}
            </span>
          </label>

          <input name="nav" type="radio" className="subnav second" id="second" />
          <div className="page second">
            <div className="page-contents">
            </div>
          </div>

          <label className="subnav" htmlFor="second">
            <span className="contents">
              Second
            </span>
          </label>

          <input name="nav" type="radio" className="subnav third" id="third" />
          <div className="page third">
            <div className="page-contents">
            </div>
          </div>

          <label className="subnav" htmlFor="third">  
            <span className="contents">
              Third
            </span>
          </label>

        </div>
    );
  }

  export default Subnavigation;