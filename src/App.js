import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import SearchList from './SearchList';
import MovieDetails from './MovieDetails';



class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchListMovies: [],
      searchField: '',
      movieDetails: 'movie details here'
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
      .then(items => { this.setState({ searchListMovies: items }) });
  }


  render() {

    if (this.state.movies.length === 0) {
      return <h1>Loading</h1>
    }
    return (
      <div className="App">
        <h1>ReactMoviesApp</h1>
        
        <MovieDetails movie={this.state.movieDetails}/>

        <SearchBox searchChange={this.onSearchChange} />

        <SearchList searchListMovies={this.state.searchListMovies} />

        <CardList movies={this.state.movies} />

      </div>
    );


  }
}

export default App;