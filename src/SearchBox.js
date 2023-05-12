import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const SearchBox = ({searchChange}) => {
 return (
    <div className='pa2'>
        <DebounceInput
            className='pa3 ba b--green bg-lightest-blue br3'
            type='search'
            placeholder='search movies'
            minLength={2}
            debounceTimeout={500}
            onChange={searchChange}
        />
    </div>
 );
}

export default SearchBox;