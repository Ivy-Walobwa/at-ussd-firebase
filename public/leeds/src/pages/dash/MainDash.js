import React from 'react'

import { Container, Row  } from 'react-bootstrap';

import FilterSection from './Filters';
import NamesSection from './Names';

import '../../css/dash.css';


export default function Dash () {
    return (
        <Container fluid>
            <Row>
                <FilterSection />
                <NamesSection />
            </Row>
        </Container>
    )
};
