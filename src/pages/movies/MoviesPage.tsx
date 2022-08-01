import React, {FC, useEffect, useState} from 'react';

import './moviesPage.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MovieCard} from '../../components';
import {IGenre} from '../../interfaces';
import {getAllGenres, getAllMovies, getALLMovieWithGenre} from '../../store/slices';

const MoviesList: FC = () => {

    const {genres} = useAppSelector((state) => state.genresReducer);
    const {movies, totalPage, status} = useAppSelector(
        (state) => state.moviesReducer
    )
    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    useEffect(() => {
        dispatch(getAllMovies({currentPage: Number(pageNumber)}));
    }, [pageNumber]);

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
