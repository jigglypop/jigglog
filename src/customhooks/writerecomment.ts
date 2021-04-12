import { useSelector, useDispatch } from "react-redux";
import { useEffect, ChangeEvent } from "react";
import { RootState } from "../module";
import { postWriteReComment, changeWriteReComment, cleanWriteReComments } from "../module/writerecomment";
import { postComments } from "../module/postcomments";

export function useWriteReComment () {
    const { writerecomment, data, error, loading } = useSelector((state: RootState) => state.writerecomment);
    const dispatch = useDispatch();
    
    useEffect( ()=>{
        dispatch(changeWriteReComment({ key: "postId", value: window.location.pathname }))
    },[])

    // 처리 후 바꿔주기
    useEffect( ()=>{
        if (data && data.comments){
            dispatch(postComments(data.comments))
            dispatch(cleanWriteReComments())
        }
    },[dispatch, data])

    // 인풋 박스 디바운싱
    let timer: any
    const onChangeReComment = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const name  = e.target.name
        const value =  e.target.value
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            if (name === 'content' || name === 'name' || name === 'password') {
                dispatch(changeWriteReComment({ key: name, value: value }))
            }
        }, 200);
    }

    const onSubmitReComment = () =>{
        dispatch(postWriteReComment(writerecomment))
    }
    return { writerecomment, data, error, loading, onChangeReComment, onSubmitReComment };
}