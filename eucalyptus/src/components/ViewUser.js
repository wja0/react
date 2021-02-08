import React from "react";
import PropTypes from "prop-types";

function ViewUser({id, Solved}) {
    
    const solved_List = Solved.map(solvedProblem => (
        <li className="solvedList">{solvedProblem}</li>
    ))
    
    return (
        <div className="user__user">
            <div className="user__id">{id}</div>
            <div className="user__solvedList">{solved_List}</div>
        </div>
    )
}

ViewUser.propTypes = {
    id: PropTypes.string.isRequired,
    Solved: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ViewUser;