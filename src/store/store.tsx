import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {
    authReducer,
    moviesReducer,
    genresReducer,
    searchReducer,
    videoReducer
} from './slices';

const rootReducer = combineReducers({
    authReducer,
    moviesReducer,
    genresReducer,
    searchReducer,
    videoReducer
});

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
