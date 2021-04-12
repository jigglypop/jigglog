// import CommentItem from './CommentItem';
import React from 'react';
import { ReCommentDiv, ReCommentItemsDiv, ReCommentWriteDiv, ReCommentCountDiv } from './style';
import WriteReComment from './WriteReComment';
import ReCommentItem from './ReCommentItem';

const ReCommentsComponent = ( recomments : any) =>{
    if (recomments){
        return (
            <ReCommentDiv>
                <ReCommentCountDiv>
                    <h4>{recomments.recomments.length} 개의 대댓글</h4>
                </ReCommentCountDiv>
                <WriteReComment/>
                <ReCommentItemsDiv>
                {recomments.recomments.map((recomment: any, index: any) => 
                    <ReCommentItem recomment={recomment} key={index}/>)}
                </ReCommentItemsDiv>
            </ReCommentDiv>)
    } else {
        return (
            <ReCommentDiv></ReCommentDiv>
        )
    }

}

export default ReCommentsComponent