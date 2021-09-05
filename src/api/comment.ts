import { SERVER_URL } from './server_url';
import { IWriteCommentForm } from '../module/writecomment';
import { IRemoveCommentForm } from '../module/removecomment';

// 댓글 카운트
export const readCountApi = async (posts: any, thunkAPI: any) => {
  const res: any = await fetch(`${SERVER_URL}/postcomment/page`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts),
  });
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};

// 댓글 리스트 모두 읽기
export const readPostCommentApi = async (postId: string, thunkAPI: any) => {
  const res: any = await fetch(`${SERVER_URL}/postcomment${postId}`);
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};

// 댓글 리스트 읽기
export const readCommentApi = async (postId: number, thunkAPI: any) => {
  const res: any = await fetch(`${SERVER_URL}/api/comment/${postId}`);
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};

// 댓글쓰기
export const writecommentApi = async (
  writecomment: IWriteCommentForm,
  thunkAPI: any,
) => {
  const res: any = await fetch(`${SERVER_URL}/comments${writecomment.postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(writecomment),
  });
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};

// 삭제
export const removeCommentApi = async (
  removecomment: IRemoveCommentForm,
  thunkAPI: any,
) => {
  const res: any = await fetch(
    `${SERVER_URL}/comments${removecomment.postId}${removecomment.commentId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(removecomment),
    },
  );
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};
