import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {ITVShow} from '../../interfaces';


const TVShowCard: FC<{ tvShow: ITVShow }> = ({tvShow}) => {

    const {id, original_title, poster_path} = tvShow;
    const navigate = useNavigate();

    return (
        <button className='button_container' onClick={() => navigate(`${id.toString()}`)}>
            <img className='poster_img' src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                 alt={`${original_title} poster`}/>
            <h1>{original_title}</h1>
        </button>
    );
};

export default TVShowCard;