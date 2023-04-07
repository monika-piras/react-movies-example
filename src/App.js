import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

// function App() {
//   return (
//     <div className="App">
//       <h1>ReactMoviesApp</h1>
//       <Card id = {movies[0].id} name = {movies[0].name}/>
//     </div>
//   );
// }


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(items => { this.setState({ movies: items }) });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })

  }

  render() {
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if (this.state.movies.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="App">
          <h1>ReactMoviesApp</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList movies={filteredMovies} />
        </div>
      );
    }

  }




}
export default App;
