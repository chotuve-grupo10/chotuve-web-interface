import React from 'react';

class UsersList extends React.Component{
    

    render() {
        return (
            <div>               
                {/* {this.props.users.map((user, i) => <User key={i} {...user}/>)} */}
                {this.props.users.map(function(user, idx) {
                 return [<h5 key={idx}>{user["email"]}</h5>,
                                    <h6>Full name: {user["full name"]}</h6>,
                                    <h6>Phone number: {user["phone number"]}</h6>,
                                    <button className="enter-btn" disabled>Editar</button>,
                                    <h6>-----------------------------------</h6>];
                })}
            </div>
        );
    }
}

export default UsersList;
