import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../module';
import { useEffect, useState } from 'react';
import { readPost, setPostName } from '../module/readPost';

export function useReadPostEffect({ location }) {
  const { data } = useSelector((state: RootState) => state.readPost);
  const [html, setHtml] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      dispatch(readPost(decodeURI(location.pathname.split('/')[2])));
    }
  }, []);

  useEffect(() => {
    if (data) {
      setHtml(data.data);
    }
  }, [data]);

  return { html };
}
