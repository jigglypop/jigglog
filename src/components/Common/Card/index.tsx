import React from "react";
import { Link } from "gatsby";
import OuterButton from '../OuterButton'
import {
  TagWrapper,
  StyledCard,
  DivWrapper,
  Content,
  Picture,
  GridWrapper,
  GridOne,
  GridTwo,
  GridThree,
  Left,
  Right,
  CommentCountButton
} from "./styled";

const Card = ({ tags, path, images, title, date, summary, count } : any) => {
  return (
    <DivWrapper>
        <Link to={path}>
          <StyledCard>
            <Content>
              <Left>
                <Picture
                  src={
                    images.includes("//")
                      ? images
                      : require(`~/resources/${images}`)
                  }
                />
              </Left>
              <Right>
                <GridWrapper>
                  <GridOne>
                    <h1 className="title">{title}</h1>
                    <h1 className="summary">{summary}</h1>
                  </GridOne>
                  <GridTwo>
                    <TagWrapper>
                      {tags.map((tag: any) => (
                        <Link key={tag} to={`/tags/${tag}/1`}>
                          <OuterButton fontSize="10px" height="38px" borderColor="#66d9ef" color="#66d9ef">
                            <h4 className="tagitem">#{tag}</h4>
                          </OuterButton>
                        </Link>
                      ))}
                    </TagWrapper>
                  </GridTwo>
                  <GridThree>
                    <div className="inlines">
                      <h1 className="date">
                        {date
                          ? date
                              .split("T")
                              .join(" ")
                              .replace(".000Z", "")
                          : date}
                      </h1>
                    </div>
                    <div className="inlines">
                      <CommentCountButton>
                        <h4>{count}개의 댓글</h4>
                      </CommentCountButton>
                    </div>
                  </GridThree>
                </GridWrapper>
              </Right>
            </Content>            
          </StyledCard>
        </Link>
      <hr />
    </DivWrapper>
  );
};


export default Card;
