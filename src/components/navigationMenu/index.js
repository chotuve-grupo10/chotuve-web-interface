import React from 'react';
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

class NavigationMenu extends React.Component{
    render(){
        return(
            <div class="fixed-top">
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/dashboard">
                         Dashboard
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/abmusuarios">
                         Users Admin
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/logout">
                         Logout
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
export default NavigationMenu;