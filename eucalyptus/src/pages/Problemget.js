import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";

function problemget({pnum, pname, solved}) {
    return(
        <tbody>
            <tr>
                <td className="list_problem_id"><Link to= {{pathname: `/problem/${pnum}`} }>{pnum}</Link></td>
                <td><span>{pname}</span></td>
                <td><span>{solved}</span></td>
            </tr>
        </tbody>
    )
}

problemget.propTypes = {
    pnum: PropTypes.number.isRequired,
    pname: PropTypes.string.isRequired,
    solved: PropTypes.bool.isRequired,
};

export default problemget;