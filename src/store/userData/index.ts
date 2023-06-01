import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserDate {
  name: string;
  token: string;
}

const slice = createSlice({
  name: 'userData',
  initialState: {
    name: '',
    token: '',
  },
  reducers: {
    setUserData(state, { type, payload }: PayloadAction<IUserDate>) {
    //   state.name = 'fff';
      console.log(type);
      return { ...state, ...payload };
    },
  },
});

export const { reducer: userDataReducer, name: userDataNameReducer, actions } = slice;
export const { setUserData } = actions;