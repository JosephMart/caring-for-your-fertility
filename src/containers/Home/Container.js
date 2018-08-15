import React, { Component } from 'react';
import { UpcomingEvent } from '../../components';
import { connect } from 'react-redux';
import { getUpcomingEvents } from '../../utils';
import { Link } from 'react-router-dom';
import { ENGLISH, SPANISH, TM, FC } from '../../constants';


const TEXT = {
    [ENGLISH]: {
        upcomingTitle: 'Upcoming Events',
        factsTitle: 'FertilityCare System Facts',
        facts: (<p>
                The {FC}{TM} System teaches a woman and couple to identify the fertile
                and infertile days in her cycle. The couple then uses this information to plan
                or avoid a pregnancy. The System is based on the observation and tracking of
                physical signs a woman has when she is fertile.
            </p>),
        infoLink: 'Learn More',
    },
    [SPANISH]: {
        upcomingTitle: 'Próximos Eventos',
        factsTitle: 'FertilityCare System',
        facts: (<p>
                El {FC}{TM} System nseña a la mujer y a la pareja a identificar los días fértiles
                e infértiles del ciclo menstrual. La pareja entonces usa esta información para
                planear o evitar un embarazo. El Sistema se basa en la observación y registro de
                los signos físicos que tiene una mujer cuando es fértil. El Sistema tiene un 99.6
                &percnt; de efectividad para evitar el embarazo y un grado muy alto de precisión
                para lograr el embarazo. Un Meta-Análisis de cinco estudios de su efectividad ha sido
                publicado en el "Journal of Reproductive Medicine".
            </p>),
        infoLink: 'Aprende Más',
    },
};

class Home extends Component {
    render() {
        const {language} = this.props;
        const text = TEXT[language];

        return (
            <div>
                <section className="billboard">
                    <div className="wrapper">
                        <div className="caption">
                            <p>Caring for your fertility</p>
                            <p>Pat Martinsen</p>
                            <br />
                            <Link to="/info">{text.infoLink}</Link>
                        </div>
                    </div>
                </section>
                <section className="features">
                    <div className="wrapper">
                        <h2>{text.upcomingTitle}</h2>
                        {this.props.upcoming.map((event, i) => <UpcomingEvent key={i} event={event} language={language} />)}
                    </div>
                </section>

                <section className="info">
                    <div className="info_pic" />
                    <div className="info_details">
                        <h3>{text.factsTitle}</h3>
                        {text.facts}
                        <Link to="/info">{text.infoLink}<span>→</span></Link>
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
    upcoming: getUpcomingEvents(state.events, 6),
    language: state.language,
});

export default connect(mapStateToProps)(Home);
