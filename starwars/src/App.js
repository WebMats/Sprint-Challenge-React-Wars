import React, { Component } from 'react';

import StarWarsList from './components/StarWarsList';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      prev: ''
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
        this.setState({ starwarsChars: data.results, next: data.next, prev: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getMoreCharacterDataHandler = (URL) => {
    this.getCharacters(URL);
  }

  render() {
    let characters = null
    if (this.state.starwarsChars.length !== 0) {
      characters = this.state.starwarsChars.map(char => <li key={new Date(char.created).valueOf()}><StarWarsList>{char.name}</StarWarsList></li>)
    }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul>
          {characters}
        </ul>
        <button onClick={() => this.getMoreCharacterDataHandler(this.state.next)}>Get More Characters</button>
        {this.state.prev === null ? null : <button onClick={() => this.getMoreCharacterDataHandler(this.state.prev)}>Get Prev Characters</button>}
      </div>
    );
  }
}

export default App;
