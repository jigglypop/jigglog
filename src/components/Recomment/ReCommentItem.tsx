import React from 'react';
// import { IReComment } from 'src/server/models/comment';
// import ReReCommentsComponent from '../recomments/ReReCommentsComponent';
import { 
    ReCommentItemDiv,
    ReCommentNameDiv,
    ReCommentItemUpperDiv,
    CommenItemContentDiv,
    CommenItemLowerDiv,
    TimeDiv
} from './style';
import { IComment, IReComment } from '../../module/postcomments';
import ReCommentUser from './ReCommentUser'
import DeleteReComment from './DeleteReComment';

interface IReCommentItem {
    recomment : IReComment
}

const ReCommentItem = ({ recomment } : IReCommentItem) =>{
    const time = new Date(recomment.created)
    return (
        <div>
            <ReCommentItemDiv>
                <ReCommentNameDiv>
                    <ReCommentUser name={recomment.name}/>
                </ReCommentNameDiv>
                <ReCommentItemUpperDiv>
                    <TimeDiv>
                        <h4>{time.toString()}</h4>
                    </TimeDiv>
                    <DeleteReComment recommentId={recomment.id + ''}/>
                </ReCommentItemUpperDiv>
                <CommenItemContentDiv>
                    <h4>{recomment.content}</h4>
                </CommenItemContentDiv>
                <CommenItemLowerDiv>
                </CommenItemLowerDiv>
            </ReCommentItemDiv>
        </div>
        )
    }

export default ReCommentItem