import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const MovieDetail = () => {
  const [movie, setMovie] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getMovieDetails();
  }, []);

  function getMovieDetails() {
    // fetch(`https://api.tvmaze.com/shows/${id}`)
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        console.log(data);
      })
  }

  if (!movie.name) {

    return (
      <div>
        loading
      </div>
    )
  } else {

    const newStr = movie.summary.replace(/(<([^>]+)>)/ig, ''); // adjustment to resolve API problem with html tags on string

    function rendercast() {

      const actors = movie._embedded.cast;
      const renderList = actors.map((item, index) => {
        return (
          <div key={index}>
            <img alt='movie' src={item.person.image?.medium} />
            <h3>{item.person.name}</h3>
            <p>as: {item.character.name}</p>
            <p>{item.person.country?.name}</p>
          </div>
        )
      }
      );

      return (
        <div className='mt5'>
          <h2>Cast:</h2>
          {renderList}
        </div>
      )
    }

    return (

      <div className='bg-light-green dib br3 pa3 ma5 bw2 shadow-5'>

        <div className='db'>
          <div className='fl mr3'>
            <img alt='movie' src={movie.image.medium} />
          </div>
          <div className='pa3'>
            <h1>{movie.name}</h1>
            <p>{newStr}</p>
            <p>Language: {movie.language}</p>
            <h3>{movie.genres.join(', ')}</h3>
          </div>
        </div>

        <div className='db'>
          {rendercast()}
        </div>
      </div>

    )
  }

}


export default MovieDetail;