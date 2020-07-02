import React from 'react'
import {Redirect} from 'react-router-dom'

function loginAuth(user) {
    return (fetch('/api/login',
    {    headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
        },
        method: 'POST',
        body: JSON.stringify(user),
        crossorigin: true,

    } ))
   
}

function deleteUser(email,token) {
    return (fetch('/api/users/'+email,
    {    headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
            'authorization': token
        },
        method: 'DELETE',
        crossorigin: true,

    } ))

}
export {loginAuth};
export {deleteUser};