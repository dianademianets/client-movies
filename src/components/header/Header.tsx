import React, {FC, useRef} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

import './header.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllSearch} from '../../store/slices';

const Header: FC = () => {
    const {user} = useAppSelector((state) => state.authReducer)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const ref = useRef<any>(null);

    const handleChange = (e: any) => {
        e.preventDefault();
        navigate('/search');
        dispatch(getAllSearch(ref.current.value))
    }

    return (
        <div className='header__div_wrap'>
            <div className='header'>
                <div className='header_wrap'>
                    <div className='header_left'>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                        <NavLink to='/movies'>
                            Movies
                        </NavLink>
                        <NavLink to='/tv_shows'>
                            TV Shows
                        </NavLink>
                    </div>
                    <div>
                        <form className='form__wrap'>
                            <input className='form-control fs-6' ref={ref} type='text' name={'search'}
                                   placeholder='Search..'/>
                            <button onClick={handleChange} className='btn btn-outline-light fs-6'>Search</button>
                        </form>
                    </div>
                </div>
                <div className='header_right'>

                    {(!user) ? <NavLink to='/user'>Sign In</NavLink> : (user) ?
                        <NavLink className='avatar' to={`/account`}>{user.username}</NavLink> :
                        <NavLink to='/user'>Sign Out</NavLink>}
                    <div>
                        <button className=' btn btn-outline-light fs-6'
                                onClick={() => document.body.classList.toggle('light-theme')}>Toggle Light
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
