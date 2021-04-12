import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent, useEffect } from "react";
import { RootState } from "../module";
import { changeRemoveComment, cleanRemoveComments, postRemoveComment } from "../module/removecomment";
import { postComments } from "../module/postcomments";

export function useRemoveComment() {
  const { removecomment, data, error, loading } = useSelector((state: RootState) => state.removecomment);
  const dispatch = useDispatch();
  
  let timer: any
  const onChangeRemove = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const name  = e.target.name
      const value =  e.target.value
      if (timer){
          clearTimeout(timer)
      }
      timer = setTimeout(() => {
          if (name === 'commentId' || name === 'password') {
              dispatch(changeRemoveComment({ key: name, value: value }))
          }
      }, 200);
  }

  // 삭제하기
  const onGoRemoveComment = (commentId: string) =>{
    let _removecomment = { ...removecomment }
    _removecomment.commentId = commentId
    _removecomment.postId = window.location.pathname
    dispatch(postRemoveComment(_removecomment))
  }
  // 처리 후 바꿔주기
  useEffect( ()=>{
    if (data && data.comments){
      dispatch(postComments(data.comments))
      dispatch(cleanRemoveComments())
    }
  },[dispatch, data])
  return { removecomment, data, error, loading, onChangeRemove, onGoRemoveComment };
}