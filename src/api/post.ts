import { LOCAL_URL } from './server_url';
import { IWriteCommentForm } from '../module/writecomment';
import { IRemoveCommentForm } from '../module/removecomment';

// 포스트 가져오기
export const readPostApi = async (postname: string, thunkAPI: any) => {
  const res: any = await fetch(`${LOCAL_URL}/markdown/${postname}`);
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};
