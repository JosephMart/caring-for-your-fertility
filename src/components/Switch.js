import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Switch extends Component {
    static propTypes = {
        onText: PropTypes.string,
        offText: PropTypes.string,
        checked: PropTypes.bool,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        onText: '',
        offText: '',
        checked: false,
        onChange: () => {},
    }

    render() {
        const { onText, offText, checked, onChange } = this.props;
        return (
            <label className="switch">
                <input className="switch-input" type="checkbox" checked={checked} onChange={onChange} />
                <span className="switch-label" data-on={onText} data-off={offText}></span> 
                <span className="switch-handle"></span> 
            </label>
        );
    }
}
