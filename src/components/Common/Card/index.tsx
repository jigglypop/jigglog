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
import { AiOutlineMessage } from 'react-icons/ai'

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
                          <h4 className="tagitem">#{tag}</h4>
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
                        {count === 0 ? 
                          <div className="textouter">
                            <AiOutlineMessage className="countwhite"/><h4 className="countwhitetext">{count}</h4>
                          </div>:
                          <div className="textouter">
                            <AiOutlineMessage className="count"/><h4 className="counttext">{count}</h4>
                          </div>
                        }
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
