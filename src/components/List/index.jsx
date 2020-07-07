import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import PostsWrapper from "~/components/Common/PostsWrapper";
import Card from "~/components/Common/Card";
import Pagination from "~/components/Common/Pagination";
import getPosts from "~/utils/getPosts";
import getPage from "~/utils/getPage";
import { PREFIX, CONTENT_PER_PAGE } from "~/constants";
import BaseComponent from "../base/base";
import MoonBackgroundAnimation from "../base/common/LargeMoon.js";
import moon from "./moon.png";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  .jb-wrap {
    width: 60%;
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
    font-size: 40px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 600px) {
    .jb-wrap {
      width: 60%;
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
      font-size: 20px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const List = ({ data, location }) => {
  const page = getPage(location);
  const allPosts = getPosts(data);
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );
  return (
    <>
      <div>
        <BaseComponent />
      </div>

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
      </PostsWrapper>
      <Pagination postCount={postCount} location={location} />
    </>
  );
};

List.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default List;
