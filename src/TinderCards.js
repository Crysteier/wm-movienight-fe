import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import "./TinderCards.css";


function TinderCards(props) {
    const [people, setPeople] = useState([
        {
            name: 'lacko makco',
            url: 'https://i.imgur.com/dnSU231.png'
        },
        {
            name: 'peti petyko',
            url: 'https://i.imgur.com/6HhUZTF.jpeg'
        },
        {
            name: 'adam batyam',
            url: 'https://i.imgur.com/dp8GGOg.jpeg'
        },
        {
            name: 'lilla billa',
            url: 'https://i.imgur.com/uPErBKg.jpeg'
        }
    ]);

    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => {
                setPeople(snapshot.docs.map(doc => doc.data()));
            });

        return () => {
            unsubscribe();
        }

    }, []);


    return (
        <div>
            <h1>Movie cards here!</h1>
            <div className='cards__container'>
                {people.map(person => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={["up", "down"]}>
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;