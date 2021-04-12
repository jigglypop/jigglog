import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createExtraReducer from '../lib/createExtraReducers';
import { readCountApi } from '../api/comment';

export const readCount = createAsyncThunk('postcomments', readCountApi)
const readcountExtra = createExtraReducer(readCount)

export interface IPost {
  id: string;
  name: string;
  password: string;
  content : string;
  created: Date;
}

interface IPageState {
  posts: IPost[] | null
  postAll: IPost[]
  openPage: string;
  data: { posts: IPost[] } | null
  error : string | null
  loading : boolean
}

const initialState : IPageState = {
  posts: null,
  postAll: [],
  openPage: '',
  data: null,
  error: null,
  loading: false,
}

const pagelistSlice = createSlice({
  name: 'pagelist',
  initialState,
  reducers:{
    pageList: (state, { payload : posts }) =>{
      state.posts = posts
    },
    cleanPageList: (state) => {
      state.data = null
    },
    pageListAll: (state, { payload : postAll }) => {
      state.postAll = postAll
    },
    cleanPageListAll: (state) => {
      state.postAll = []
    },
    setOpenPage: (state, { payload : openPage }) => {
      state.openPage = openPage
    },
  },
  extraReducers: readcountExtra
})

export const { pageList, cleanPageList, setOpenPage, pageListAll, cleanPageListAll } = pagelistSlice.actions
export default pagelistSlice.reducer;
