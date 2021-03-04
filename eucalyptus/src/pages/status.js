import React, { Component } from 'react';
import axios from "axios";
import Status_table from "../components/Status_table";
import Subnavigation from "../layout/Subnavigation";
import "./status.css";

class status extends Component{

    constructor(props){
      super(props)
      this.state = {
        result : props.location.state.result,
        Pnum : props.match.params.id
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
        const { result, Pnum } = this.state;
        return (

          <div className="Problems">
            <Subnavigation Pnum={Pnum} />
            <div className="Problems_container">
              <table className="status__table" id="problem">
                <thead>
                  <tr>
                    <th style={{width: "20%"}}>제출 번호</th>
                    <th style={{width: "80%"}}>채점 결과</th>
                  </tr>
                </thead>
                
                {result.map(result => (
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