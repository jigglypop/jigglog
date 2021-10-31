import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraReducer from '../lib/createExtraReducers';
import { patchPostApi } from '../api/post';

export const postPatchPost = createAsyncThunk('patchpost', patchPostApi);
const patchpostExtra = createExtraReducer(postPatchPost);

export interface IPatchPostForm {
  title: string | null;
  data: string | null;
}

interface IPatchPostState {
  patchpost: IPatchPostForm;
  data: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: IPatchPostState = {
  patchpost: {
    title: '',
    data: '',
  },
  data: null,
  error: null,
  loading: false,
};

interface IPatchPostInput {
  payload: {
    key: 'title' | 'data';
    value: string | null;
  };
}
const patchpostSlice = createSlice({
  name: 'patchpost',
  initialState,
  reducers: {
    initPatchPost: () => initialState,
    changePatchPost: (state, { payload: { key, value } }: IPatchPostInput) => {
      state.patchpost[key] = value;
    },
    cleanPatchPosts: state => {
      state.data = null;
    },
  },
  extraReducers: patchpostExtra,
});
export const {
  changePatchPost,
  cleanPatchPosts,
  initPatchPost,
} = patchpostSlice.actions;
export default patchpostSlice.reducer;
