import React, { Component } from 'react';
import axios from "axios";
import ViewProblem from "../components/ViewProblem";
import {Problemset} from "./problemset";

class Problem extends React.Component {
    state = {

    }
    getinfo = async () => {
        const info = await axios.post(/*json*/);
        this.setState({info});
    }
    componentDidMount() {
        this.getinfo();
    }
    render() {
        const {info} = this.state;
        return (
            <div className="info">
                {info.map(info => (
                    <ViewProblem
                        key={info.Pnum}
                        Pnum={info.Pnum}
                        Pname={info.Pname}
                        Solved={info.Solved}
                        Pcond={info.Pcond}
                        Pdetail={info.Pdetail}
                        Pinout={info.Pinout}
                        />
                ))}
            </div>
        )
    }
}
export default problem;