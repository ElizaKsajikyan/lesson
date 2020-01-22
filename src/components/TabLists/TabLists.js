import React, {useEffect, useState} from 'react';
import {ListGroup} from 'react-bootstrap'
import SwapiService from '../../Services/SwapiService';

const data = new SwapiService();

export default function TabLists() {
    const [planets, setPlanets] = useState(null);

    const getAllPlanets=()=> {
        data.getPlanets().then(val => {
            setPlanets(val);
        });
    }

    let planet;
    if (planets) {
        planet = planets.map(planet => {
            let splitUrl = planet.url.split('/'),
                id = splitUrl[splitUrl.length - 2];
            let link = `#${id}`;
            return <ListGroup.Item action href={link} key={id}>
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
