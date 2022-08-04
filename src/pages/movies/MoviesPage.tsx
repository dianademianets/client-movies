import React, {FC, useEffect, useRef, useState} from 'react';

import './moviesPage.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MovieCard} from '../../components';
import {IGenre} from '../../interfaces';
import {
    getAllGenres,
    getAllMovies,
    getALLMovieWithGenre,
    getMovieWithYear,
    getPopularMovie,
    getRatedMovie
} from '../../store/slices';

const MoviesList: FC = () => {

    const {genres} = useAppSelector((state) => state.genresReducer);
    const {movies, totalPage, status} = useAppSelector(
        (state) => state.moviesReducer
    )
    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useAppDispatch();
    const ref = useRef<any>(null);

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllMovies({currentPage: Number(pageNumber)}));
    }, [dispatch, pageNumber]);

    const handleRatingUp = () => {
        dispatch(getRatedMovie({currentPage: Number(pageNumber)}));
    }
    const handlePopularUp = () => {
        dispatch(getPopularMovie({currentPage: Number(pageNumber)}));
    }
    const handleChange = (e: any) => {
        e.preventDefault();
        dispatch(getMovieWithYear({year: Number(ref.current.value), currentPage: Number(pageNumber)}))
    }

    const handlePrevious = () => {
        pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
    };

    const handleNext = () => {
        pageNumber >= totalPage ? setPageNumber(totalPage) : setPageNumber(pageNumber + 1);
    };

    return (
        <div>
            <div className='loading__div'>
                {status === 'loading' && <h1>Loading...</h1>}
            </div>
            <div className='div_wrapper_up_down'>
                <div className='div_buttons_change'>
                    <div className='div_icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         className="bi bi-sort-up-alt" viewBox="0 0 20 20">
                        <path
                            d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
                    </svg></div>
                        <button onClick={handleRatingUp} className='div_icons'>Rated</button>
                        <button onClick={handlePopularUp} className='div_icons'>Popular</button>

                        <div className='div_button'><input className='form-control fs-10' ref={ref} type='number'
                                                           name={'year'}
                                                           placeholder='Year..'/>
                            <button onClick={handleChange} className='btn btn-outline-light fs-10'>Ok</button>
                        </div>

                </div>
            </div>
            <div className='div__wrap_movie'>
                <div className='genres_wrapper__div'>
                    {status === 'fulfilled' && genres.map((genre: IGenre) =>
                        <div className='genre_wrap'
                             onClick={() => (dispatch(getALLMovieWithGenre(genre.id)))}
                        >{genre.name}</div>
                    )}
                </div>

                <div className='header_wrapper__div'>
                    <div className='header_wrap__div'>
                        {status === 'fulfilled' && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                    </div>
                </div>
            </div>
            <div className='wrap__pagination'>
                <button className=' btn btn-outline-dark page-link fs-8' disabled={pageNumber - 1 === 0}
                        onClick={() => {
                            handlePrevious()
                        }}>Previous
                </button>
                <div className='text_div btn-outline-dark'>
                    {pageNumber}
                </div>

                <button className='btn btn-outline-dark page-link fs-8' disabled={pageNumber + 1 > totalPage}
                        onClick={() => {
                            handleNext()
                        }}>Next
                </button>
            </div>
        </div>
    );
};

export default MoviesList;
