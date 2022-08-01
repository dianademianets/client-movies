import {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {IMovie} from '../../interfaces';
import {getPopularMovie} from '../../store/slices';
import {MovieCard} from '../movie-card';
import './popularMovies.css'

const PopularMovies: FC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const {movies, totalPage, status} = useAppSelector(
        (state) => state.moviesReducer
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPopularMovie({currentPage: Number(pageNumber)}));
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
            <div className='movies_container_div'>
                {status === 'fulfilled' && movies.map((value: IMovie) => <MovieCard key={value.id} movie={value}/>)}
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
    )

};

export default PopularMovies;
