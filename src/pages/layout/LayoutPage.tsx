import {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '../../components';
import './layoutPage.css'

const Layout: FC = () => {

    return (
        <div>
            <div className='header__div'>
                <Header/>
            </div>
            <div className='outlet__div'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
