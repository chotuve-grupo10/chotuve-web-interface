import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const Users = React.lazy(() => import('../views/Users'));
const AppServers = React.lazy(() => import('../views/AppServers'));

const views = [
  { path: "/home",        component: Home,        name: "Home",         icon: "home" },
  { path: "/users",       component: Users,       name: "Users",        icon: "user" },
  { path: "/app-servers", component: AppServers,  name: "App Servers",  icon: "server" },
  
];

export default views;