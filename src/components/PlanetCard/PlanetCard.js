import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import PlanetCardScreen from './PlanetCardScreen'
import SwapiService from '../../Services/SwapiService';

export default function PlanetCard({planetId}) {
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const  getPlanet =  (id) => {
            const data = new SwapiService();
            if(id){
                data.getPlanet(id).then(val => {
                    setPlanet(val);
                    setLoading(false)
                });
            }

        };
        getPlanet(planetId)
    },[planetId]);

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
