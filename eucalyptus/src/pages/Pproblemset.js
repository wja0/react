import React from "react";
import PropTypes from "prop-types";
//import data from "./data.json";
import {Link } from "react-router-dom";


function pproblemset({pnum, pname, solved, submission}) {
    return(
        <Link to = {{
            pathname: `/problem/${pnum}`,
            state: {
                pnum,
                pname,
                solved,
                submission
            }
        }}>

        <div className = "problemset">
            <h3 className = "problem__data"> {pnum} {pname} {solved} {submission}</h3>

        </div> 

        </Link>
    )
}

problemset.propTypes = {
    //id: PropTypes.number.isRequired,
    pnum: PropTypes.number.isRequired,
    pname: PropTypes.string.isRequired,
    solved: PropTypes.bool.isRequired,
    submission: PropTypes.bool.isRequired
};

export default Pproblemset;