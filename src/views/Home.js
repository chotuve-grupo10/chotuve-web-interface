import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Home.css'


class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          username: '',
          token: null,
          loggedIn: false    
      }
  }

  componentWillMount() {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      let loggedIn = true
      if (token === null){
          loggedIn = false
      }
      this.setState({username , token, loggedIn })
  }

  render() {
      if (this.state.loggedIn === false){
          return <Redirect to="/"/>
      }

      return (
        
      <div className="home">
        <h1>HOME</h1>
        
        <p>Desde esta web va a poder administrar los recursos principales de la aplicación <em>Chotuve</em>. Tenga en cuenta que toda acción que realice deberá ser de manera responsable a los intereses del Proyecto. Aqui va a poder:</p>
        <br></br>
        
        <h5><Link to='/users' activeClassName="active" style={{color: '#FF4358'}}>Administrar Usuarios</Link> </h5>
        <p>Para acceder al listado de todos los usuarios registrados en <em>Chotuve</em>. Podrá ver sus datos personales, editarlos, darlos de baja y ver los que están Habilitados y Deshabilitados</p>
        <br></br>

        <h5><Link to='/app-server-tokens' activeClassName="active" style={{color: '#FF4358'}}>Configurar App Servers:</Link> </h5>
        <p>Podrá configurar y administrar los App Servers:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><Link to='/app-server-tokens' activeClassName="active" style={{color: '#FF4358'}}>Tokens:</Link> </b> Listado de <em>App Servers</em>, donde podrá dar da alta o baja los mismos tanto para el AuthServer como el MediaServer </p>
        <p></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><Link to='/app-server-status' activeClassName="active" style={{color: '#FF4358'}}>Status:</Link> </b> Estado de los App Servers. Cómo tiempos de actividad, cuales están activos y cuales no</p>
        <p></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><Link to='/app-server-metrics' activeClassName="active" style={{color: '#FF4358'}}>Métricas:</Link> </b>Uso de CPU, memoria disponible y memoria consumida por el proceso</p>
        <br></br>
        <h5><Link to='/media-resources' activeClassName="active" style={{color: '#FF4358'}}>Media resources</Link></h5>
	      <p>Aqui podrá ver que videos están subidos a Chotuve, y poder eliminarlos en el caso de que desee.</p>
        </div>
    );

  }
}

export default Home;