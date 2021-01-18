import React from "react";
import PropTypes from "prop-types";

function ViewProblem({Pnum, Pname, Solved, Pcond, Pdetail, Pinout}) {
    return (
        <div className="problem__problem">
            <div className="problem__data">
                <h4 className="problem__Pnum">{Pnum}</h4>
                <h2 className="problem__Pname">{Pname}</h2>
                <h4 className="problem__Solved">{Solved}</h4>
            </div>
            <div className="problem__contents">
                <h4 className="problem__cond">{Pcond}</h4>
                <h3 className="problem__detail">
                    {Pdetail.map((detail) => (
                        <h3 className="problem__quest">{detail}</h3>
                    ))}
                </h3>
                {/* <h3 className="problem__quest">{Pdetail[0]}</h3>
                <h3 className="problem__incond">{Pdetail[1]}</h3>
                    <h3 className="problem__outcond">{Pdetail[2]}</h3> */}                
            </div>
            <div className="problem__Example">
                {Pinout.map((inout) => (
                    <p className="problem__inoutExmple">{inout}</p>
                ))}
                {/* <h3 className="problem__inExample">{Pinout[0]}</h3>
                <h3 className="problem__outExample">{Pinout[1]}</h3> */}
            </div>

        </div>
    );
}

ViewProblem.propTypes = {
    Pnum: PropTypes.number.isRequired,
    Pname: PropTypes.string.isRequired,
    Pcond: PropTypes.string.isRequired,
    Pdetail: PropTypes.arrayOf(PropTypes.string).isRequired,
    Pinout: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default ViewProblem;