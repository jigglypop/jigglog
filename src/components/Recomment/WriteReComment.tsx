import React from 'react';
import { useWriteReComment } from '../../customhooks/writerecomment';
import { WriteReCommentDiv, WriteReCommentButton, UpperDiv, UnderDiv, SmallTextDiv } from './style';

const WriteReComment = ( ) =>{
    const { error, onChangeReComment, onSubmitReComment } = useWriteReComment()

    return (
        <WriteReCommentDiv>
            <UpperDiv>
                <textarea autoComplete="content" name="content" placeholder="내용" onChange={(e)=> onChangeReComment(e)}/>
                <h4 className="errormsg">{error}</h4>
            </UpperDiv>
            <UnderDiv>
                <SmallTextDiv>
                    <div>
                        <input autoComplete="new-password" name="name" placeholder="닉네임" onChange={(e)=> onChangeReComment(e)}/>
                    </div>
                    <div>
                        <input autoComplete="new-password" name="password" type="password" placeholder="비밀번호" onChange={(e)=> onChangeReComment(e)} />
                    </div>
                </SmallTextDiv>
                <div>
                    <WriteReCommentButton onClick={onSubmitReComment}><h4>등록</h4></WriteReCommentButton>
                </div>            
            </UnderDiv>
        </WriteReCommentDiv>
    )
}

export default WriteReComment