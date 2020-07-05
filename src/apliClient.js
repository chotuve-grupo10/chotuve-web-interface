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
  _getAppServerTokens('/auth/api/app_servers/', callback);
}

function _getAppServerTokens(fetch_uri, callback) {
    //var token = 'Bearer ' + localStorage.getItem('token');
    var token = localStorage.getItem('token');
    console.log('Token actual: ' + token);
    fetch(fetch_uri,
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
  _deleteAppServerToken(`/auth/api/app_servers/${token_to_delete}`, callback);
}

function _deleteAppServerToken(fetch_uri, callback) {
  var token = localStorage.getItem('token');
  console.log('Token actual: ' + token);
  fetch(fetch_uri,
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
  _createNewAppServerToken('/auth/api/app_servers/', callback);
}

function _createNewAppServerToken(fetch_uri, callback) {
  var token = localStorage.getItem('token');
  console.log('Token actual: ' + token);
  fetch(fetch_uri,
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