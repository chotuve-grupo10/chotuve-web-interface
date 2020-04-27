import React from 'react'
import ReactDOM from 'react-dom'

const product = {
  name: 'Chotuve',
  imagen: 'https://as01.epimg.net/meristation/imagenes/2019/11/12/betech/1573554822_627666_1573555077_noticia_normal.jpg' ,
} 

function getName(user){
  return `${product.name}`
}


const element = <h1>Bienvenidos a {getName(product)} </h1>
const container = document.getElementById('root')

ReactDOM.render(element,container)