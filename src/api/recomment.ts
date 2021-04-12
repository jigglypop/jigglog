import { SERVER_URL } from "./server_url"
import { IWriteReCommentForm } from "../module/writerecomment"
import { IRemoveReCommentForm } from "src/module/removerecomment"


// 대댓글쓰기
export const writerecommentApi  = async ( writerecomment: IWriteReCommentForm,  thunkAPI: any) => {
    const res : any = await fetch(`${SERVER_URL}/recomments${writerecomment.postId}${writerecomment.commentId}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(writerecomment),
    })
    if (!res.ok){
        const error = await res.json()
        return await thunkAPI.rejectWithValue(error.message)
    }
    return await res.json()
}


// 삭제
export const removeReCommentApi = async ( removerecomment: IRemoveReCommentForm,  thunkAPI: any) => {
    const res : any = await fetch(`${SERVER_URL}/recomments${removerecomment.postId}${removerecomment.recommentId}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(removerecomment),
    })
    if (!res.ok){
        const error = await res.json()
        return await thunkAPI.rejectWithValue(error.message)
    }
    return await res.json()
}

