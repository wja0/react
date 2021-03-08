import React from "react";
import PropTypes from "prop-types";
import "./ViewProblem.css"

function ViewCode({ Code}) {
    
    return (
    <div className="mycode">
        <h1 className="codename">0000번 코드</h1>
            <hr size="5" noshade />
        <div className="codeviewer">
            <p>{Code}</p>
        </div>
    </div>
    )
}

ViewCode.propTypes = {
    // Pnum: PropTypes.string.isRequired,
    // Pname: PropTypes.string.isRequired,
    // Solved: PropTypes.string.isRequired,
    Code: PropTypes.string.isRequired

}


export default ViewCode;