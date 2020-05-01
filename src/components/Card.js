import React from 'react'

class Card extends React.Component{
    //render es para pintar el component
    render(){
        return (
            <div>
                <div>
                    <h1>Bienvenidxs a Chotuve!!</h1>
                    <p> Plataforma para ver y compartir videos</p>
                </div>
                <div>
                    <button> Ping!</button>
                </div>
            </div>
        )
    }
}

//exportar classes
export default Card;