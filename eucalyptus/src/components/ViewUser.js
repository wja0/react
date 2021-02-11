import React from "react";
import PropTypes from "prop-types";

function ViewUser({id, Solved}) {
    const Solved_List = Solved.map(solvedProblem => (
        <li>{solvedProblem}</li>
    ))
    
    return (
        <div className="user__user">
            <h2 className="id">ID</h2>
            <div className="user__id">{id}</div>
            <h2 className="solvedList">Solved List</h2>
            <div className="user__solvedList">{Solved_List}</div>
        </div>
    )
}

ViewUser.propTypes = {
    id: PropTypes.string.isRequired,
    Solved: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ViewUser;