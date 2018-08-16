import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EnglishText from './English';
import SpanishText from './Spanish';

import './styles.css';
import { SPANISH } from '../../constants';

class Info extends Component {
    static propTypes = {
        language: PropTypes.string.isRequired,
    }

    render() {
        const text = this.props.language === SPANISH ? SpanishText : EnglishText;

        return (
            <section className="info-page">
                {text}
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    language: state.language,
});

export default connect(mapStateToProps)(Info);
