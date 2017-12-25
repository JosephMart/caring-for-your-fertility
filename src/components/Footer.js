import React, { PureComponent } from 'react';
import footerLogo from '../img/logo_footer.png';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <img src={footerLogo} alt="Crafty" />
                <p className="rights">Copyright © Joseph Martinsen - All rights reserved</p>
            </footer>
        );
    }
}
