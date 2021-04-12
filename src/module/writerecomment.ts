import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createExtraReducer from '../lib/createExtraReducers';
import { IComment } from './postcomments';
import { writerecommentApi } from '../api/recomment';

export const postWriteReComment = createAsyncThunk('writerecomment', writerecommentApi)
const writerecommentExtra = createExtraReducer(postWriteReComment)

export interface IWriteReCommentForm {
  postId: string | null
  commentId: string | null
  content: string | null
  name: string | null
  password: string | null
}

interface IWriteReCommentState {
  writerecomment: IWriteReCommentForm
  data: { comments: IComment[] } | null
  error : string | null
  loading : boolean
}

const initialState : IWriteReCommentState = {
  writerecomment: {
    postId: '',
    commentId: '',
    content: '',
    name:'',
    password:'',
  },
  data: null,
  error: null,
  loading: false,
}

interface IWriteReCommentInput {
  payload : {
    key : "postId"| "commentId" | "content" | "name" | "password"
    value : string | null
  }
}

const writecommentSlice = createSlice({
  name: 'writerecomment',
  initialState,
  reducers:{
    changeWriteReComment: (state, { payload : { key, value } } : IWriteReCommentInput ) =>{
      state.writerecomment[key] = value
    },
    cleanWriteReComments: (state) => {
      state.data = null
    },
  },
  extraReducers: writerecommentExtra
})

export const { changeWriteReComment, cleanWriteReComments } = writecommentSlice.actions
export default writecommentSlice.reducer;
