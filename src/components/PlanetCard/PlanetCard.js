import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import PlanetCardScreen from './PlanetCardScreen'
import SwapiService from '../../Services/SwapiService';

export default function PlanetCard({planetId,error}) {
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    const data = new SwapiService();
    const  getPlanet = async (id) => {
        if(id){
            const planet = await data.getPlanet(id);
            setPlanet(planet);
            setLoading(false)
        }

    };
    useEffect(() => {
        getPlanet(planetId)
    },[planetId]);

    let cardContent;
    if (loading) {
        cardContent = <h1>loading....</h1>;
    }
    else {
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
