import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Home, About, Topics, TodoApp } from './containers/App/App';

const routes = [
    {
        path: '/',
        component: Home,
        navVisible: true,
        navText: 'Home'
    },
    {
        path: '/todo',
        component: TodoApp,
        navVisible: true,
        navText: 'Todo'
    },
    {
        path: '/about',
        component: About,
        navVisible: true,
        navText: 'About'
    },
    {
        path: '/topics',
        component: Topics,
        navVisible: true,
        navText: 'Topics'
    }
];

export const routeComponents = routes.map(({ path, component }, key) => <Route path={path} component={component} key={key} />);
export const navComponents = routes.map(({ path, navVisible, navText }, key) => navVisible ? <li key={key}><Link to={path}>{navText}</Link></li> : null);
