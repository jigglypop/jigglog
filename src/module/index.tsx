import {
  ThunkAction,
  Action,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import postcomments from './postcomments';
import writecomment from './writecomment';
import removecomment from './removecomment';
import writerecomment from './writerecomment';
import removerecomment from './removerecomment';
import pageList from './pageList';
import readPost from './readPost';

export const store = configureStore({
  reducer: {
    postcomments,
    writecomment,
    removecomment,
    writerecomment,
    removerecomment,
    pageList,
    readPost,
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// 타입
export type RootState = ReturnType<typeof store.getState>;
// 루트 리듀서
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
