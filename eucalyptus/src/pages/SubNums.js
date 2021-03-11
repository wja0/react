import React, { Component } from 'react';
import axios from "axios";
import ViewCode from "../components/ViewCode";
class SubNums extends React.Component {
  
    state = {
        subnum: "",
        code: "",
        pinfo : []
        
    };

    handleCreate = data =>{
        const { pinfo } =this.state; 

        this.setState({
            pinfo: pinfo.concat({
                pnum: data.pnum,
                id : data.id,
                result: data.result,
                langtype: data.langtype,
                codesize: data.codesize,
                permission: data.permission
            })

        })
    }
    params  = this.props.match;
    getcode = async () => {
        const {
            data:
                {Code}
        } = await axios({
            method : 'post',
            url : 'http://210.117.181.118:4848/spring/codedetail',
            data : {
                'SubNum' : this.params.params.subnum
            }
        })
        this.setState( {code: Code});
    };

    componentDidMount() {
        this.getcode();
    }
    render() {
        const { subnum } = this.state;
        const { code } = this.state;
        return (
            <div className="subnums">
                <ViewCode
                   subnum={subnum}
                   code = {code}
                   onCreate={this.handleCreate}
                />
            </div>
        )
    }
}
export default SubNums;
