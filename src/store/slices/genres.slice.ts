import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IGenre} from '../../interfaces';
import {genresService} from '../../services';

interface IGenresState {
    genres: IGenre[];
    status: string | null;
}

const initialState: IGenresState = {
    genres: [],
    status: null
};

export const getAllGenres = createAsyncThunk<IGenre[], void>(
    'genreSlice/getAllGenres',
    async (_) => {
        // @ts-ignore
        const {data: {genres}} = await genresService.getAll();
        return genres
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllGenres.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload;
        })
    }
})

const genresReducer = genresSlice.reducer;

export {genresReducer};

