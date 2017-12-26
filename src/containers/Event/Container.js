import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from '../Map';
import PropTypes from 'prop-types';

class Event extends Component {
    static propTypes = {
        event: PropTypes.shape()
    }

    render() {
        const { event } = this.props;
        return (
            <div>
                <section id="event" className="cta">
                    <h3>{event.title}</h3>
                    <p>{`${event.startTime} to ${event.endTime}`}</p>
                    <p>{event.longDesc}</p>
                    <span className="cta_sep"></span>
                </section>
                <section className="">
                    <span className="sep_line sep_top"></span>
                    <Map location={event.location.coord} title={event.location.name} />
                    <span className="sep_line sep_bottom"></span>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { year, month, day } = ownProps.match.params;
    return {
        event: state.events[`${year}-${month}-${day}`]
    };
}

export default connect(mapStateToProps)(Event);
