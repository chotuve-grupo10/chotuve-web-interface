import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const Users = React.lazy(() => import('../views/Users'));
const AppServerTokens = React.lazy(() => import('../views/AppServerTokens'));
const AppServerStatus = React.lazy(() => import('../views/AppServerStatus'));
const AppServerMetrics = React.lazy(() => import('../views/AppServerMetrics'));
const MediaResources = React.lazy(() => import('../views/MediaResources'));

const views = [
  { path: "/home",            component: Home,            name: "Home",             icon: "home" },
  { path: "/users",           component: Users,           name: "Users",            icon: "user" , exact: true},
  { name: "App Servers", icon: "server", subItems: [
    { path: "/app-server-tokens",   component: AppServerTokens,    name: "Tokens"},
    { path: "/app-server-status",   component: AppServerStatus,    name: "Status"},
    { path: "/app-server-metrics",   component: AppServerMetrics,    name: "Métricas"},
  ]},
  { path: "/media-resources", component: MediaResources,  name: "Media Resources",  icon: "video-camera"},
];

export default views;