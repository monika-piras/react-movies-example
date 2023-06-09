import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MovieDetail.css';
import FooterComponent from './FooterComponent';

const MovieDetail = () => {
  const [movie, setMovie] = useState({});

  let { id } = useParams();

  const navigate = useNavigate();


  useEffect(() => {
    getMovieDetails();
  }, []);

  function getMovieDetails() {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        console.log(data);
      })
  }

  function goBack() {
    navigate(`/`);
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
          <div key={index} className='dit ma2 actorCardStyle'>
            <img alt='movie poster' src={item.person.image?.medium} />
            <h3>{item.person.name}</h3>
            <p>as: {item.character.name}</p>
            <p>{item.person.country?.name}</p>
          </div>
        )
      }
      );

      return (
        <div>
          <h2>Cast:</h2>
          {renderList}
        </div>
      )
    }

    return (
      <div>
        <div className='tc'>
          <h1>Movie Detail</h1>
        </div>

        <button className='ma2 mh3 pa2 bg-light-green br3 pointer' onClick={() => goBack()}>
          <div className='buttonStyle'>
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
            Go Back
          </div>
        </button>
        <div className='bg-light-green flex flex-column pa3 ma3 br3 bw2 shadow-5'>
          <div className='flex-auto flex flex-column flex-row-ns'>
            <div>
              <img alt='movie' src={movie.image.medium} className='ma2 mw-none' />
            </div>
            <div className='pa3'>
              <h1>{movie.name}</h1>
              <p className='lh-copy'>{newStr}</p>
              <p>Language: {movie.language}</p>
              <h3>{movie.genres.join(', ')}</h3>
            </div>
          </div>

          <div className='db'>
            {rendercast()}
          </div>
        </div>

        <FooterComponent />
      </div>
    )
  }

}


export default MovieDetail;