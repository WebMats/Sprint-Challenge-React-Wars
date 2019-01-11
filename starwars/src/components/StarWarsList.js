import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

import './StarWars.css';


const starWars = (props) => (
        <React.Fragment>
                <ul>
                        {props.characters.map(char => <li key={new Date(char.created).valueOf()}><StarWarsCharacter>{char.name}</StarWarsCharacter></li>)}
                </ul>
                {props.prev === null ? null : <button className="PrevBtn" onClick={() => props.getMore(props.prev)}>Prev Characters</button>}
                {props.next === null ? null : <button className="NextBtn" onClick={() => props.getMore(props.next)}>More Characters</button>}
        </React.Fragment>
        
)

export default starWars;