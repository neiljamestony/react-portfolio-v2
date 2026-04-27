import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './reducer/ThemeReducer'
export const makeStore = () => {
    return configureStore({
        reducer: {
            themeState: ThemeSlice
        }
    })
}

// infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
//infer the rootstate and appDispatch types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];