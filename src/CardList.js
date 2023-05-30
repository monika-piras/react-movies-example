import React from 'react';
import Card from './Card';


const CardList = ({movies}) => {
    
    return (
        <div>
            {
                movies.map((item, i) => {
                    return <Card 
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image.medium}
                        />
                })
            }
        </div>
    );
}


export default CardList;