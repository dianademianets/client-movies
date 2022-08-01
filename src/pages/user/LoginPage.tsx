import React, {FC, useEffect, useRef} from 'react';

import './userPage.css'
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {createSessionId, getToken, login} from '../../store/slices';

const LoginPage: FC = () => {
        const {requestToken, userResponse} = useAppSelector((state) => state.authReducer)

        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(getToken());
        }, []);

        const navigate = useNavigate();
        const ref = useRef<any>({});


        const handleChange = (e: any) => {
            const username = ref.current['username'].value;
            const password = ref.current['password'].value;
            dispatch(login({username, password, requestToken}));
            dispatch(createSessionId(requestToken));

            e.preventDefault();
        }

        if (userResponse?.success === true) {
            navigate('/account')
        } else if (userResponse?.success===false) {
            alert(`We don't found your account. Please, check that correct username`)
        }

        return (
            <div className='container'>

                <div className='form_auth'>
                    <div className='form_auth__h1'>
                        <h1>Sing In</h1>
                    </div>

                    <form>
                        <div className='form-outline mb-4'>
                            <label className='form-label'>Username</label>
                            <input ref={el => ref.current['username'] = el} type='text' className='form-control'
                                   name={'username'}/>
                        </div>
                        <div className='form-outline mb-4'>
                            <label className='form-label'>Password</label>
                            <input ref={el => ref.current['password'] = el} type='password' className='form-control'
                                   name={'password'}/>
                        </div>

                        <button type='button' className='btn btn-primary btn-block mb-4' onClick={handleChange}>Sign in
                        </button>
                        <div className='text-center'>
                            <p>Not a member? <div onClick={() => navigate(`register`)}>Register</div></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
;

export default LoginPage;
