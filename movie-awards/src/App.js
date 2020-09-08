import React from 'react';
import './App.css';
import Movies from './Movies';
import Awards from './Awards';

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
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <header>
          <h1>OMDB Movie Awards</h1>
          <form id="inputWrapper" onSubmit={this.handleSubmit}>
            <input ref={this.movieNameRef} type="text" name="movieName" id="input" />
            <button id="searchBtn" onClick={this.handleSearch}>SEARCH</button>
          </form>
        </header>
        <main>
          <div id="movieList">
            <Movies name={this.state.name} />
          </div>
          <div id="awards">
            <Awards />
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }

}

// export default App;
