import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ViewUser({id, Solved}) {
    // const Solved_List = Solved.map(solvedProblem => (
    //     <li>{solvedProblem}</li>
    // ))
    
    return (
            <div className="user__user">
                <h2 className="id">ID</h2>
                <div className="user__id">{id}</div>
                <h2 className="solvedList">Solved List</h2>
                <ul className="SolvedProblem">
                    {Solved.map(solvedProblem => (
                        <li>
                            <Link to = {{
                                pathname:`/problem/${solvedProblem}`
                            }}>{solvedProblem}</Link>
                        </li>
                    ))}
                </ul>
                {/* <Link to = {{
                    pathname:`/problem/${Solved_List}`
                }}>
                    <div className="user__solvedList">{Solved_List}</div>
                </Link> */}
            </div>
    )
}

ViewUser.propTypes = {
    id: PropTypes.string.isRequired,
    Solved: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ViewUser;