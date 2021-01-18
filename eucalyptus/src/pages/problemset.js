import React, { Component } from 'react';
import axios from "axios";
import ProblemList from "./Problemget";

class problemset extends Component{
    state = {
        Problems: []
    };
    
    getList = async () => {
        const {
            data:
            { Problems }
        } =  await axios.get('https://mjkim317.github.io/react/eucalyptus/src/pages/data.json');

        console.log(Problems);
        this.setState({ Problems });
    }

    componentDidMount() {
        this.getList();
    }

    render() {
        const { Problems } = this.state;
        return (
            <section className = "container">
                <div className = "pset">
                    {Problems.map((prob,index) => (
                        <ProblemList
                        key={index}
                        pnum={prob.Pnum}
                        pname={prob.Pname}
                        solved={prob.Solved}
                        snum={prob.SNum}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default problemset

