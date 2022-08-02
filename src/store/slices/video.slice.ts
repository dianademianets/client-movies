import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IVideo} from '../../interfaces';
import {videoService} from '../../services';

interface IVideoState {
    video: IVideo[];
    status: string | null;
}

const initialState: IVideoState = {
    video: [],
    status: null,
};

export const getAllVideos = createAsyncThunk<IVideo[], number>(
    'videoSlice/getAllVideo',
    async (movieId) => {
        const {data} = await videoService.getVideo(movieId);
        return data.results;
    }
);

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllVideos.pending, (state) => {
            state.status = 'Loading';
        });
        builder.addCase(getAllVideos.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.video = action.payload;
            state.video = state.video.slice(0, 3);
        });
    },
});

const videoReducer = videoSlice.reducer;

export {videoReducer}
