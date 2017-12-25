import React, { Component } from 'react';
import { connect } from 'react-redux';

class Event extends Component {
    render() {
        return (
            <div>
                <section id="event" className="cta">
                    <h3>Event</h3>
                    <p>come to this event</p>
                    <span class="cta_sep"></span>
                </section>
                <section class="testimonials wrapper">
                    <span class="sep_line sep_top"></span>
                    <h2>Map</h2>
                    <span class="sep_line sep_bottom"></span>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps)(Event);
