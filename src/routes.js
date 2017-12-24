import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Home, About, Topics, TodoApp } from './containers/App/App';
import RedditAsync from './containers/RedditAsync'

const routes = [
    {
        path: '/',
        component: Home,
        navVisible: true,
        navText: 'Home',
        exact: true
    },
    {
        path: '/todo',
        component: TodoApp,
        navVisible: true,
        navText: 'Todo',
        exact: true
    },
    {
        path: '/about',
        component: About,
        navVisible: true,
        navText: 'About',
        exact: true
    },
    {
        path: '/topics',
        component: Topics,
        navVisible: true,
        navText: 'Topics',
        exact: false
    },
    {
        path: '/reddit',
        component: RedditAsync,
        navVisible: true,
        navText: 'Reddit Async Example',
        exact: true
    }
];

export const routeComponents = routes.map(({ path, component, exact }, key) => <Route exact={exact} path={path} component={component} key={key} />);
export const navComponents = routes.map(({ path, navVisible, navText }, key) => navVisible ? <li key={key}><Link to={path}>{navText}</Link></li> : null);
