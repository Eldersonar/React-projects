import React, { useState, useRef } from 'react';
import './App.css';
import Movies from './Movies';

// function App() {
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: 'angry birds' }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    let movieName = document.getElementById('input').value
    this.setState({ name: movieName })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <header>
          <h1>OMDB Movie Awards</h1>
          <input ref={this.movieNameRef} type="text" name="movieName" id="input" />
          <button onClick={this.handleSearch}>Search</button>
        </header>
        <main>
          <div id="movieList">
            <Movies name={this.state.name} />
          </div>
          <div id="awards"></div>
        </main>
        <footer></footer>
      </div>
    )
  }

}

// export default App;
