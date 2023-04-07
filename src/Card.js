import React from 'react';
import './Card.css';

const Card = ({id, name, image}) => {


    // debugger;
    
    
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 cardStyle'>
            <img alt='movies' src={image} className='imgStyle'/>
            <div>
                <h2 className='titleStyle'>{name}</h2>
           
                <p>{id}.................</p>
            </div>
        </div>
    )
}


export default Card;


