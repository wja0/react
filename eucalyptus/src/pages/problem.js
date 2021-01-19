import React, { Component } from 'react';
import axios from "axios";
import ViewProblem from "../components/ViewProblem";

class Problem extends React.Component {
    state = {
        
    };
    
    getinfo = async () => {
        const {
            data:
            {info}
        } = await axios.get("https://nature1216.github.io/react/eucalyptus/src/pages/data.json");
        //console.log({info});
        this.setState( {info} );
    };
    componentDidMount() {
        this.getinfo();
    }
    render() {
        const { info } = this.state;
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
export default Problem;