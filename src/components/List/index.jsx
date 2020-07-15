import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Card from "~/components/Common/Card";
import getPosts from "~/utils/getPosts";
import { PREFIX, CONTENT_PER_PAGE, PAGE_PER_SCREEN } from "~/constants";
import BaseComponent from "../base/base";
import MoonBackgroundAnimation from "../base/common/LargeMoon.js";
import moon from "../../components/parallax/common/moon.webp";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import "./styled.css";

const PostsWrapper = styled.div`
  background: linear-gradient(45deg, #c31432, #240b36) !important;
  margin: auto;
  padding: 120px 100px 100px;
  max-width: 100%;
  font-size: 0;
  .cardpage {
    padding: 100px;
  }
  @media (max-width: 1000px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    clear: both;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 32px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
  .cardpage {
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  .jb-wrap {
    width: 30%;
    margin: 10px auto;
    position: relative;
  }
  .jb-wrap img {
    width: 100%;
    vertical-align: middle;
  }
  .jb-text {
    color: white;
    font-weight: 800;
    text-shadow: 2px 2px 20px gray;
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 600px) {
    .jb-wrap {
      width: 30%;
      margin: 10px auto;
      position: relative;
    }
    .jb-wrap img {
      width: 100%;
      vertical-align: middle;
    }
    .jb-text {
      color: white;
      font-weight: 800;
      text-shadow: 2px 2px 20px gray;
      font-size: 14px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const List = ({ data, location }) => {
  const [page, setPage] = useState(1);
  const allPosts = getPosts(data);
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <PostsWrapper>
        <Helmet>
          <title>{`${PREFIX}POST`}</title>
          <meta name="og:title" content={`${PREFIX}POST`} />
        </Helmet>
        <ImageWrapper>
          <div className="jb-wrap">
            <MoonBackgroundAnimation>
              <img src={moon} />
            </MoonBackgroundAnimation>
            <div className="jb-text">BLOG LIST</div>
          </div>
        </ImageWrapper>
        <div className="cadepage">
          {posts.map(
            ({
              node: {
                frontmatter: { images, tags, path, ...otherProps },
              },
            }) => (
              <Card
                key={path}
                path={path}
                images={images}
                tags={tags}
                {...otherProps}
              />
            )
          )}
          <Pagination
            count={Math.ceil(postCount / CONTENT_PER_PAGE)}
            page={page}
            size="large"
            onChange={handleChange}
            style={{
              listStyle: "none",
              color: "primary",
              marginBottom: "100px",
            }}
          />
        </div>
      </PostsWrapper>
    </>
  );
};

List.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default List;
