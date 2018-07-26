import React, {Component} from 'react';
import {Schedule} from 'primereact/schedule';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
import {Fieldset} from 'primereact/fieldset';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import August from './August';
import {ScrollPanel} from 'primereact/scrollpanel';
import image from './image.jpg';
import images from './images.jfif';
import logo from './logo.svg';


class Main extends Component {
    render() {
        return (

            <div>

                <div>

                    <div className="con"><h5> Contact Us: +919385756764   <br/><u> Email: cognizant @outlook.com</u></h5>
                    </div>
                </div>
                <div className="content-section" >

                    <h1>Events</h1>
                </div>

                <div className="ui-g">
                    <div className="ui-g-12">
                        <div className="ui-g-5"><ul>
                            <li><h3><Link to ="/new">NEWS & PRESS RELEASES</Link></h3></li>
                            <li><h3><Link to ="/part">CONFERENCES & MEETINGS</Link></h3></li>
                            <li><h3><Link to ="/talent">PRODUCT LAUNCHES</Link></h3></li>
                            <li><h3><Link to ="/women">WOMEN EMPOWERMENT</Link></h3></li>
                            <li><h3><Link to ="/cog">COGNIZANT GROWTH STORY</Link></h3></li>
                        </ul></div>
                        <div className="ui-g-7  ">
                            <h3>About</h3>
                            <ScrollPanel style={{ width: '86%', height: '200px' }} className="custombar1">
                                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                    In the Corporate Actions, you can find all you need to know and learn about Corporate Actions, like for example a list of all Corporate Actions Events, a Corporate Actions Glossary, Definitions, the Corporate Actions Life Cycle, the Industry, Books, Courses and Education, Risks, Effects of Corporate Actions on the share price, Regulations, Proxy Voting, Claims handling, Tax Consequences and links to other Corporate Actions sites.In the Corporate Actions Toolbox you can find all you need to know and learn about Corporate Actions, like for example a list of all Corporate Actions Events, a Corporate Actions Glossary, Definitions, the Corporate Actions Life Cycle, the Industry, Books, Courses and Education, Risks, Effects of Corporate Actions on the share price, Regulations, Proxy Voting, Claims handling, Tax Consequences and links to other Corporate Actions sites.</div>
                            </ScrollPanel>
                        </div>
                    </div>
                </div>

                <div className="ui-g">
                    <img alt="Galleria 2" src={image} style={{ width: '100%' }} />

                </div>
                <Accordion >
                    <AccordionTab header="Cultural Fest">
                        <h1 className="header">Cultural fest Details: </h1>
                        <div className="ui-g">
                            <div className="ui-g-6"><h3>Date</h3></div>
                            <div className="ui-g-6"><h3>26 November</h3></div>
                        </div>
                        <div className="ui-g">
                            <div className="ui-g-6"><h3>Venue</h3></div>
                            <div className="ui-g-6"><h3>Bangalore</h3></div>
                        </div>
                        <div className="ui-g">
                            <div className="ui-g-6"><h3>Timing</h3></div>
                            <div className="ui-g-6"><h3>9: 00AM</h3></div>
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Sports Event">
                        <div>Date of inception is 6 October.<br/>
                            Venue: Eden Gardens.<br/>
                            Timings: 9: 00AM.</div>
                    </AccordionTab>
                    <AccordionTab header="Board of directors meeting">
                        <h5>Date of inception is 6 December.<br/>
                            Venue: Auditorium.<br/>
                            Timings: 9: 00AM.</h5>
                    </AccordionTab>
                </Accordion>
            </div>

        );
    }
}
export default Main;