import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const Users = React.lazy(() => import('../views/Users'));
const AppServers = React.lazy(() => import('../views/AppServers'));
const MediaResources = React.lazy(() => import('../views/MediaResources'));

const views = [
  { path: "/home",            component: Home,            name: "Home",             icon: "home" },
  { path: "/users",           component: Users,           name: "Users",            icon: "user" , exact: true},
  { path: "/app-servers",     component: AppServers,      name: "App Servers",      icon: "server" },
  { path: "/media-resources", component: MediaResources,  name: "Media Resources",  icon: "video-camera"},
];

export default views;