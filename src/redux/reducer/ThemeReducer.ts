import { createSlice } from "@reduxjs/toolkit";
interface Theme {
    theme: "light" | "dark"
}
const initialState: Theme = {
    theme: "light",
}

const themeSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
    }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;