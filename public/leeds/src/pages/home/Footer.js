import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../../css/n_footer.css';


function ContactItem (props) {
    const {name, detail} = props;

    return (
        <dl className="contact-list">
            <dt>{name}:</dt>
            <dd><a href={detail.link}>{detail.text}</a></dd>
        </dl>
    )
};

export default function Footer (props) {
    const fStyle = {
        background: '#343a40',
        paddingTop: '3em',
        paddingBottom: '3em',
    };

    const year = (() => {
        const day = new Date();
        return day.getFullYear().toString();
    })();

    const contactItems = [
        {
            name: 'Address',
            detail: {
                text: '*',
                link: '#'
            }
        },
        {
            name: 'Email',
            detail: {
                text: 'leedsems@gmail.com',
                link: 'mailto:leedsems@gmail.com'
            }
        },
        {
            name: 'Mobile Phone Number',
            detail: {
                text: '0700000000',
                link: 'tel:0700000000'
            }
        }
    ].map((item, i) => <ContactItem key={i} {...item}/>);

    const appLinks = props.links.map((link, i) => <li key={i}><NavLink activeStyle={props.linkStyle} to={link.link}>{link.name}</NavLink></li>)

    return (
        <footer className="section footer-classic context-dark bg-image" style={fStyle}>
            <Container>
                <Row>
                    <Col md={4} xl={5}>
                        <div className="pr-xl-4">
                            <p>We are an medical emergency service, dedicated to getting a pregnant woman the care she deserves to ensure she survives giving rise to new life.</p>
                            <p className="rights"><span>&copy; </span><span>{year}</span><span> </span><span>LEEDS</span><span>. </span><span>All Rights Reserved</span> </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h5>Contacts</h5>
                        {contactItems}
                    </Col>

                    <Col md={4} xl={3}>
                        <h5>Links</h5>
                        <ul className="nav-list">
                            {appLinks}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

