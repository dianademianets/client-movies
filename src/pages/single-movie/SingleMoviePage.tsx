import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {SingleMovieCard} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getByIdMovies} from '../../store/slices';

const SingleMoviePage: FC = () => {

    const {id} = useParams<{ id: string }>();
    const {movieById} = useAppSelector(state => state.moviesReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getByIdMovies({id: Number(id)}));
    }, [dispatch, id]);


    return (
        <div>
            {movieById && <SingleMovieCard key={movieById.id} movie={movieById}/>}
        </div>
    )
};

export default SingleMoviePage;


