import React, { Component } from 'react';
import axios from "axios";
import ViewCode from "../components/ViewCode";
class Codeget extends React.Component {
  
    state = {
        code: ""
    };
    
    codeget = async () => {
        const {
            data:
                {Code}
        } = await axios({
            method: 'get',
            url : 'http://210.117.181.118:4848/spring/codedetail',
            data : {
                'Code' : this.state.code //어떤 형태로 써야할지 모르겠음
            }
        })
        this.setState( {
            code: Code
        } );
    };
    componentDidMount() {
        this.codeget();
    }
    render() {
        const { code } = this.state;
        console.log(code);
        return (
            <div className="codes">
            <ViewCode
                Code={code}           
            />
        </div>
        )
    }
}

Codeget.propTypes = {
    SubNum: PropTypes.string.isRequired
}

export default Codeget;