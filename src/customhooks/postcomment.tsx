import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../module";
import { useEffect } from "react";
import { readPostComment, postComments, cleanPostComments, setOpenId } from "../module/postcomments";
import { changeWriteReComment } from "../module/writerecomment";

export function usePostComments() {
    const { comments, data, openId } = useSelector((state: RootState) => state.postcomments);
    const dispatch = useDispatch()
    
    useEffect( ()=>{
        dispatch(readPostComment(window.location.pathname))
    },[])

    useEffect( ()=>{
        if (data && data.comments){
            dispatch(postComments(data.comments))
        }
        return () =>{
            dispatch(cleanPostComments())
        }
    },[dispatch, data])

    // 열기
    const setOpen = (id: string) => {
        if (id === openId){
            dispatch(setOpenId(''))
            dispatch(changeWriteReComment({ key: "commentId", value: '' }))
        } else{
            dispatch(setOpenId(id))
            dispatch(changeWriteReComment({ key: "commentId", value: id }))
        }
    }


    return { comments, openId, setOpen };
}