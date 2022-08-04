import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import {
    HomePage,
    Layout,
    LoginPage,
    MoviesPage,
    NotFoundPage,
    RegisterPage,
    SearchPage,
    SingleMoviePage,
    SingleTVShowPage,
    UserPage,
} from './pages';
import TVShowsPage from "./pages/tv_shows/TVShowsPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'movie/:id'} element={<SingleMoviePage/>}/>
                <Route path={'tv/:id'} element={<SingleTVShowPage/>}/>

                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/movie/:id'} element={<SingleMoviePage/>}/>
                <Route path={'movies/movie/:id/genres'} element={<SingleMoviePage/>}/>

                <Route index element={<Navigate to={'tv_shows'}/>}/>
                <Route path={'tv_shows'} element={<TVShowsPage/>}/>
                <Route path={'tv_shows/tv/:id'} element={<SingleTVShowPage/>}/>

                <Route index element={<Navigate to={'search'}/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'search/movie/:id'} element={<SingleMoviePage/>}/>

                <Route path={'user'} element={<LoginPage/>}/>
                <Route path={'user/register'} element={<RegisterPage/>}/>
                <Route path={'account/'} element={<UserPage/>}/>
                <Route path={'account/movie/:id'} element={<SingleMoviePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
