import React, { Component } from 'react';
import axios from "axios";
import ViewProblem from "../components/ViewProblem";

class Problem extends React.Component {
    state = {
        /*
        info:
        {
            "Pnum" :"1001" ,
            "Pname": "A+B" ,
            "Solved" : "T" ,
            "Pcond" : ["0.5초","128MB"],
            "Pdetail" : [
                "두 개의 숫자 a, b를 입력받아 합을 출력하시오.",
                "0 < a,b <100",
                "첫째 줄에 a+b를 출력한다."
            ],
            "Pinout" : [
                ["20 4"],
                "24"
            ]
        }
        */
    };
    
    getinfo = async () => {
        const {
            Pnum, Pname, Solved, Pcond, Pdetail, Pinout
        } = await axios.get("https://nature1216.github.io/react/eucalyptus/src/pages/data.json");
        console.log({Pnum, Pname, Solved, Pcond, Pdetail, Pinout});
        this.setState( {Pnum, Pname, Solved, Pcond, Pdetail, Pinout} );
    };
    componentDidMount() {
        this.getinfo();
    }
    render() {
        const { info } = this.state;
        return (
            <div className="info">
                {info.Pnum}
            </div>
        )
    }
}
export default Problem;