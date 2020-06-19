import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';

//import {startUi} from '../../services/firebase';


class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            token: '',
            loggedIn: false
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Accept',
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
                componente.setState({token: data.Token})
                componente.setState({loggedIn : true})
                //Imprime por pantalla los datos
                console.log("Logged in")
                console.log('User:'+componente.state.username)
                console.log('Pass:'+componente.state.password)
                console.log('Token:'+componente.state.token)         
            }
            //Si recibe un error de Login
            if (data.Login){
                console.log(data.Login);
            }
          }).catch(function(res){
              console.log(res)
          });
    }


    render() {
        if (this.state.loggedIn){
            return <Redirect to="/dashboard"/>
        }
        //Agregar if para error de logueo
        return (
            <div>
                <h1> Login </h1>
            
            <form onSubmit={this.submitForm}>
                <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                <br/>
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
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