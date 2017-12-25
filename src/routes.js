import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Home } from './containers/Home';
import { Calendar } from './containers/Calendar';

const routes = [
    {
        path: '/',
        component: Home,
        navVisible: true,
        navText: 'Home',
        exact: true
    },
    {
        path: '/calendar',
        component: Calendar,
        navVisible: true,
        navText: 'Calendar',
        exact: true
    }
];

export const routeComponents = routes.map(({ path, component, exact }, key) => <Route exact={exact} path={path} component={component} key={key} />);
export const navComponents = routes.map(({ path, navVisible, navText }, key) => navVisible ? <li key={key}><Link to={path}>{navText}</Link></li> : null);
