import React, { Component } from 'react';
import axios from "axios";
import "./problemset.css";
import Problemget from "../components/Problemget";
// const About = ({match})=>{
//     return(
//         <div>
//             {match.params.name}
//         </div>
//     )
// }
class problemset extends Component{
    state = {
        Problems: []
    };
    
    getList = async () => {
        const {
            data:
            { Problems }
        } =  await axios.get('http://210.117.181.118:4848/spring/problemdata');

        console.log(Problems);
        this.setState({ Problems });
    }

    componentDidMount() {
        this.getList();
    }

    render() {
        const { Problems } = this.state;
        return (
            <div className="problemset">
                <div className="container">
                    <table class="table-bordered" id="problem">
                        <thead>
                            <tr>
                                <th style={{width: "15%"}}>문제</th> 
                                <th style={{width: "50%"}}>문제 제목</th> 
                                <th style={{width: "15%"}}>정보</th> 
                                {/* <th style={{width: "15%"}}>제출</th>  */}
                            </tr>
                        </thead>
                        {Problems.map((prob) => (
                        <Problemget
                        pnum={prob.Pnum}
                        pname={prob.Pname}
                        solved={prob.Solved}
                        />
                    ))}
                    </table>
                </div>
        </div>
        );
    }
}

export default problemset

