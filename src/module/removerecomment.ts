import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createExtraReducer from '../lib/createExtraReducers';
import { IComment, IReComment } from './postcomments';
import { removeReCommentApi } from '../api/recomment';

export const postRemoveReComment = createAsyncThunk('removerecomment', removeReCommentApi)
const removecommentExtra = createExtraReducer(postRemoveReComment)

export interface IRemoveReCommentForm {
  postId: string | null
  recommentId: string | null
  name: string | null
  password: string | null
}

interface IRemoveReCommentState {
  removerecomment: IRemoveReCommentForm
  data: { comments: IComment[] } | null
  error : string | null
  loading : boolean
}

const initialState : IRemoveReCommentState = {
  removerecomment: {
    postId: '',
    recommentId: '',
    name: '',
    password:''
  },
  data: null,
  error: null,
  loading: false,
}

interface IRemoveReCommentInput {
  payload : {
    key : 'postId' | 'recommentId' | "password"
    value : string | null
  }
}

const removerecommentSlice = createSlice({
  name: 'removerecomment',
  initialState,
  reducers:{
    changeRemoveReComment: (state, { payload : { key, value } } : IRemoveReCommentInput ) =>{
      state.removerecomment[key] = value
    },
    cleanRemoveReComments: (state) => {
      state.data = null
    },
  },
  extraReducers: removecommentExtra
})

export const { changeRemoveReComment, cleanRemoveReComments } = removerecommentSlice.actions
export default removerecommentSlice.reducer;
