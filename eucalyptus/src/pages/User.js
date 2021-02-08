import React from "react";
import axios from "axios";
import ViewUser from "../components/ViewUser";


class User extends React.Component {
    state = {
        id: "",
        solvedList: []
    };

    getUser = async () => {
        const {
            data:
                {id , solvedList}
        } = await axios.get("https://nature1216.github.io/react/eucalyptus/src/pages/data.json");
        // const {
        //     data:
        //         {id,solvedList}
        // } = await axios({
        //     method : 'post',
        //     url : '',
        //     data : {
        //         'ID': this.params.id
        //     }
        // })
        this.setState( {id : id , solvedList: solvedList} );

    };
    componentDidMount() {
        this.getUser();
    }

    render() {
        const {id} = this.state.id;
        const {solvedList} = this.state.solvedList;
        console.log(/*id ,*/ solvedList);
        console.log("좆같네");

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