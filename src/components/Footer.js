import React, { PureComponent } from 'react';
import footerLogo from '../img/logo-dark.png';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <img src={footerLogo} alt="Caring for Your Fertility" width="25%" />
                <p className="rights">Copyright © Joseph Martinsen - All rights reserved</p>
            </footer>
        );
    }
}
