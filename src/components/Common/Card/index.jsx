import React, { useState, useCallback, useEffect } from "react";
import { Link } from "gatsby";
import { useSpring } from "react-spring";
import Grid from "@material-ui/core/Grid";
import OuterButton from '../OuterButton'
import {
  TagItem,
  TagWrapper,
  StyledCard,
  DivWrapper,
  Content,
  Picture,
} from "./styled";


const Card = ({ tags, path, images, title, date, summary }) => {

  return (
    <DivWrapper>
        <Link to={path}>
          <StyledCard>
            <Content>
              <Grid container>

                <Grid item xs={3}>
                  <Picture
                    src={
                      images.includes("//")
                        ? images
                        : require(`~/resources/${images}`)
                    }
                  />
                </Grid>


                <Grid item xs={12} >
                  <h1 className="title">{title}</h1>
                  <h1 className="summary">{summary}</h1>

                  <TagWrapper>
                    {tags.map((tag) => (
                      <Link key={tag} to={`/tags/${tag}/1`}>
                        <OuterButton fontSize="10px" height="38px" borderColor="#66d9ef" color="#66d9ef">
                          <h4 className="tagitem">#{tag}</h4>
                        </OuterButton>
                      </Link>
                    ))}
                  </TagWrapper>
                  <h1 className="date">
                    {date
                      ? date
                          .split("T")
                          .join(" ")
                          .replace(".000Z", "")
                      : date}
                  </h1>

                </Grid>
              </Grid>
            </Content>
          </StyledCard>
        </Link>
      <hr />
    </DivWrapper>
  );
};


export default Card;
