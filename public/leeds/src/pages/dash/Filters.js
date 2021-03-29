import React from 'react';


import { Col, Form, Button } from 'react-bootstrap';


function FormSelectOptions (props) {
    return <option value={props.value}>{props.name}</option>
};


export default function FilterSection () {
    const statuses = [
        {name: "-- Choose a status", value: 0},
        {name: "Okay", value: 1},
        {name: "Semi-okay", value: 2},
        {name: "Not-okay", value: 3},
    ].map((option, i) => <FormSelectOptions key={i} {...option} />);

    const locations = [
        {name: "-- Choose a location --", value: 0},
        {name: "Nairobi", value: 1},
        {name: "Nakuru", value: 2},
        {name: "Mombasa", value: 3},
        {name: "Uasin Gishu", value: 4}
    ].map((option, i) => <FormSelectOptions key={i} {...option} />);

    const ageGroups = [
        {name: "-- Choose an age group --", value: 0},
        {name: "18 years & below", value: 1},
        {name: "19 - 25 years", value: 2},
        {name: "26 - 35 years", value: 3},
        {name: "36 - 50 years", value: 4}
    ].map((option, i) => <FormSelectOptions key={i} {...option} />);


    return (
        <Col id="s-f" md={3}>
            <h3 className="text-center">Filters</h3>
            <Form>
                <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" name="status">
                        {statuses}
                    </Form.Control>
                </Form.Group>
                
                <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select" name="location">
                        {locations}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control as="select" name="age">
                        {ageGroups}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Button disabled variant="outline-dark" type="submit">filter</Button>
                </Form.Group>
            </Form>

        </Col>
    )
};
