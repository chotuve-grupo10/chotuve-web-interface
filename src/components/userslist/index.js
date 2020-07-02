import React from 'react';
import {Link} from 'react-router-dom'

class UsersList extends React.Component{

    render() {
        return (
            <div>               
                {this.props.users.map(function(user, idx) {
                 return [<h5 key={idx}>{user["full name"]}</h5>,
                        <Link to={{pathname: `/users/${user["email"]}`,state:{user:user}}}>View Profile</Link>,
                        <h6>-----------------------------------</h6>];
                })}
               
            </div>
        );
    }
}

export default UsersList;
