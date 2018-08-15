import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { navComponents } from '../routes';
import Logo from '../img/light-logo.png';
import Switch from './Switch';
import { SPANISH, ENGLISH } from '../constants';
import { changeLanguage } from '../actions/languageActions';

class Header extends Component {
    static proptTypes = {
        language: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            show_menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    toggleLanguage(e) {
        const newVal = e.target.checked
            ? SPANISH
            : ENGLISH;

        this.props.dispatch(changeLanguage(newVal));
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
        const { language } = this.props;
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
                            {navComponents(language)}
                        </ul>
                    </nav>
                    <ul className="social">
                        {/* <li><a className="fb" href="/">{null}</a></li> */}
                        {/* <li><a className="twitter" href="/">{null}</a></li> */}
                        {/* <li><a className="gplus" href="/">{null}</a></li> */}
                        <li>
                            <Switch
                                onText={SPANISH}
                                offText={ENGLISH}
                                checked={language === SPANISH}
                                onChange={this.toggleLanguage}
                            />
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    language: state.language,
});

export default connect(mapStateToProps)(Header);
