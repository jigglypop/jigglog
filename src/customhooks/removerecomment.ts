import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent, useEffect } from "react";
import { RootState } from "../module";
import { postComments } from "../module/postcomments";
import { changeRemoveReComment, cleanRemoveReComments, postRemoveReComment } from "../module/removerecomment";

export function useRemoveReComment() {
  const { removerecomment, data, error, loading } = useSelector((state: RootState) => state.removerecomment);
  const dispatch = useDispatch();
  

  let timer: any
  const onChangeRemoveRe = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const name  = e.target.name
      const value =  e.target.value
      if (timer){
          clearTimeout(timer)
      }
      timer = setTimeout(() => {
          if (name === 'recommentId' || name === 'password') {
              dispatch(changeRemoveReComment({ key: name, value: value }))
          }
      }, 200);
  }

  // 삭제하기
  const onGoRemoveReComment = (recommentId: string) =>{
    let _removerecomment = { ...removerecomment }
    _removerecomment.recommentId = recommentId
    _removerecomment.postId = window.location.pathname
    dispatch(postRemoveReComment(_removerecomment))
  }
  // 처리 후 바꿔주기
  useEffect( ()=>{
    if (data && data.comments){
      dispatch(postComments(data.comments))
      dispatch(cleanRemoveReComments())
    }
  },[dispatch, data])
  return { removerecomment, data, error, loading, onChangeRemoveRe, onGoRemoveReComment };
}