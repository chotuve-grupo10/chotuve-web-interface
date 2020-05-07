import React from 'react'

class Ping extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            serverStatus: null,
        };
        
        
    }

    async fetchStatus() {
        // GET
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        // Se espera estado de respuesta
        var data = await response.status;
        // 200 is Ok
        if (data === 200){
            data = 'Server Ok!';
        } else {
            data = 'Server NO OK.';
        }   
        this.setState({ serverStatus: data });
    }

    clickHandler(){
        this.fetchStatus();    
        const { serverStatus } = this.state;
        
        return (
            <div className="card text-center m-3">
                <div className="card-body">               
                Estado Ping: {serverStatus}
                </div>
            </div>
        );
    }

    //render es para pintar el component
    render(){
     
        return (
            <div>
                <div>
                    <h1>Bienvenidxs a Chotuve!</h1>
                    <p> Plataforma para ver y compartir videos</p>
                </div>
                <div>
                    <button onClick={this.clickHandler.bind(this)}> Ping!</button>
                </div>
                <div>   
                    {this.state.serverStatus}</div>
            </div>
        )
    }
}

//exportar classes
export default Ping;