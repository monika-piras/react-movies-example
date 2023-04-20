import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';


const Card = ({ id, name, image }) => {

    const navigate = useNavigate();

    const showMovieDetails = (id) => {
        navigate(`/moviedetail/${id}`);
    }

    return (
        <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 cardStyle'>

            <img alt='movies' src={image} className='imgStyle' />
            <div>
                <h2 className='titleStyle'>{name}</h2>
                <p>{id}</p>
                <button onClick={() => showMovieDetails(id)}>Click here</button>
            </div>
        </div>
    )
}


export default Card;