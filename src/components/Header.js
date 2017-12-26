import React, { Component } from 'react';
import { navComponents } from '../routes';
import Logo from '../img/light-logo.png';
import classNames from 'classnames';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show_menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    toggleMenu(e) {
        e.preventDefault();
        this.setState({
            show_menu: !this.state.show_menu
        })
    }

    hideMenu(e) {
        this.setState({
            show_menu: false
        })
    }

    render() {
        const menuClass = classNames({
            show_menu: this.state.show_menu
        })
        return (
            <header>
                <div className="wrapper">
                    <img src={Logo} alt="Caring for Your Fertiliy" className="logo" width="25%" />
                    <a href="" className="menu_icon" id="menu_icon" onClick={this.toggleMenu}>
                        {null}
                    </a>
                    <nav id="nav_menu" className={menuClass}>
                        <ul onClick={this.hideMenu}>
                            {navComponents}
                        </ul>
                    </nav>
                    {/* <ul className="social"> */}
                    {/* <li><a className="fb" href="/">{null}</a></li> */}
                    {/* <li><a className="twitter" href="/">{null}</a></li>
                        <li><a className="gplus" href="/">{null}</a></li> */}
                    {/* </ul> */}
                </div>
            </header>
        );
    }
}