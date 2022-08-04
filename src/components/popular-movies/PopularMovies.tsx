import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {IMovie} from '../../interfaces';
import {getPopularMovie} from '../../store/slices';
import './popularMovies.css'

const PopularMovies: FC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const {movies, totalPage, status} = useAppSelector(
        (state) => state.moviesReducer
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPopularMovie({currentPage: Number(pageNumber)}));
    }, [dispatch, pageNumber]);

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
            <div id='carouselExampleControls' className='carousel slide div_carousel' data-ride='carousel'>
                <div className='carousel-inner div_carousel_inner'>
                    <div className='carousel-item active'>
                        {movies.map((movie: IMovie) =>
                            <button className='button_container__carousel'
                                    onClick={() => navigate(`movie/${movie.id.toString()}`)}>
                                <img className='poster_img' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                     alt={`${movie.original_title} poster`}/>
                                <h1>{movie.original_title}</h1>
                            </button>)}
                    </div>
                </div>

                <div className='carousel-control-prev' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true' onClick={() => {
                        handlePrevious()
                    }}></span>
                </div>
                <div className='carousel-control-next' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true' onClick={() => {
                        handleNext()
                    }}></span>
                </div>
            </div>
        </div>
    )

};

export default PopularMovies;
