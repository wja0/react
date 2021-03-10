import React from "react";
import axios from "axios";
import ViewUser from "../components/ViewUser";

class User extends React.Component {
    state = {
        id: "",
        solvedList: []
    };
    params = this.props.match;

    getUser = async () => {
        const {
            data:
                {ID , SolvedList}
        } = await axios ({
            method : 'post',
            // url : 'http://210.117.181.118:4848/spring/userinfo',
            url : 'http://218.151.66.186:8080/spring/userinfo',
            data : {
                'ID' : this.params.params.id
            }
        })
        this.setState( {
            id : ID,
            solvedList: SolvedList
        } );

    };
    componentDidMount() {
        this.getUser();
    }

    render() {
        const {id} = this.state;
        const {solvedList} = this.state;
        // console.log(this.props);
        return (
            <div>
                <div className="User">
                    <ViewUser
                        key={id}
                        id={id}
                        Solved={solvedList}
                    />
                </div>
            </div>
        )

    }
}

export default User;