import { useSelector, useDispatch } from "react-redux";
import { useEffect, ChangeEvent } from "react";
import { RootState } from "../module";
import { postWriteComment, changeWriteComment, cleanWriteComments } from "../module/writecomment";
import { postComments } from "../module/postcomments";

export function useWriteComment () {
    const { writecomment, data, error, loading } = useSelector((state: RootState) => state.writecomment);
    const dispatch = useDispatch();
    
    useEffect( ()=>{
        dispatch(changeWriteComment({ key: "postId", value: window.location.pathname }))
    },[])

    // 처리 후 바꿔주기
    useEffect( ()=>{
        if (data && data.comments){
            dispatch(postComments(data.comments))
            dispatch(cleanWriteComments())
        }
    },[dispatch, data])

    // 인풋 박스 디바운싱
    let timer: any
    const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const name  = e.target.name
        const value =  e.target.value
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            if (name === 'content' || name === 'name' || name === 'password') {
                dispatch(changeWriteComment({ key: name, value: value }))
            }
        }, 200);
    }

    const onSubmitComment = () =>{
        dispatch(postWriteComment(writecomment))
    }
    return { writecomment, data, error, loading, onChangeComment, onSubmitComment };
}