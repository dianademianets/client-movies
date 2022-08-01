import React, {FC, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {IMovie} from '../../interfaces';
import {StarsRating} from '../stars-rating';
import './singleMovieCard.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllVideos} from '../../store/slices';
import {Video} from '../video';

const SingleMovieCard: FC<{ movie: IMovie }> = ({movie}) => {
    const {
        id,
        popularity,
        genres,
        original_language,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average,
        budget
    } = movie

    const {video, status} = useAppSelector(state => state.videoReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllVideos(Number(id)));
    }, [id]);

    return (
        <div className='page_movie__div'>
            <h1>{original_title}</h1>
            <div className='page_movie__container'>
                <div className='page_movie_img'>
                    <img className='poster__img' src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                         alt={`${original_title} poster`}/>
                </div>
                <div className='page_movie_text'>
                    <p><b className='rating'>Movie rating: {vote_average}</b></p>
                    <p><b>Popularity: </b>{popularity}</p>
                    <div className='card_genre_container'>
                        <b>Genres:</b> {genres && genres.map(({name, id}, i) => (
                        <div className='card_genre_container_wrap'>
                            {name} {i < genres.length - 1 && ' '}
                        </div>))}
                    </div>
                    <p><b>Budget:</b> <br/>{budget}</p>
                    <p><b>Overview:</b> <br/>{overview}</p>
                    <p><b>Please rate this movie:</b> <StarsRating/></p>
                    <p><b>Release date:</b> {release_date}</p>
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

export default SingleMovieCard;
