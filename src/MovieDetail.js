import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const MovieDetail = () => {

  const [movie, setMovie] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getMovieDetails();
  }, []);


  function getMovieDetails() {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        console.log(data);
      });
  }

  if (!movie.name) {
    return (
      <div>
        loading
      </div>
    )
  } else {
    return (

      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        <div className='fl mr3'>
          <img alt='movies' src={movie.image.medium} />
        </div>
        <div className='pa3'>
          <h1 className='titleStyle'>{movie.name}</h1>
          <p className=''>{movie.summary}</p>
          <p>Language: {movie.language}</p>
          <h3>{movie.genres}</h3>
        </div>
      </div>

    )
  }

}


export default MovieDetail;