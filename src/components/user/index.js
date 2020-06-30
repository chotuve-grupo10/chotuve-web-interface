import React from 'react';

//deshabilitado por ahora
class User extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: this.props.email,
            fullName: this.props["full name"],
            phoneNumber: this.props["phone number"]
        }
    }
    render() {
        return (
            <div>
                 <h4>{this.state.email}</h4>
                 <h6>Full name: {this.state.fullName}</h6>
                 <h6>Phone number: {this.state.phoneNumber}</h6>
                 <button className="enter-btn" disabled>Editar</button>
                 <h5>--------------------------------------</h5>
                 

            </div>
        );
    }
}

export default User;
