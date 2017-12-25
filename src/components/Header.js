import React, { PureComponent } from 'react';
import { navComponents } from '../routes';
import Logo from '../img/logo.png';

export default class Header extends PureComponent {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <img src={Logo} alt="Crafty" className="logo" />
                    <a href="" className="menu_icon" id="menu_icon">{null}</a>
                    <nav id="nav_menu">
                        <ul>
                            {navComponents}
                        </ul>
                    </nav>
                    <ul className="social">
                        <li><a className="fb" href="/">{null}</a></li>
                        <li><a className="twitter" href="/">{null}</a></li>
                        <li><a className="gplus" href="/">{null}</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}