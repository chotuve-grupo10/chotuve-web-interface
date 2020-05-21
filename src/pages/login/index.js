import React from 'react';
import {startUi} from '../../services/firebase';

class Login extends React.Component{
    componentDidMount(){
        startUi('#firebaseui')
    }

    render() {
        return (
            <div id="firebaseui"></div>
        );
    }
}

export default Login;