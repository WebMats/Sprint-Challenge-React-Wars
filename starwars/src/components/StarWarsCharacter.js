import React from 'react';

import './StarWars.css';


const starWarsCharacter = (props) => <p className="Character">{props.children}</p>

export default starWarsCharacter;