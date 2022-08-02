import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {tvShowsService} from '../../services';
import {IGenre, ITVShow, ITVShowsResponse} from '../../interfaces';

interface ITVShowsState {
    tvShows: ITVShow[];
    tvShowById: ITVShow | null;
    genres: IGenre[];
    totalPage: number;
    isSwitched: boolean;
    rating: number;
    isLogin: boolean;
    status: string | null
}

const initialState: ITVShowsState = {
    tvShows: [],
    genres: [],
    tvShowById: null,
    status: null,
    totalPage: 1,
    isSwitched: false,
    rating: 0,
    isLogin: true,
};

export const getAllTVShows = createAsyncThunk<ITVShowsResponse, { currentPage: number }>(
    'tvShowsSlice/getAllTVShows',
    async ({currentPage}) => {

        const {data} = await tvShowsService.getAllTVShows(currentPage ? currentPage : 1);
        return data;
    }
);


export const getByIdTVShow = createAsyncThunk<ITVShow, { id: number }>(
    'tvShowsSlice/getByIdTVShows',
    async ({id}) => {
        const {data} = await tvShowsService.getByIdTVShow(id);
        return data;
    }
);

export const getALLTVShowWithGenre = createAsyncThunk<ITVShowsResponse, number>(
    'tvShowsSlice/getALLMovieWithGenre',
    async (id) => {
        const {data} = await tvShowsService.getALLTVShowWithGenre(id);
        return data;
    }
);


const tvShowsSlice = createSlice({
    name: 'tvShowsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTVShows.pending, (state) => {
            state.status = 'Loading';
        });
        builder.addCase(getAllTVShows.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.tvShows = action.payload.results;
            state.totalPage = action.payload.total_pages;
        })
        builder.addCase(getByIdTVShow.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.tvShowById = action.payload
        })
        builder.addCase(getALLTVShowWithGenre.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.tvShows = action.payload.results
        })
    },
});

const tvShowsReducer = tvShowsSlice.reducer;

export {tvShowsReducer};

