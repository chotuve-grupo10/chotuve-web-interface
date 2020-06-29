import React,{useState} from 'react';

class UsersList extends React.Component{
    

    render() {
        return (
            <div>               
                 {this.props.users.map(function(user, idx) {
                 return <p key={idx}>{user["email"]}, {user["full name"]}</p>;
                })}
            </div>
        );
    }
}

export default UsersList;

