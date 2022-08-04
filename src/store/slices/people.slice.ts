import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IPeople, IPeopleResponse} from '../../interfaces';
import {peopleService} from '../../services';

interface IPeopleState {
    people: IPeople[];
    totalPage: number;
    status: string | null;
}

const initialState: IPeopleState = {
    people: [],
    totalPage: 1,
    status: null
};

export const getAllPeople = createAsyncThunk<IPeopleResponse, { currentPage: number }>(
    'peopleSlice/getAllPeople',
    async ({currentPage}) => {
        const {data} = await peopleService.getAllPeople(currentPage);
        return data
    }
)

const peopleSlice = createSlice({
    name: 'peopleSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPeople.pending, (state) => {
            state.status = 'Loading';
        });
        builder.addCase(getAllPeople.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.people = action.payload.results;
            state.totalPage = action.payload.total_pages;
        })
    }
})

const peopleReducer = peopleSlice.reducer;

export {peopleReducer};

