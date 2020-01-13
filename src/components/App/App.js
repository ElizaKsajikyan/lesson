import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header';
import Tabs from '../Tabs';
import './App.scss';
import PlanetCard from '../PlanetCard';
import SwapiService from '../../Services/SwapiService';

function App() {
    const [planets, setPlanets] = useState(null);

    return (
        <>
        <Header/>
        <Container className="mt-5">
            <PlanetCard planets={planets}/>
        </Container>
        <Tabs/>
        </>
    );
}

export default App;
