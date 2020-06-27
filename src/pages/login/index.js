import React from 'react';
import { Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';

//import {startUi} from '../../services/firebase';


class Login extends React.Component{

    constructor(props){
        super(props)
        const token = localStorage.getItem('token');
        let isLoggedIn = true
        if (token === null){
            isLoggedIn = false
        }
        this.state = {
            username:'',
            password:'',
            error:'',
            token,
            loggedIn: isLoggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.onEnterClicked = this.onEnterClicked.bind(this)
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    async onEnterClicked(event){
        event.preventDefault()
        const user = {
            email: this.state.username,
            password: this.state.password
        };
        let componente = this;

        fetch('/api/login',
        {    headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
            },
            method: 'POST',
            body: JSON.stringify(user),
            crossorigin: true,

        } )

      .then(function(res) {
          return res.json()})
      .then(function (data){
            //Si recibe un Token
            if (data.Token){
                componente.setState({token: data.Token,
                                     error: '',
                                     loggedIn: true})
            }
            //Si recibe un error de Login
            if (data.Login){
                console.log(data.Login);
                componente.setState({error: 'Usuario y/o contraseña inválidos'})
            }
          }).catch(function(res){
              console.log(res)
          });
    }

    componentDidUpdate(){
        if (this.state.token !== null) {
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('token', this.state.token);
        }
    }
    

    render() {
        if (this.state.loggedIn){
            return <Redirect to="/dashboard"/>
        }
        //Agregar if para error de logueo
        return (
            <div>
                <h1> Login </h1>
                <hr  className="my-3"/>
                {
                    this.state.error !== ''? (
                        <Alert color="danger" className="text-center"> {this.state.error} </Alert>
                    ) : ''
                }
            <form onSubmit={this.submitForm}>
                <input type="text" placeholder="Email" name="username" value={this.state.username} onChange={this.onChange} />
                <br/>
                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                <br/>
                {/* <input type="submit" /> */}
                <button onClick={this.onEnterClicked} disabled={this.state.username.length === 0} className="enter-btn">Log in</button>

            </form>
            </div>


            );
    }



    //TODO por si queremos meterle login por firebase
    // componentDidMount(){
    //     startUi('#firebaseui')
    // }

    // render() {
    //     return (
    //
    //         <div id="firebaseui"></div>
    //     );
    // }
}

export default Login;

