import React from 'react';
import { Cancel, Confirm, DeleteWrapperDiv, WriteCommentButton } from './style';
import { useRemoveComment } from '../../customhooks/removecomment'

const DeleteComment = ({ commentId } : { commentId: string }) =>{
    const { error, onChangeRemove, onGoRemoveComment } = useRemoveComment()
    return (
        <DeleteWrapperDiv>
            <h4 className="errormsg">{error}</h4>
            <Confirm>
                <div>
                    <input autoComplete="new-password" name="password" type="password" placeholder="비밀번호" onChange={(e)=> onChangeRemove(e)} />
                </div>
            </Confirm>
            <Cancel>
                <WriteCommentButton onClick={() => onGoRemoveComment(commentId)}><h4>X</h4></WriteCommentButton>
            </Cancel>            
        </DeleteWrapperDiv>
    )
}

export default DeleteComment