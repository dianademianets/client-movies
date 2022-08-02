import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import { SingleTVShowCard } from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { getByIdTVShow } from '../../store/slices';

const SingleTVShowPage: FC = () => {

    const {id} = useParams<{ id: string }>();
    const {tvShowById} = useAppSelector(state => state.tvShowsReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getByIdTVShow({id: Number(id)}));
    }, [dispatch, id]);


    return (
        <div>
            {tvShowById && <SingleTVShowCard key={tvShowById.id} tvShow={tvShowById}/>}
        </div>
    )
};

export default SingleTVShowPage;


