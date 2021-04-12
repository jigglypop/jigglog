import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createExtraReducer from '../lib/createExtraReducers';
import { removeCommentApi } from '../api/comment';
import { IComment } from './postcomments';

export const postRemoveComment = createAsyncThunk('removecomment', removeCommentApi)
const removecommentExtra = createExtraReducer(postRemoveComment)

export interface IRemoveCommentForm {
  postId: string | null
  commentId: string | null
  name: string | null
  password: string | null
}

interface IRemoveCommentState {
  removecomment: IRemoveCommentForm
  data: { comments: IComment[] } | null
  error : string | null
  loading : boolean
}

const initialState : IRemoveCommentState = {
  removecomment: {
    postId: '',
    commentId: '',
    name: '',
    password:''
  },
  data: null,
  error: null,
  loading: false,
}

interface IRemoveCommentInput {
  payload : {
    key : 'postId' | 'commentId' | "password"
    value : string | null
  }
}

const removecommentSlice = createSlice({
  name: 'removecomment',
  initialState,
  reducers:{
    changeRemoveComment: (state, { payload : { key, value } } : IRemoveCommentInput ) =>{
      state.removecomment[key] = value
    },
    cleanRemoveComments: (state) => {
      state.data = null
    },
  },
  extraReducers: removecommentExtra
})

export const { changeRemoveComment, cleanRemoveComments } = removecommentSlice.actions
export default removecommentSlice.reducer;
