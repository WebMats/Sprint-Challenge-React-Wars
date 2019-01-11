import React from 'react';

import './StarWars.css';


const starWars = (props) => {

        return <p className="Character">{props.children}</p>
}

export default starWars;