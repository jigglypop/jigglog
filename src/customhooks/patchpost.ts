import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../module';
import {
  changePatchPost,
  initPatchPost,
  postPatchPost,
} from '../module/patchpost';

export function usePatchPostEffect() {
  const { patchpost, data } = useSelector(
    (state: RootState) => state.patchpost,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changePatchPost({
        key: 'title',
        value: decodeURI(location.pathname.split('/')[2]),
      }),
    );
    return () => {
      dispatch(initPatchPost());
    };
  }, []);

  const onChangePatchPost = (data: string) => {
    dispatch(
      changePatchPost({
        key: 'data',
        value: data,
      }),
    );
  };

  const onSubmitPost = () => {
    dispatch(postPatchPost(patchpost));
  };

  return {
    data,
    onChangePatchPost,
    onSubmitPost,
  };
}
