import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import PlanetCardScreen from './PlanetCardScreen'
import SwapiService from '../../Services/SwapiService';

export default function PlanetCard({planetId}) {
    console.log(planetId,'dfgsj');
    const data = new SwapiService();
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    const getPlanet = (id) => {
        data.getPlanet(id).then(val => {
            setPlanet(val);
            console.log('id');
            setLoading(false)
        });
    };
    useEffect(() => {
        console.log(planetId,'dfgsj');
        getPlanet(planetId)
    }, [])
    let cardContent;
    if (loading) {
        cardContent = <h1>loading....</h1>;
    } else {
        cardContent = <Card>
            <PlanetCardScreen planet={planet} planetId={planetId}/>
        </Card>
    }
    return (
        <>
            {cardContent}
        </>
    )
}
