import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import "./ViewProblem.css";

function ViewProblem({Pnum, Pname, Solved, Pcond, Pdetail, Pinout}) {
    if(Solved === "T") {
        Solved = "성공";
    } else if(Solved === "F") {
        Solved = "실패";
    } else {
        Solved = "";
    }
    return (
        <div className="problem__problem">
            <div className="problem__data">
                <span className="problem__Pnum">{Pnum}번</span>
                <botton className="submit-botton"><Link to= {{pathname: `/submit/${Pnum}`} }>SUBMIT</Link></botton>
                <h4 className="problem__Solved">{Solved}</h4>
                <h2 className="problem__Pname">{Pname}</h2>
            </div>
            <div className="problem__contents">
                <h2 className="Timelimit">시간 제한</h2>
                <p className="problem__Timelimit">{Pcond[0]}</p>
                <h2 className="Memorylimit">메모리 제한</h2>
                <p className="problem__Memoryimit">{Pcond[1]}</p>

                <div className="problem__detail">
                    {/* {Pdetail.map((detail) => (
                        <p className="problem__quest">{detail}</p>
                    ))} */}
                    <h2 className="quest">문제</h2>
                    <p className="problem__quest">{Pdetail[0]}</p>
                    <h2 className="incond">입력</h2>
                    <p className="problem__incond">{Pdetail[1]}</p>
                    <h2 className="outcond">출력</h2>
                    <p className="problem__outcond">{Pdetail[2]}</p> 

                </div>
                               
            </div>
            <div className="problem__Example">
                {/* {Pinout.map((inout) => (
                    <p classNa
                    me="problem__inoutExmple">{inout}</p>
                ))} */}
                <h2 className="inExample">예제 입력</h2>
                <p className="problem__inExample">{Pinout[0]}</p>
                <h2 className="outExample">예제 출력</h2>
                <p className="problem__outExample">{Pinout[1]}</p>
            </div>

        </div>
    );
}

ViewProblem.propTypes = {
    Pnum: PropTypes.string.isRequired,
    Pname: PropTypes.string.isRequired,
    Solved: PropTypes.string.isRequired,
    Pcond: PropTypes.arrayOf(PropTypes.string).isRequired,
    Pdetail: PropTypes.arrayOf(PropTypes.string).isRequired,
    Pinout: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default ViewProblem;