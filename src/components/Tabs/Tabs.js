import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import PlanetCard from '../PlanetCard';
import TabLists from "../TabLists";

import './Tabs.scss'

export default function Tabs() {
    return (
        <Container className="mt-5">
            <Row>
                <Col sm={3}>
                    <TabLists/>
                </Col>
                <Col sm={9}>
                    <PlanetCard/>
                </Col>
            </Row>
        </Container>
    )
}
