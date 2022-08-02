import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {SingleMovieCard} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getByIdMovies} from '../../store/slices';

const SingleMoviePage: FC = () => {

    const {id} = useParams<{ id: string }>();
    const {movieById} = useAppSelector(state => state.moviesReducer);
    const {user} = useAppSelector((state) => state.authReducer)

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getByIdMovies({id: Number(id)}));
    }, [dispatch, id]);

    const handleHistory = () => {
        if (user) {
            localStorage.setItem('history', JSON.stringify([movieById]))
        }
    }
    return (
        <div onClick={handleHistory}>
            {movieById && <SingleMovieCard key={movieById.id} movie={movieById}/>}
        </div>
    )
};

export default SingleMoviePage;


