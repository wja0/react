import React, { Component } from 'react';
import axios from "axios";
import ViewProblem from "../components/ViewProblem";
import {Problemset} from "./problemset";

class Problem extends React.Component {
    state = {
        info : []
    }
    getinfo = async () => {
        const info = await axios.post("https://nature1216.github.io/react/eucalyptus/src/pages/data.json");
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