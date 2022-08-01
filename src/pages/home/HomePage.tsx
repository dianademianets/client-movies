import React, {FC} from 'react';
import {PopularMovies} from '../../components';

import './homePage.css'

const HomePage: FC = () => {

    return (
        <div>
            <div className='header__wrap'>
                Welcome. <br/> Millions of movies, TV shows and people to discover. Explore now.
            </div>
            <div className='movies_list__wrap'>
                <div className='movies_popular__wrap'>What's Popular</div>
                <PopularMovies/>
            </div>
        </div>
    )
};

export default HomePage;
