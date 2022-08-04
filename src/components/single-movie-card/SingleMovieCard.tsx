import React, {FC, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {IMovie} from '../../interfaces';
import {StarsRating} from '../stars-rating';
import './singleMovieCard.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addMovieToWatchList, getAllVideos} from '../../store/slices';
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
    const {user, session_id} = useAppSelector(state => state.authReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllVideos(Number(id)));
    }, [dispatch, id]);

    const addToWatchlist = () => {
        dispatch(addMovieToWatchList({id: Number(user?.id), session_id, media_id: Number(id)}));
        if (session_id === null) {
            alert('Please sign in!')
        }
    }
    const addToFavorite = () => {
        dispatch(addMovieToWatchList({id: Number(user?.id), session_id, media_id: Number(id)}));
        if (session_id === null) {
            alert('Please sign in!')
        }
    }
    return (
        <div className='page_movie__div'>
            <h1>{original_title}</h1>
            <div className='page_movie__container'>
                <div className='page_movie_img'>
                    <img className='poster__img' src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                         alt={`${original_title} poster`}/>
                </div>
                <div className='page_movie_text'>
                    <div className='div__watchlist__favorite'>
                        <div className='div__watchlist'><b>Add to Watchlist:</b>
                            <button className='div_watchlist' onClick={addToWatchlist}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                                     className='bi bi-bookmark-heart-fill' viewBox='0 0 16 16'>
                                    <path
                                        d='M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z'/>
                                </svg>
                            </button>
                        </div>
                        <div className='div__watchlist'><b>Add to Favorite:</b>
                            <button className='div_watchlist' onClick={addToFavorite}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                                     className='bi bi-heart-fill' viewBox='0 0 16 16'>
                                    <path d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'/>
                                </svg>
                            </button>
                        </div>
                    </div>
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
