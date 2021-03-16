import React from "react";
import PropTypes from "prop-types";
import "./ViewProblem.css"

function ViewCode({ Pnum, Code}) {
    
    return (
    <div className="mycode">
        <h1 className="codename">{Pnum}번 코드</h1>
            <hr size="5" noshade />
        <div className="codeviewer">
            <p>{Code}</p>
        </div>
    </div>
    )
}

ViewCode.propTypes = {
    Pnum: PropTypes.string.isRequired,
    Code: PropTypes.string.isRequired
}


export default ViewCode;
