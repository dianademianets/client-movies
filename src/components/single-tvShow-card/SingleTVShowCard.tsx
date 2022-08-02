import React, {FC, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {ITVShow} from '../../interfaces';
import {StarsRating} from '../stars-rating';
import './singleTVShowCard.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllVideos} from '../../store/slices';
import {Video} from '../video';

const SingleTVShowCard: FC<{ tvShow: ITVShow }> = ({tvShow}) => {
    const {
        id,
        popularity,
        genres,
        original_language,
        original_title,
        overview,
        poster_path,
        first_air_date,
        vote_average,
    } = tvShow

    const {video, status} = useAppSelector(state => state.videoReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllVideos(Number(id)));
    }, [dispatch, id]);

    return (
        <div className='page_movie__div'>
            <h1>{original_title}</h1>
            <div className='page_movie__container'>
                <div className='page_movie_img'>
                    <img className='poster__img' src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                         alt={`${original_title} poster`}/>
                </div>
                <div className='page_movie_text'>
                    <p><b className='rating'>TV Show rating: {vote_average}</b></p>
                    <p><b>Popularity: </b>{popularity}</p>
                    <div className='card_genre_container'>
                        <b>Genres:</b> {genres && genres.map(({name, id}, i) => (
                        <div className='card_genre_container_wrap'>
                            {name} {i < genres.length - 1 && ' '}
                        </div>))}
                    </div>
                    <p><b>Overview:</b> <br/>{overview}</p>
                    <p><b>Please rate this tv show:</b> <StarsRating/></p>
                    <p><b>Release date:</b> {first_air_date}</p>
                    <p><b>Original language:</b> <b>{original_language}</b></p>
                </div>
            </div>
            <div className='loading__div'>
                {status === 'loading' && <h1>Loading...</h1>}
            </div>
            <div className='video_page__div'>
                <h2>Trailers</h2>
                {status === 'fulfilled' &&
                    video.map((value) => <Video key={value.id} videoKey={value.key}/>)}
            </div>

            <NavLink className='btn btn-outline-light fs-6' to={'/'}> Return to home </NavLink>

        </div>
    );
};

export default SingleTVShowCard;
