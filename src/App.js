import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import SearchList from './SearchList';
import FooterComponent from './FooterComponent';
import Scroll from './Scroll';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchListMovies: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(items => { this.setState({ movies: items }) });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    fetch(`https://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then(response => response.json())
      .then(items => {
        this.setState({ searchListMovies: items });
        document.querySelector('.ScrollStyle').scrollTo(0, 0);
      });
  }



  render() {

    if (this.state.movies.length === 0) {
      return <h1>Loading</h1>
    }
    return (
      <div className="App">
        <h1>ReactMoviesApp</h1>

        <SearchBox searchChange={this.onSearchChange} />

        <Scroll>

          <SearchList searchListMovies={this.state.searchListMovies} />

          <CardList movies={this.state.movies} />

        </Scroll>

        <FooterComponent />

      </div>
    );

  }
}

export default App;