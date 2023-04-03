import React, {Component} from 'react';
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
    this.setState({searchField: event.target.value})
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    console.log(filteredMovies);
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <h1>ReactMoviesApp</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList movies={this.state.movies} />
      </div>
    );
  }

 


}
export default App;
