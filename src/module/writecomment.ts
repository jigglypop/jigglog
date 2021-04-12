import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createExtraReducer from '../lib/createExtraReducers';
import { writecommentApi } from '../api/comment';
import { IComment } from './postcomments';

export const postWriteComment = createAsyncThunk('writecomment', writecommentApi)
const writecommentExtra = createExtraReducer(postWriteComment)

export interface IWriteCommentForm {
  postId: string | null
  content: string | null
  name: string | null
  password: string | null
}

interface IWriteCommentState {
  writecomment: IWriteCommentForm
  data: { comments: IComment[] } | null
  error : string | null
  loading : boolean
}

const initialState : IWriteCommentState = {
  writecomment: {
    postId: '',
    content: '',
    name:'',
    password:'',
  },
  data: null,
  error: null,
  loading: false,
}

interface IWriteCommentInput {
  payload : {
    key : "postId"| "content" | "name" | "password"
    value : string | null
  }
}

const writecommentSlice = createSlice({
  name: 'writecomment',
  initialState,
  reducers:{
    changeWriteComment: (state, { payload : { key, value } } : IWriteCommentInput ) =>{
      state.writecomment[key] = value
    },
    cleanWriteComments: (state) => {
      state.data = null
    },
  },
  extraReducers: writecommentExtra
})

export const { changeWriteComment, cleanWriteComments } = writecommentSlice.actions
export default writecommentSlice.reducer;
