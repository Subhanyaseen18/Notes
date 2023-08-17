import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    id: 0,
  },
  reducers: {
    Id: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const {Id} = userSlice.actions;

export const selectuser = state => state.user.user;

export default userSlice.reducer;
