import { LOCAL_URL } from './server_url';
import { IPatchPostForm } from '../module/patchpost';

// 포스트 가져오기
export const readPostApi = async (postname: string, thunkAPI: any) => {
  const res: any = await fetch(`${LOCAL_URL}/markdown/${postname}`);
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};

// 포스트 갱신
export const patchPostApi = async (
  patchpost: IPatchPostForm,
  thunkAPI: any,
) => {
  const res: any = await fetch(`${LOCAL_URL}/markdown/${patchpost.title}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: patchpost.data,
    }),
  });
  if (!res.ok) {
    const error = await res.json();
    return await thunkAPI.rejectWithValue(error.message);
  }
  return await res.json();
};
