import React, {useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import PlanetCard from '../PlanetCard';
import TabLists from "../TabLists";

import './Tabs.scss'

export default function Tabs() {
    const [planetId, setPlanetId] = useState(2);
    const getPlanetId=(id)=>{
        setPlanetId(id)
    };
    return (
        <Container className="mt-5">
            <Row>
                <Col sm={3}>
                    <TabLists getPlanetId={getPlanetId}/>
                </Col>
                <Col sm={9}>
                    <PlanetCard planetId={planetId}/>
                </Col>
            </Row>
        </Container>
    )
}
