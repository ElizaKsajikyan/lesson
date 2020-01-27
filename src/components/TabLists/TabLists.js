import React, {useEffect, useState} from 'react';
import {ListGroup} from 'react-bootstrap'
import SwapiService from '../../Services/SwapiService';
import './TabLists.scss';

const data = new SwapiService();

export default function TabLists({getPlanetId}) {
    const [planets, setPlanets] = useState(null);
    const [stateId, setStateId] = useState(2);

    const getAllPlanets = () => {
        data.getPlanets().then(val => {
            setPlanets(val);
        });
    };
    const handelClick = (id) => {
        setStateId(id);
        getPlanetId(id)
    };
    let planet;
    if (planets) {
        planet = planets.map(planet => {
            let splitUrl = planet.url.split('/'),
                id = splitUrl[splitUrl.length - 2];
            const active = stateId === id ? 'active checkedItem' : '';
            return <ListGroup.Item action variant={active} key={id} onClick={() => {
                handelClick(id)
            }}>
                {planet.name}
            </ListGroup.Item>
        })
    }

    useEffect(() => {
        getAllPlanets();
    }, []);

    return (
        <ListGroup>
            {planet}
        </ListGroup>
    )
}
