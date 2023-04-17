import React from 'react';
import './Card.css';
import MovieDetails from './MovieDetails';

const Card = ({id, name, image}) => {

 function showMovieDetails(id) {
    console.log("button works", id);
    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then(response => response.json())
    .then(items => console.log(items));
 }
  

    return (
        <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 cardStyle'>
            {/* grow */}
            <img alt='movies' src={image} className='imgStyle'/>
            <div>
                <h2 className='titleStyle'>{name}</h2>
                <p>{id}</p>
                <button onClick={()=>showMovieDetails(id)}>Click here</button>
            </div> 
        </div>
    )
}


export default Card;