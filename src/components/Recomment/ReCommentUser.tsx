import React from 'react';
import { ReCommentUserDiv } from './style';

interface IReCommentUser {
    name: string
}

const ReCommentUser = ({ name } : IReCommentUser) =>{
    return (
        <ReCommentUserDiv>
            <h4>{name}</h4>
        </ReCommentUserDiv>
    )
}

export default ReCommentUser