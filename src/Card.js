import React from 'react';


const Card = ({id, name, image}) => {


    // debugger;
    
    
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='movies' src={image} />
            <div>
                <h2>{name}</h2>
           
                <p>{id}.................</p>
            </div>
        </div>
    )
}


export default Card;


