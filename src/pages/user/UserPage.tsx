import React, {FC, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import './userPage.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {IMovie} from '../../interfaces';
import {getAccountDetails, getAccountFavorite, getAccountWatchList} from '../../store/slices';

const UserPage: FC = () => {
    const {user, watchlist, favorite, session_id} = useAppSelector((state) => state.authReducer)

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAccountDetails(session_id));
    }, [dispatch, session_id]);

    useEffect(() => {
        dispatch(getAccountWatchList(Number(user?.id)));
    }, [dispatch, user?.id]);

    useEffect(() => {
        dispatch(getAccountFavorite(Number(user?.id)));
    }, [dispatch, user?.id]);

    return (
        <div>
            <div className='avaUser__div'>
                <img className={'avatar__img'}
                     src={' https://www.gravatar.com/avatar/795194f75f0ed00c48c3c7eb36e2e591.jpg?s=500'}
                     alt='logo'/>
                <h1>Hello {user?.username}</h1>

            </div>
            <div className='movies_list__wrap'>
                <div className='movies_popular__wrap'>Watchlist:</div>
                {watchlist.map((value: IMovie) =>
                    <button className='button_container' onClick={() => navigate(`movie/${value.id.toString()}`)}>
                        <img className='poster_img' src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                             alt={`${value.original_title} poster`}/>
                        <h1>{value.original_title}</h1>
                    </button>)}
            </div>
            <div className='movies_list__wrap'>
                <div className='movies_popular__wrap'>Favorite Movies:</div>
                {favorite.map((value: IMovie) =>
                    <button className='button_container' onClick={() => navigate(`movie/${value.id.toString()}`)}>
                        <img className='poster_img' src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                             alt={`${value.original_title} poster`}/>
                        <h1>{value.original_title}</h1>
                    </button>)}
            </div>
        </div>
    )
};

export default UserPage;
