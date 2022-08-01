import React, {FC} from 'react';

import {useNavigate} from 'react-router-dom';
import {IMovie} from '../../interfaces';
import './movieCard.css'

const MovieCard: FC<{ movie: IMovie }> = ({movie}) => {

    const {id, original_title, poster_path} = movie;
    const navigate = useNavigate();

    return (
        <button className='button_container' onClick={() => navigate(`${id.toString()}`)}>
            <img className='poster_img' src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                 alt={`${original_title} poster`}/>
            <h1>{original_title}</h1>
        </button>
    );
};

export default MovieCard;
