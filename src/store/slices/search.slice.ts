import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {moviesService} from '../../services';
import {IMovie, IMoviesResponse} from '../../interfaces';

interface IMoviesState {
    movies: IMovie[];
    status: string | null;
}

const initialState: IMoviesState = {
    movies: [],
    status: null
}

export const getAllSearch = createAsyncThunk<IMoviesResponse, any>(
    'searchSlice/getAllSearch',
    async (param) => {
        const {data} = await moviesService.getSearchResponse(param);
        return data
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllSearch.pending, (state) => {
            state.status = 'Loading';
        });
        builder.addCase(getAllSearch.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload.results;
        })
    }
});

const searchReducer = searchSlice.reducer;

export {searchReducer};
