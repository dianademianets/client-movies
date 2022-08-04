import React, {FC} from 'react';

import {PopularMovies, PopularTVShows} from '../../components';
import './homePage.css'

const HomePage: FC = () => {

    return (
        <div>
            <div className='header__wrap'>
                Welcome. <br/> Millions of movies, TV shows and people to discover. Explore now.
            </div>
            <div className='movies_list__wrap'>
                <div className='movies_popular__wrap'>What's Popular Movies</div>
                <PopularMovies/>
            </div>
            <div className='movies_list__wrap'>
                <div className='movies_popular__wrap'>What's Popular TV Shows</div>
                <PopularTVShows/>
            </div>
        </div>
    )
};

export default HomePage;
