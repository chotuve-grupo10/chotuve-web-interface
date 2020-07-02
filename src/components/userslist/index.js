import React from 'react';
import {Link, Route} from 'react-router-dom'
import User from '../user'

class UsersList extends React.Component{

    constructor(props){
        super(props)
        this.clicked = this.clicked.bind(this)

    }
    clicked(){
        console.log('click!')
    }

  
    render() {
        return (
            <div>               
                {this.props.users.map(function(user, idx) {
                 return [<h5 key={idx}>{user["full name"]}</h5>,
                        <Link to={{pathname: `/abmusuarios/user/${user["email"]}`,state:{user:user}}}>View Profile</Link>,
                        <h6>-----------------------------------</h6>];
                })}
               
            </div>
        );
    }
}

export default UsersList;
