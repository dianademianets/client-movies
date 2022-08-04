import React, {FC} from 'react';

import {IPeople} from '../../interfaces';

const PeopleCard: FC<{ person: IPeople }> = ({person}) => {

    const {name, profile_path} = person;

    return (
        <button className='button_container'>
            <img className='poster_img' src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                 alt={`poster`}/>
            <h1>{name}</h1>
        </button>
    );
};

export default PeopleCard;
