import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import formattedDate from "~/utils/formattedDate";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const TagWrapper = styled.div`
  font-weight: 800;
`;

export const StyledCard = styled.div`
  background: rgb(31, 31, 36);
  box-shadow: 6px 6px 8px black;
  .grid {
    margin-left: -5%;
  }
  @media (max-width: 1000px) {
    .grid {
      margin-left: 0;
    }
  }
`;

export const DivWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const Picture = styled.img`
  width: 70%;
  object-fit: cover;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Content = styled.div`
  margin: 10px;
  height: 200px;
  div {
    display: inline-block;
    vertical-align: middle;
  }
  h1.title {
    margin-bottom: 20px;
    line-height: 1.5em;
    font-size: 20px;
    font-weight: 800;
  }
  h1.summary {
    margin-bottom: 20px;
    line-height: 1.5em;
    font-size: 13px;
    font-weight: 800;
  }
  h1.date {
    color: #66d9ef;
    line-height: 1.5em;
    font-size: 10px;
    font-weight: 800;
  }
  @media (max-width: 1000px) {
    h1.title {
      line-height: 1.5em;
      font-size: 15px;
      font-weight: 800;
    }
    h1.summary {
      line-height: 1.5em;
      font-size: 10px;
      font-weight: 800;
    }
    h1.date {
      color: #66d9ef;
      line-height: 1.5em;
      font-size: 8px;
      font-weight: 800;
    }
  }
`;

export const TagItem = styled.div`
  background: linear-gradient(45deg, #8a2387, #e94057, #f64f59) !important;
  margin: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 2px;
  padding-top: 2px;
  border-radius: 10px;
  margin-top: 30px;

  h1.tagitem {
    font-size: 10px;
  }
  @media (max-width: 1000px) {
    h1.tagitem {
      font-size: 6px;
    }
  }
`;

const Card = ({ tags, path, images, title, date, summary }) => {
  const [image = null] = images;
  const [active, setActive] = useState(false);
  const props = useSpring({
    transform: active ? "scale(1.05)" : "scale(1)",
  });

  return (
    <DivWrapper>
      <animated.div
        className="spring-div"
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
        style={{
          transform: props.transform,
        }}
      >
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
                <Grid item xs={12} class="grid">
                  <h1 className="title">{title}</h1>
                  <h1 className="summary">{summary}</h1>
                  <TagWrapper>
                    {tags.map((tag) => (
                      <Link key={tag} to={`/tags/${tag}/1`}>
                        <TagItem>
                          <h1 className="tagitem">#{tag}</h1>
                        </TagItem>
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
      </animated.div>
    </DivWrapper>
  );
};

Card.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  date: PropTypes.string,
  summary: PropTypes.string,
};

Card.defaultProps = {
  tags: [],
  images: [],
  title: "",
  date: "",
  summary: "",
};

export default Card;
