import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IGenre, IMovie, IMoviesResponse} from '../../interfaces';
import {moviesService} from '../../services';

interface IMoviesState {
    movies: IMovie[];
    movieById: IMovie | null;
    genres: IGenre[];
    status: string | null;
    totalPage: number;
    isSwitched: boolean;
    rating: number;
    isLogin: boolean;
}

const initialState: IMoviesState = {
    movies: [],
    genres: [],
    movieById: null,
    status: null,
    totalPage: 1,
    isSwitched: false,
    rating: 0,
    isLogin: true,
};

export const getAllMovies = createAsyncThunk<IMoviesResponse, { currentPage: number }>(
    'moviesSlice/getAllMovies',
    async ({currentPage}) => {

        const {data} = await moviesService.getAllPage(currentPage ? currentPage : 1);
        return data;
    }
);

export const getPopularMovie = createAsyncThunk<IMoviesResponse, { currentPage: number }>(
    'moviesSlice/getPopularMovie',
    async ({currentPage}) => {
        const {data} = await moviesService.getPopularMovie(currentPage);
        return data;
    }
);

export const getByIdMovies = createAsyncThunk<IMovie, { id: number }>(
    'moviesSlice/getByIdMovies',
    async ({id}) => {
        const {data} = await moviesService.getById(id);
        return data;
    }
);
export const getALLMovieWithGenre = createAsyncThunk<IMoviesResponse, number>(
    'moviesSlice/getALLMovieWithWGenre',
    async (id) => {
        const {data} = await moviesService.getALLMovieWithGenre(id);
        return data;
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload.results;
            state.totalPage = action.payload.total_pages;
        })
        builder.addCase(getByIdMovies.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movieById = action.payload
        })
        builder.addCase(getALLMovieWithGenre.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload.results
        })

        builder.addCase(getPopularMovie.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(getPopularMovie.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload.results;
            state.totalPage = action.payload.total_pages;
        });
    },
});

const moviesReducer = moviesSlice.reducer;

export {moviesReducer};

