import React, {FC, useEffect} from 'react';

import './userPage.css'
import {useAppDispatch, useAppSelector} from "../../hooks";

import {getAccountDetails} from "../../store/slices";

const UserPage: FC = () => {
    const {session_id, user} = useAppSelector((state) => state.authReducer)
    const dispatch = useAppDispatch();

    dispatch(getAccountDetails(session_id));


    return (
        <div className='avaUser__div'>
            <img className={'avatar__img'}
                 src={' https://www.gravatar.com/avatar/795194f75f0ed00c48c3c7eb36e2e591.jpg'}
                 alt="logo"/>
            <h1>Hello {user?.username}</h1>
        </div>
    )
};

export default UserPage;
