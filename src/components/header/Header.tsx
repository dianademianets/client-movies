import React, {FC, useRef} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

import './header.css'
import {useAppDispatch} from '../../hooks';
import {getAllSearch} from '../../store/slices';

const Header: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const ref = useRef<any>(null);

    const handleChange = (e: any) => {
        e.preventDefault();
        navigate('/search');
        dispatch(getAllSearch(ref.current.value))
    }

    return (
        <div className='header'>
            <div className='header_wrap'>
                <div className='header_left'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/movies'>
                        Movies
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
                <NavLink to='/user'>Sign In</NavLink>
                </div>

                <div>
                    <button className=' btn btn-outline-light fs-6'
                            onClick={() => document.body.classList.toggle('light-theme')}>Toggle Light
                    </button>
                </div>
            </div>
    );
};

export default Header;
