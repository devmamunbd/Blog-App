import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'Roman Reings',
    },
    {
        id: 2,
        name: 'Seth Rollings'
    },
    {
        id: 3,
        name: 'Sami Zyan'
    },
    {
        id: 4,
        name: 'Mustafa Ali'
    },
    {
        id: 5,
        name: 'Rey Mysterio'
    },
    {
        id: 6,
        name: 'Chedric Alexender'
    },
    {
        id: 7,
        name: 'Jimmy Usos'
    },
    {
        id: 8,
        name: 'Jey Usos'
    }

]


export const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {

    },
})


export default usersSlice.reducer