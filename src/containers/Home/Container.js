import React, { Component } from 'react';
import { UpcomingEvent } from '../../components';
import { connect } from 'react-redux';
import { getUpcomingEvents } from '../../utils';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="billboard">
                    <div className="wrapper">
                        <div className="caption">
                            <p>Caring for your fertility</p>
                            <p>Pat Martinsen</p>
                        </div>
                    </div>
                </section>
                <section className="features">
                    <div className="wrapper">
                        <h2>Upcoming Events</h2>
                        {this.props.upcoming.map((event, i) => <UpcomingEvent key={i} event={event} />)}
                    </div>
                </section>

                <section className="info">
                    <div className="info_pic" />
                    <div className="info_details">
                        <h3>FertilityCare System Facts</h3>
                        <p>
                            The FertilityCare System teaches a woman and couple to identify the fertile
                    and infertile days in her cycle. The couple then uses this information to plan
                    or avoid a pregnancy. The System is based on the observation and tracking of
                    physical signs a woman has when she is fertile.
                </p>
                        <a href="/info">Learn More<span>→</span></a>
                    </div>
                </section>

                {/* <section className="cta">
                    <h3>Contact &amp; Register</h3>
                    <p>Contact us or register to learn more</p>
                    <a href="" className="cta_btn">Contact Us!</a>
                    <span className="cta_sep"></span>
                </section> */}
            </div >
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    upcoming: getUpcomingEvents(state.events, 6)
});

export default connect(mapStateToProps)(Home);
