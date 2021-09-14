import CommentItem from './CommentItem';
import React from 'react';
import { CommentDiv, CommentItemsDiv, CommentCountDiv } from './style';
import WriteComment from './WriteComment';
import { usePostComments } from '../../customhooks/postcomment';

const CommentsComponent = () => {
  const { comments, openId, setOpen } = usePostComments();
  if (comments) {
    return (
      <CommentDiv>
        <CommentCountDiv>
          <h4>
            {comments.length} 개의 댓글 (아래 댓글이 달리면 삭제할 수 없습니다)
          </h4>
        </CommentCountDiv>
        <WriteComment />
        <CommentItemsDiv>
          {comments.map((comment, index) => (
            <CommentItem
              comment={comment}
              key={index}
              openId={openId}
              setOpen={setOpen}
            />
          ))}
        </CommentItemsDiv>
      </CommentDiv>
    );
  } else {
    return <CommentDiv></CommentDiv>;
  }
};

export default CommentsComponent;
