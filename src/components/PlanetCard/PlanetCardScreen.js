import React from 'react';
import {Card, Col,ListGroup} from 'react-bootstrap'


const PlanetCardScreen = ({planet,planetId}) => {
    const {
        name,
        population,
        rotationPereiud,
        diameter,
    } = planet;
    return (
        <Card.Body className="d-flex">
            <Col sm={3}>
                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}/>
            </Col>
            <Col sm={9}>
                <Card.Title>{name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Population: {population}</ListGroup.Item>
                        <ListGroup.Item>Rotation Pereiud: {rotationPereiud}</ListGroup.Item>
                        <ListGroup.Item>Diameter: {diameter}</ListGroup.Item>
                    </ListGroup>
            </Col>
        </Card.Body>
    )
};
export default PlanetCardScreen;
