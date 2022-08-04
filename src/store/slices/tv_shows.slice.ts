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
    'tvShowsSlice/getALLTVShowWithGenre',
    async (id) => {
        const {data} = await tvShowsService.getALLTVShowWithGenre(id);
        return data;
    }
);
export const getTVShowWithYear = createAsyncThunk<ITVShowsResponse, { year: number, currentPage: number }>(
    'tvShowsSlice/getTVShowWithYear',
    async ({year, currentPage}) => {
        const {data} = await tvShowsService.getTVShowWithYear(year, currentPage);
        return data;
    }
);

export const getPopularTVShow = createAsyncThunk<ITVShowsResponse, { currentPage: number }>(
    'tvShowsSlice/getPopularTVShow',
    async ({currentPage}) => {
        const {data} = await tvShowsService.getPopularTVShow(currentPage);
        return data;
    }
);
export const getRatedTVShow = createAsyncThunk<ITVShowsResponse, { currentPage: number }>(
    'tvShowsSlice/getRatedTVShow',
    async ({currentPage}) => {
        const {data} = await tvShowsService.getRatedTVShow(currentPage);
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
        builder.addCase(getPopularTVShow.pending, (state) => {
            state.status = 'Loading';
        });
        builder.addCase(getPopularTVShow.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.tvShows = action.payload.results;
            state.totalPage = action.payload.total_pages;
        });
        builder.addCase(getRatedTVShow.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.tvShows = action.payload.results;
            state.totalPage = action.payload.total_pages;
        });
        builder.addCase(getTVShowWithYear.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.tvShows = action.payload.results;
            state.totalPage = action.payload.total_pages;
        })
    },
});

const tvShowsReducer = tvShowsSlice.reducer;

export {tvShowsReducer};

