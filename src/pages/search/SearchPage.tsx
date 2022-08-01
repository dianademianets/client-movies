import React, {FC} from 'react';

import {MovieCard} from '../../components';
import {useAppSelector} from '../../hooks';
import './searchPage.css'

const SearchPage: FC = () => {

    const {movies, status} = useAppSelector((state) => state.searchReducer);

    return (
        <div className='div__wrap-search'>
            <div className='loading__div'>
                {status === 'loading' && <h1>Loading...</h1>}
            </div>
            <div className='div__wrap-search_results'>
                {status === 'fulfilled' && movies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
};

export default SearchPage;
