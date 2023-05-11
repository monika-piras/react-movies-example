import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';


const Card = ({ id, name, image }) => {

    const navigate = useNavigate();

    const showMovieDetails = (id) => {
        navigate(`/moviedetail/${id}`);
    }

    return (
        <div onClick={() => showMovieDetails(id)}
            className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 cardStyle pointer'>

            <img alt='movie' src={image} className='imgStyle' />
            <div>
                <h2 className='titleStyle'>{name}</h2>
            </div>
        </div>
    )
}


export default Card;