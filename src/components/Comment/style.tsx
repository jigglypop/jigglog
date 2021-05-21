import styled from 'styled-components'


export const SmallTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  input {
    font-family: "NanumBarunGothicSubset" !important;
    font-size: 0.8rem;
    outline: none;
    width: 100%;
    background-color: white;
    margin: 5px;
    padding: 10px;
    border: none;
  }
`
export const UnderDiv = styled.div`
  grid-row:2/3;
  display: flex;
  justify-content: space-between;
`
export const UpperDiv = styled.div`
  grid-row:1/2;
  text-align: center;
  h4 {
    font-size: 13px;
    font-weight: 800;
    color: #FF416C;
  }
`
export const OpenTextDiv = styled.div`
  cursor: pointer;
  h4 {
    font-size: 10px;
    font-weight: 800;
    color: #FF416C;
  }
`
export const WriteCommentButton = styled.button`
  transition: all 0.2s ease-in-out;
  transition: 0.5s;
  background-color: #141414;
  height: 40px;
  min-width: 50px;
  margin: 5px;
  font-family: "NanumBarunGothicSubset" !important;
  h4 {
    font-size: 12px;
    font-weight:800;
    padding: 10px;
    color: white !important;
  }
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1200px) {
    h4 {
      font-size: 11px;
      padding: 4px;
    }
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 10px;
      padding: 2px;
    }
  }
`;

export const OpenDiv = styled.div`
  display: none;
  &.isopen {
    display: inline;
  }
`

export const CommentDiv = styled.div`
  padding:5%;
  position:relative;
  display:grid;
  grid-template-rows:  50px 1fr 300px ;
  @media (max-width: 1000px) {
    padding:3%;
  }
  @media (max-width: 600px) {
    padding:1%;
  }
`
// 댓글 위 카운트
export const CommentCountDiv = styled.div`
  grid-row: 1/2;
  padding: 20px;
  h4 {
    font-size: 16px;
    font-weight: 800;
    color: black;
  }
  @media (max-width: 1000px) {
    h4 {
      font-size: 12px;
      font-weight: 800;
      color: black;
    }
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 10px;
      font-weight: 800;
      color: black;
    }
  }
`
// 댓글 아이템들
export const CommentItemsDiv = styled.div`
  position:relative;
  grid-row: 2/3;
`
// 댓글 기입
export const CommentWriteDiv = styled.div`
  grid-row: 3/4;
`

// 아이템들
// 외부
export const CommentItemDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
  grid-template-rows:  50px 1fr 1fr;
  margin: 1%;
  @media(max-width: 1000px){
    grid-template-columns: 50px 1fr 1fr;
  }
`
// 댓글 아이템 위
export const CommentItemUpperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding:10px;
  grid-column:2/4;
  grid-row:1/2;
  padding: 10px;
  h4 {
    font-size: 10px;
    font-weight: 800;
    color: gray;
  }
  .cancel {
    cursor:pointer;
    transition: 0.5s;
    &:hover{
      transform: scale(1.2);
    }
  }
`
// 댓글 시간
export const TimeDiv = styled.div`
  display: flex;
  .timetext {
    font-size: 10px;
    font-weight: 800;
    color: gray;
  }
  @media(max-width: 1000px){
    .timetext {
      font-size: 4px;
    }
  }
`

// 댓글 아이템 위
export const DeleteWrapperDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  .errormsg {
    font-size: 10px;
    font-weight: 800;
    color: #FF416C;
  }
`

// 댓글 삭제
export const Cancel = styled.div`
  cursor:pointer;
  transition: 0.5s;
  &:hover{
    transform: scale(1.2);
  }
`

// 댓글 삭제 패스워드 기입
export const Confirm = styled.div`
  input {
    font-family: "NanumBarunGothicSubset" !important;
    font-size: 0.8rem;
    outline: none;
    width: 70%;
    background-color: rgba(0,0,0,0.05);
    margin: 2px;
    padding: 4px;
    border: none;
  }

`

// 댓글 컨텐츠
export const CommenItemContentDiv = styled.div`
  position: relative;
  grid-column:2/4;
  grid-row:2/3;
  padding: 10px;

  h4 {
    font-size: 12px;
    font-weight: 800;
    color: black;
  }
`
// 댓글 아래
export const CommenItemLowerDiv = styled.div`
  grid-column:2/3;
  grid-row:3/4;
  padding: 10px;
`
// 옆 이름공간
export const CommentNameDiv = styled.div`
  background : rgba(0,0,0,0.05);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  border-right: 2px solid #d4d4d4;
  grid-column:1/2;
  grid-row:1/4;
  h4 {
    margin: 1rem;
    font-size: 13px;
    font-weight: 800;
    color: black;
  }
`
// 유저이름
export const CommentUserDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;

  h4 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }
`

export const WriteCommentDiv = styled.div`
  background : rgba(0,0,0,0.05);
  padding: 3%;
  margin-bottom:1%;
  display: grid;
  grid-template-rows:  2fr 1fr;

  h4 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }

  textarea {
    font-family: "NanumBarunGothicSubset" !important;
    font-size: 0.8rem;
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    height: 20vh;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
    border: none;
  }
`



