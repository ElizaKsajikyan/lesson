import React from 'react';
import {Card, Col} from 'react-bootstrap'

export default function PlanetCard({planets}) {
    console.log(planets);
    return (
        <Card>
            <Card.Body className="d-flex">
                <Col sm={3}>
                    <Card.Img variant="top" src="holder.js/100px180"/>
                </Col>
            <Col sm={9}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Col>
            </Card.Body>
        </Card>
    )
}