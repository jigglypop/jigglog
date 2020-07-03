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
import { ImageWrapper } from "./styled";
import MoonBackgroundAnimation from "../base/common/LargeMoon.js";

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
      <mesh>
        <BaseComponent />
      </mesh>

      <PostsWrapper>
        <Helmet>
          <title>{`${PREFIX}POST`}</title>
          <meta name="og:title" content={`${PREFIX}POST`} />
        </Helmet>
        <ImageWrapper>
          <div class="jb-wrap">
            <MoonBackgroundAnimation>
              <img src={"./moon.png"} />
            </MoonBackgroundAnimation>
            <div class="jb-text">BLOG LIST</div>
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
