//import React from 'react'
//import {Redirect} from 'react-router-dom'

const auth_fallback_target = 'https://chotuve-auth-server-dev.herokuapp.com/';
const cors_fallback_target = 'https://cors-anywhere.herokuapp.com/';
const cors_target = `${process.env.CORS || cors_fallback_target }`;
const auth_target = `${process.env.REACT_APP_AUTH_SERVER || process.env.AUTH_SERVER || auth_fallback_target }`;
const target = cors_target + auth_target

function loginAuth(user) {
    return (fetch(target+'api/login',
    {    headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
        },
        method: 'POST',
        body: JSON.stringify(user),
        crossorigin: true,

    } ))
   
}

function getUsers(callback){
    var token = localStorage.getItem('token');
    return (fetch(target+'api/users/',
        {    headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
                'authorization': token
            },
            method: 'GET',
            crossorigin: true,

        })).then((res) => res.json())
        .then(callback);
}

function modifyUser(data, callback){
  _modifyUser(target+`api/users/${data.email}`, data, callback)
}


function deleteUser(email,callback) {
  _deleteUser(target+`api/users/${email}`, callback)
}

function getAppServerTokensFromAuth(callback) {
  _getAppServerTokens(target+'api/app_servers/', callback);
}

function getAppServerTokensFromMedia(callback) {
  _getAppServerTokens('/media/api/app_servers/', callback);
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
  _deleteAppServerToken(target+`api/app_servers/${token_to_delete}`, callback);
}

function deleteAppServerTokenFromMedia(token_to_delete, callback) {
  _deleteAppServerToken(`/media/api/app_servers/${token_to_delete}`, callback);
}

function _deleteUser(fetch_uri, callback) {
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

function _modifyUser(fetch_uri, data, callback) {
  var token = localStorage.getItem('token');
  console.log('Token actual: ' + token);
  fetch(fetch_uri,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token
      },
      body: JSON.stringify(data),
      crossorigin: true,
    } 
  ).then((res) => res.json())
  .then(callback);
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

function createNewAppServerTokenForMedia(callback) {
  _createNewAppServerToken('/media/api/app_servers/', callback);
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
export {modifyUser};
export {getAppServerTokensFromAuth};
export {deleteAppServerTokenFromAuth};
export {createNewAppServerTokenForAuth};
export {getAppServerTokensFromMedia};
export {deleteAppServerTokenFromMedia};
export {createNewAppServerTokenForMedia};