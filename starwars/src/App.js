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
    let loading = this.state.starwarsChars.length === 0;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {loading ? null : <StarWarsList prev={this.state.prev} next={this.state.next} getMore={this.getCharacters} characters={this.state.starwarsChars} />}
      </div>
    );
  }
}

export default App;
