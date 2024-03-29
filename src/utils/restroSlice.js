import { createSlice } from "@reduxjs/toolkit";

const restroSlice = createSlice({
    name : "cart",
    initialState : {
        allRestraurants : [],
        filteredRestro :[]
    },
    reducers : {
        restroList : (state,action) => {
         state.allRestraurants =action.payload.allRestraurants;
        state.filteredRestro = action.payload.filteredRestro;
        }
       

    }
})
export const {restroList} = restroSlice.actions;
export default restroSlice.reducer;
