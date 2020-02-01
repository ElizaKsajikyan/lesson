import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header';
import Tabs from '../Tabs';
import './App.scss';
import PlanetCard from '../PlanetCard';


function App() {

    const [planetId, setPlanetId] = useState(null);
    const getRandomId = () => {
        const randomId = Math.floor(Math.random() * 23);
        setPlanetId (randomId) ;
    };

    useEffect(() => {
        setInterval(()=>{
            getRandomId()
        },4000)
    }, []);

    return (
        <>
            <Header/>
            <Container className="mt-5">
                <PlanetCard planetId={planetId}/>
            </Container>
            <Tabs/>
        </>
    );
}

export default App;
