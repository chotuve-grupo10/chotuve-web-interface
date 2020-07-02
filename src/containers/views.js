import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const AppServers = React.lazy(() => import('../views/AppServers'));

const views = [
  { path: "/home", component: Home, text: "Home", icon: "home" },
  { path: "/app-servers", component: AppServers, text: "App Servers", icon: "server" },
];

export default views;