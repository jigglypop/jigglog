import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createExtraReducer from '../lib/createExtraReducers';
import { readPostCommentApi } from '../api/comment';

export const readPostComment = createAsyncThunk('postcomments', readPostCommentApi)
const readpostcommentExtra = createExtraReducer(readPostComment)

export interface IComment extends Document{
  id: string;
  name: string;
  password: string;
  content : string;
  created: Date;
  recomments: IReComment[];
}

export interface IReComment extends Document{
  id: string;
  name: string;
  password: string;
  content : string;
  created: Date;
}

interface ICommentState {
  comments: IComment[] | null
  openId: string;
  data: { comments: IComment[] } | null
  error : string | null
  loading : boolean
}

const initialState : ICommentState = {
  comments: null,
  openId: '',
  data: null,
  error: null,
  loading: false,
}

const postcommentsSlice = createSlice({
  name: 'postcomments',
  initialState,
  reducers:{
    postComments: (state, { payload : comments }) =>{
      state.comments = comments
    },
    cleanPostComments: (state) => {
      state.data = null
    },
    setOpenId: (state, { payload : openId }) => {
      state.openId = openId
    },
  },
  extraReducers: readpostcommentExtra
})

export const { postComments, cleanPostComments, setOpenId } = postcommentsSlice.actions
export default postcommentsSlice.reducer;
