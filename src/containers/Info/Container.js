import React, { Component } from 'react';
import './styles.css';

export default class Info extends Component {
    render() {
        const FertilityCare = <b>Fertility<i>Care</i></b>;
        const tradeMark = <span>™</span>;
        return (
            <section className="info-page">
                <div className="wrapper">
                    <h1>{FertilityCare}{tradeMark} System</h1>

                    <h2>{FertilityCare}{tradeMark} System Facts</h2>
                    <p>
                        The {FertilityCare}{tradeMark} System teaches a woman and couple to identify
                        the fertile and infertile days in her cycle. The couple then uses
                        this information to plan or avoid a pregnancy. The System is based
                        on the observation and tracking of physical signs a woman has when
                        she is fertile.
                    </p>
                    <p>
                        The system has a 99.6% degree of effectiveness to avoid pregnancy
                        and a very high degree of accuracy in achieving pregnancy.
                        A Meta Analysis of five effectiveness studies was
                        published in the "Journal of Reproductive Medicine"
                    </p>

                    <h2>The {FertilityCare}{tradeMark} System is more than Natural Birth Control</h2>
                    <p>
                        Couples report the {FertilityCare}{tradeMark} System is so much more than natural birth
                        control. Birth control has only one purpose, preventing pregnancy.
                        The {FertilityCare}{tradeMark} System is also very effective to achieve pregnancy. As an
                        additional benefit, couples report that their communication increases.
                        Women express appreciation that this method also involves the couple
                    </p>
                    <p>
                        {FertilityCare}{tradeMark} System works in union with NaProtechnology helping women/couples with:
                    </p>
                    <ul>
                        <li>Family planning</li>
                        <li>Chronic discharges</li>
                        <li>Targeted hormone evaluation</li>
                        <li>Targeted hormone replacement</li>
                        <li>Identify ovarian cysts</li>
                        <li>The effects of stress</li>
                        <li>Infertility</li>
                        <li>Miscarriages</li>
                        <li>Premenstrual syndrome</li>
                        <li>Chronic infections</li>
                        <li>Other reproductive disorders</li>
                        <li>Prematurity prevention</li>
                        <li>Abnormal bleeding</li>
                        <li>And more...</li>
                    </ul>

                    <h2>CREIGHTON MODEL <br /> {FertilityCare}{tradeMark} <i>System and Infertility</i></h2>
                    <p>
                        {FertilityCare}{tradeMark} System provides new hope for couples who are going
                        through the experience of infertility or low fertility. Not only does this
                        system inform couples of when they are most fertile, it also aids in identifying
                        factors that may be contributing to infertility. Women no longer rely on the
                        calendar to determine where they are in their cycle resulting in more accurate diagnostic testing.
                    </p>

                    <h2>{FertilityCare}{tradeMark} System is easy to learn</h2>
                    <p>
                        The first step to learning the method is to attend an Introductory Session. These Sessions
                        can also be scheduled to accommodate an individual's needs and schedule. At the end of this
                        Session the couple decides if they want to continue with instruction. Couples are then given a
                        Personal Fertility Kit that contains a book, chart, and everything they need to begin tracking
                        of their fertility. There is a _______ fee for the kit.
                    </p>
                    <p>
                        The couple is then scheduled for a Follow-Up appointment. These sessions are private appointments
                        structured for the purpose of support, learning, reviewing charting, and assessing instructions.
                    </p>
                    <p>
                        There is a fee of _____ per session. The Follow-Up sessions are every two weeks during the first
                        two months of learning and then are less frequent after that. There are 8 Follow-up sessions over
                        a one-year period. All services are private and confidential. Daytime and evening hours are available.
                        Long distance learning is available through phone, mail, fax, or e-mail when it is not possible to come
                        in person for instruction. The method is affordable to anyone and may be reimbursed by some HMOs and
                        third party payers.
                    </p>

                    <h2> Basic Facts</h2>
                    <ul>
                        <li>Regular cycles are not necessary to use the FertilityCare™ System</li>
                        <li>Women ovulate during one 24-hour period in each cycle and he egg lives for only 12 to 24 hours if there is no conception.</li>
                        <li>Women will experience a very definite symptom when they ovulate and for several days before, this is the time when the couple is fertile and pregnancy can occur. A woman is taught how to observe and interpret this biomarker and together the couple is taught how to use the system.</li>
                        <li>By observing and tracking this biomarker the couple can determine the beginning and end of fertility regardless of cycle regularity.</li>
                        <li>A woman, who is breastfeeding, coming off oral contraceptives, in long cycles, or in pre-menopause can use the method with a very high degree of effectiveness. It was often thought impossible to use a natural method in these reproductive categories.</li>
                    </ul>

                    <h2>FertilityCare System is the First Step to NaPro<b>TECHNOLOGY</b>®.</h2>
                    <p>
                        Through NaPro<b>TECHNOLOGY®</b>, a new reproductive science that has its
                        roots in the CREIGHTON MODEL {FertilityCare}{tradeMark} System, Physicians, Nurse Practitioners, Physician Assistants and
                        Midwives can assist women with infertility, repeated miscarriages, PMS, Ovarian cysts, menopause, and a variety of reproductive issues. The standardized charting provides a tool to identify indicators of problems. When these are identified treatments can be prescribed that are founded in an understanding of what is actually occurring in the woman's cycle.
                    </p>

                    <h2>Couples report that the FertilityCare System benefits the relationship</h2>
                    <p>Couples report an increase in communication and a growth in the</p>
                    <p><b>S</b>piritual</p>
                    <p><b>P</b>hysical</p>
                    <p><b>I</b>ntellectual,</p>
                    <p><b>C</b>ommunicative/ Creative</p>
                    <p><b>E</b>motional dimensions their sexuality and relationship.</p>
                    <div className="center">
                        <h3>For more information on the</h3>
                        <h3>CREIGHTON MODEL</h3>
                        <h3>FertilityCare System go to:</h3>
                        <h3><a href="http://www.fertilitycare.org" target="__blank">www.fertilitycare.org</a></h3>
                        <h3><a href="http://www.creightonmodel.com" target="__blank">www.creightonmodel.com</a></h3>
                    </div>
                </div>
            </section>
        );
    }
}