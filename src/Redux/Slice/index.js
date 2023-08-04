import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    id:0,
    editdata:''
  },
  reducers: {
    Detail: (state, action) => {
      
        state.id = action.payload;
      },
    Completedata: (state, action) => {
        
      state.user = action.payload;
    },
   Editdata: (state, action) => {
        
      state.editdata = action.payload;
    },
  },
});
export const {Completedata,Detail,Editdata} = userSlice.actions;

export const selectuser = state => state.user.user;

export default userSlice.reducer;
