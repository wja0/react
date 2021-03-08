import React, { Component } from 'react';
import axios from "axios";
import Codeget from "./Codeget"
//subnum 전달
class SubNums extends React.Component {
  
    state = {
        subnum:""
    };
    params  = this.props.match;
    getsubnum = async () => {
        const {
            data:
                {SubNum}
        } = await axios({
            method : 'post',
            url : 'http://210.117.181.118:4848/spring/codedetail',
            data : {
                'SubNum' : this.params.params.subnum 
            }
        }).then();
        this.setState( {subnum : SubNum});
    };
    componentDidMount() {
        this.getsubnum();
    }
    render() {
        const { subnum } = this.state;
        
        return (
            <div className="subnums">
                <Codeget
                   subnum={SubNum}
                />
            </div>
        )
    }
}
export default SubNums;