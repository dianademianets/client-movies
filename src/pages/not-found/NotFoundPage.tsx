import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import './notFoundPage.css'

const NotFoundPage: FC = () => {

    return (
        <div className='not-found__div'>
            <div className='not-found__text'>404 <br/> Page not found!</div>
            <NavLink className='link__button' to={'/'}> Return to home </NavLink>
        </div>
    );
};

export default NotFoundPage;
