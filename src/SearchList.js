import React from 'react';
import Card from './Card';


const SearchList = ({ searchListMovies }) => {

    function getImagePath(movieObject) {
        if (
            movieObject.show.image &&
            movieObject.show.image.medium
        ) return movieObject.show.image.medium;
        
        return '';
    }

    return (
        <div>
            {
                searchListMovies.map((item, i) => {
                    const image = getImagePath(item);
                    if (image) {
                        return (
                            <Card
                                key={i}
                                id={item.show.id}
                                name={item.show.name}
                                image={image}
                            />)
                    }
                })
            }
        </div>
    );
}


export default SearchList;