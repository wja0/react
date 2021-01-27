import React, { Component } from 'react';
import axios from "axios";
import Status from "../components/status_table";
import "./status.css";

class status extends Component{
    state = {
        Problems: []
      };
      // getProblems = async () => {
      //   const {
      //     data:
      //     {Problems}
      //   } = await axios.get('https://coala-oj.github.io/react/eucalyptus/src/pages/채점결과.json');
      //   console.log({Problems});
      //   this.setState({ Problems });
      // };
      // componentDidMount() {
      //   // this.getProblems();
      //   const {result} = this.props

      // }

      render() {
        // console.log(this.props)
        const { Problems } = this.props;
        return (
              <div className="Problems">
                <div className="container">
                  <table className="status__table" id="problem">
                    <thead>
                      <tr>
                        <th style={{width: "20%"}}>제출 번호</th>
                        <th style={{width: "80%"}}>채점 결과</th>
                      </tr>
                    </thead>
                    {Problems.map(Problem => (
                      <Status
                        key={Problem.SubNum}
                        SubNum={Problem.SubNum}
                        Result={Problem.Result}
                      />
                    ))}
                  </table>
               </div>                
              </div>
        );
      }
}

export default status