import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraReducer from '../lib/createExtraReducers';
import { readPostApi } from '../api/post';

export const readPost = createAsyncThunk('post', readPostApi);
const readPostExtra = createExtraReducer(readPost);

export interface IPost {
  id: string;
  name: string;
  password: string;
  content: string;
  created: Date;
}

interface IPageState {
  postname: string;
  data: { data: string } | null;
  error: string | null;
  loading: boolean;
}

const initialState: IPageState = {
  postname: '',
  data: null,
  error: null,
  loading: false,
};

const readPostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostName: (state, { payload: postname }) => {
      state.postname = postname;
    },
  },
  extraReducers: readPostExtra,
});
export const { setPostName } = readPostSlice.actions;
export default readPostSlice.reducer;
