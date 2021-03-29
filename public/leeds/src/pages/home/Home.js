import React from 'react'

import { NavLink } from 'react-router-dom';
import { Container, Jumbotron, Button} from 'react-bootstrap';

import '../../css/home.css';

export default function Home (props) {
    const appLinks = props.links.map((link, i) => {
        return (
            <NavLink key={i} to={link.link}>
                <Button variant="secondary">{link.name}</Button>
            </NavLink>
        )
    });

    const jumboStyle = {
        marginTop: '2em',
        marginBottom: '15vh',
        textAlign: 'center'
    }

	return (
		<Container>
            <Jumbotron style={jumboStyle}>
                <h1>LEEDS maternal service</h1>
                <p>
                    Welcome to Leeds medical services management. Some services are currently unavailable at the moment.
                    Follow the links below.
                </p>
                <p className="lnk-btn">
                    {appLinks}
                </p>
            </Jumbotron>
        </Container>
	);
};
