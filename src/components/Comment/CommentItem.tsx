import React from 'react';
// import { IComment } from 'src/server/models/comment';
// import ReCommentsComponent from '../recomments/ReCommentsComponent';
// import { GiCancel } from 'react-icons/gi'
import { 
    CommentItemDiv,
    CommentNameDiv,
    CommentItemUpperDiv,
    CommenItemContentDiv,
    CommenItemLowerDiv,
    TimeDiv,
    OpenTextDiv
} from './style';
import { IComment } from 'src/module/postcomments';
import CommentUser from './CommentUser'
import DeleteComment from './DeleteComment';
import ReCommentsComponent from '../Recomment/ReCommentsComponent';

interface ICommentItem {
    comment : IComment
    openId: string
    setOpen: (openId: string) => void
}

const CommentItem = ({ comment, openId, setOpen } : ICommentItem) =>{
    const time = new Date(comment.created)
    return (
        <div>
            <CommentItemDiv>
                <CommentNameDiv>
                    <CommentUser name={comment.name}/>
                </CommentNameDiv>
                <CommentItemUpperDiv>
                    <TimeDiv>
                        <h4>{time.toString()}</h4>
                    </TimeDiv>
                    <DeleteComment commentId={comment.id + ''}/>
                </CommentItemUpperDiv>
                <CommenItemContentDiv>
                    <h4>{comment.content}</h4>
                </CommenItemContentDiv>
                <CommenItemLowerDiv>
                    <OpenTextDiv onClick={() => setOpen(comment.id)}>
                        {openId === comment.id ? 
                            <h4>{comment.recomments.length} 개의 대댓글 / 닫기</h4> : 
                            <h4>{comment.recomments.length} 개의 대댓글 / 대댓글 열기</h4>}
                    </OpenTextDiv>
                </CommenItemLowerDiv>
            </CommentItemDiv>
            { openId === comment.id && <ReCommentsComponent recomments={comment.recomments}/>}
        </div>
        )
    }

export default CommentItem