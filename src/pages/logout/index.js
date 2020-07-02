import React from 'react';
import {Link} from 'react-router-dom'

class Logout extends React.Component{

  
    componentDidMount() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    }
  

    render() {
        return (
            <div>
                 <h1>Has salido de la sesión!</h1>
                <Link to="/login"> Logueate nuevamente</Link>
            </div>
        );
    }
}

export default Logout;