import React from 'react';
import {Card, Col} from 'react-bootstrap'


const PlanetCardScreen = ({planet,planetId}) => {
    console.log(planet,planetId);
    return (
        <Card.Body className="d-flex">
            <Col sm={3}>
                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}/>
            </Col>
            <Col sm={9}>
                {/*<Card.Title>{planet.name}</Card.Title>*/}
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Col>
        </Card.Body>
    )
};
export default PlanetCardScreen;
