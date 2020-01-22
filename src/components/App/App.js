import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header';
import Tabs from '../Tabs';
import './App.scss';
import PlanetCard from '../PlanetCard';
import SwapiService from '../../Services/SwapiService';


function App() {

    const [planetId, setPlanetId] = useState(null);
    const getRandomId = () => {
        const randomId = Math.floor(Math.random() * 23);
        setPlanetId (randomId) ;
    }


    useEffect(() => {
        getRandomId()
    }, []);

    return (
        <>
            <Header/>
            <Container className="mt-5">
                {planetId}
                <PlanetCard planetId={planetId}/>
            </Container>
            {/*<Tabs/>*/}
        </>
    );
}

export default App;
