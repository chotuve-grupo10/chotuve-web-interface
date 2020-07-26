import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const Users = React.lazy(() => import('../views/Users'));
const AppServerTokens = React.lazy(() => import('../views/AppServerTokens'));

const views = [
  { path: "/home",        component: Home,        name: "Home",         icon: "home" },
  { path: "/users",       component: Users,       name: "Users",        icon: "user" , exact: true},
  { name: "App Servers", icon: "server", subItems: [
    { path: "/app-server-tokens",   component: AppServerTokens,    name: "Tokens"},
  ]},
  
];

export default views;