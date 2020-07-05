//import React from 'react'
//import {Redirect} from 'react-router-dom'

function loginAuth(user) {
    return (fetch('/auth/api/login',
    {    headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
        },
        method: 'POST',
        body: JSON.stringify(user),
        crossorigin: true,

    } ))
   
}

function getUsers(token){
    return (fetch('/auth/api/users',
        {    headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
                'authorization': token
            },
            method: 'GET',
            crossorigin: true,

        }))
}

function deleteUser(email,token) {
    return (fetch('/auth/api/users/'+email,
    {    headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
            'authorization': token
        },
        method: 'DELETE',
        crossorigin: true,

    } ))

}

function getAppServerTokensFromAuth(callback) {
    //var token = 'Bearer ' + localStorage.getItem('token');
    var token = localStorage.getItem('token');
    console.log('Token actual: ' + token);
    fetch('/auth/api/app_servers/',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': token
        },
        crossorigin: true,
      } 
    ).then((res) => res.json())
    .then(callback);
}

function deleteAppServerTokenFromAuth(token_to_delete, callback) {
  var token = localStorage.getItem('token');
  console.log('Token actual: ' + token);
  fetch(`/auth/api/app_servers/${token_to_delete}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token
      },
      crossorigin: true,
    } 
  ).then((res) => res.json())
  .then(callback);
}

function createNewAppServerTokenForAuth(callback) {
  var token = localStorage.getItem('token');
  console.log('Token actual: ' + token);
  fetch('/auth/api/app_servers/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token
      },
      crossorigin: true,
    } 
  ).then((res) => res.json())
  .then(callback);
}

export {loginAuth};
export {getUsers};
export {deleteUser};
export {getAppServerTokensFromAuth};
export {deleteAppServerTokenFromAuth};
export {createNewAppServerTokenForAuth};