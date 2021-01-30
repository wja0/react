import React, { Component } from 'react';
import axios from "axios";
import Status_table from "../components/Status_table";
import "./status.css";

class status extends Component{

    constructor(props){
      super(props)
      this.state = {
        result : props.location.state.result
      };
    }

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
      //   // console.log(this.props)
      //   // const {result} = this.props
      //   this.setState({ result : this.props.location });
      // }

      render() {
        // console.log(this.props.location)
        // console.log(this.state.result)
        const { result } = this.state;
        // console.log(result)
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
                
                {result.map(result => (
                  console.log(result),
                  <Status_table
                    key={result.SubNum}
                    SubNum={result.SubNum}
                    Result={result.Result}
                  />
                ))}
              </table>
            </div>                
          </div>
        );
      }
}

export default status