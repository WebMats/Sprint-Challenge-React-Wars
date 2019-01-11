import React, { Component } from 'react';

import StarWarsList from './components/StarWarsList';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    let characters = null
    if (this.state.starwarsChars.length !== 0) {
      characters = this.state.starwarsChars.map(char => <StarWarsList key={new Date(char.created).valueOf()} >{char.name}</StarWarsList>)
    }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {characters}
      </div>
    );
  }
}

export default App;
