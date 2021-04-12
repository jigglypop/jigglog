import React from 'react';
import { Cancel, Confirm, DeleteWrapperDiv, WriteReCommentButton } from './style';
import { useRemoveReComment } from '../../customhooks/removerecomment';

const DeleteReComment = ({ recommentId } : { recommentId: string }) =>{
    const { error, onChangeRemoveRe, onGoRemoveReComment } = useRemoveReComment()
    return (
        <DeleteWrapperDiv>
            <h4 className="errormsg">{error}</h4>
            <Confirm>
                <div>
                    <input autoComplete="new-password" name="password" type="password" placeholder="비밀번호" onChange={(e)=> onChangeRemoveRe(e)} />
                </div>
            </Confirm>
            <Cancel>
                <WriteReCommentButton onClick={() => onGoRemoveReComment(recommentId)}><h4>X</h4></WriteReCommentButton>
            </Cancel>            
        </DeleteWrapperDiv>
    )
}

export default DeleteReComment