import React from 'react';
import { CommentUserDiv } from './style';

interface ICommentUser {
    name: string
}

const CommentUser = ({ name } : ICommentUser) =>{
    return (
        <CommentUserDiv>
            <h4>{name}</h4>
        </CommentUserDiv>
    )
}

export default CommentUser