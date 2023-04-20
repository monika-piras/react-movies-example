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

      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 cardStyle'>

        MOVIE DETAILS COMPONENT

        <p>ID: {movie.id} </p>


        <p>{movie.name}</p>
      </div>
    )
  }

}


export default MovieDetail;