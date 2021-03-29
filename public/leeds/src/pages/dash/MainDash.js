import React from 'react'

import { Container, Row  } from 'react-bootstrap';

import FilterSection from './Filters';
import NamesSection from './Names';


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
