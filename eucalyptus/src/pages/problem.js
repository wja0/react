import React, { Component } from 'react';
import axios from "axios";
import ViewProblem from "../components/ViewProblem";

class problem extends React.Component {
  
    state = {
        info: []
    };
    params  = this.props.match;
    
    // getinfo = async () => {
    //     const {
    //         data:
    //             {info}
    //     } = await axios({
    //         method : 'get',
    //         url : 'http://211.33.49.253:8080/spring/probleminfo',
    //         params : {
    //             'Pnum' : this.params.params.id
    //         }
    //     })
    //     console.log({info});
    //     this.setState( {info} );
    // };
    getinfo = async () => {
        const {
            data:
                {info}
        } = await axios({
            method : 'post',
            url : 'http://211.33.49.253:8080/spring/probleminfo',
            data : {
                'Pnum' : this.params.params.id
            }
        })
        console.log({info});
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
export default problem;