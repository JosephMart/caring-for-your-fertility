import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Home } from './containers/Home';
import { Calendar } from './containers/Calendar';
import { Event } from './containers/Event';
import { Info } from './containers/Info';

import { ENGLISH, SPANISH } from './constants';

const routes = [
    {
        path: '/',
        component: Home,
        navVisible: true,
        navText: {
            [ENGLISH]: 'Home',
            [SPANISH]: 'Casa',
        },
        exact: true
    },
    {
        path: '/calendar',
        component: Calendar,
        navVisible: true,
        navText: {
            [ENGLISH]: 'Calendar',
            [SPANISH]: 'Calendario',
        },
        exact: true
    },
    {
        path: '/info',
        component: Info,
        navText: {
            [ENGLISH]: 'Info',
            [SPANISH]: 'Información',
        },
        navVisible: true,
        exact: true
    },
    {
        path: '/event/:year/:month/:day',
        component: Event,
        navVisible: false,
        exact: true
    }
];

export const routeComponents = routes.map(({ path, component, exact }, key) => <Route exact={exact} path={path} component={component} key={key} />);
export const navComponents = (lang) => routes.map(({ path, navVisible, navText }, key) => navVisible ? <li key={key}><Link to={path}>{navText[lang]}</Link></li> : null);
