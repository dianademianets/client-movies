import React, {FC, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import './userPage.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {IMovie} from '../../interfaces';
import {getAccountWatchList} from '../../store/slices';

const UserPage: FC = () => {
    const {user, movies} = useAppSelector((state) => state.authReducer)

    const {account_id} = useParams<{ account_id: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getAccountWatchList(Number(account_id)));
    }, [dispatch, account_id]);


    return (
        <div>
            <div className='avaUser__div'>
                <img className={'avatar__img'}
                     src={' https://www.gravatar.com/avatar/795194f75f0ed00c48c3c7eb36e2e591.jpg?s=500'}
                     alt='logo'/>
                <h1>Hello {user?.username}</h1>

            </div>
            <div className='movies_list__wrap'>
                <div className='movies_popular__wrap'>Latest Movies:</div>
                {movies.map((value: IMovie) =>
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
