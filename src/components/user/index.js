import React from 'react'
import {Link, useLocation} from "react-router-dom";
//import {deleteUser} from '../../apliClient'

function User() {
 let data = useLocation();
 //const token = localStorage.getItem('token');
 console.log(data.state.user); 
 return (
        <div>
            <img src={data.state.user["profile picture"]} alt="Profile"/>
            
            <h6>Full name: {data.state.user["full name"]}</h6>
            <h6>Email: {data.state.user.email}</h6>
            <h6>Phone number: {data.state.user["phone number"]}</h6>
            {/* <button onClick={() =>{deleteUser(data.state.user.email, token)}} className="enter-btn">Delete</button> TODO falta ajustar algunas cosas*/}
            <Link to="/users">Volver</Link>
        </div>
 )

 
}
export default User;
