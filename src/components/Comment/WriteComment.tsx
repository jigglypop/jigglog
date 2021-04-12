import React, { ChangeEvent } from 'react';
import { useWriteComment } from '../../customhooks/writecomment';
import { WriteCommentDiv, WriteCommentButton, UpperDiv, UnderDiv, SmallTextDiv } from './style';


interface WriteCommentComponent {
    onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>)=> void,
    onSubmitComment: () => void,
}

const WriteCommentComponent = ( ) =>{
    const { error, onChangeComment, onSubmitComment } = useWriteComment()

    return (
        <WriteCommentDiv>
            <UpperDiv>
                <textarea autoComplete="content" name="content" placeholder="내용" onChange={(e)=> onChangeComment(e)}/>
                <h4 className="errormsg">{error}</h4>
            </UpperDiv>
            <UnderDiv>
                <SmallTextDiv>
                    <div>
                        <input autoComplete="new-password" name="name" placeholder="닉네임" onChange={(e)=> onChangeComment(e)}/>
                    </div>
                    <div>
                        <input autoComplete="new-password" name="password" type="password" placeholder="비밀번호" onChange={(e)=> onChangeComment(e)} />
                    </div>
                </SmallTextDiv>
                <div>
                    <WriteCommentButton onClick={onSubmitComment}><h4>등록</h4></WriteCommentButton>
                </div>            
            </UnderDiv>
        </WriteCommentDiv>
    )
}

export default WriteCommentComponent