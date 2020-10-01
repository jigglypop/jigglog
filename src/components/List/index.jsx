import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Card from "~/components/Common/Card";
import getPosts from "~/utils/getPosts";
import { PREFIX, CONTENT_PER_PAGE, PAGE_PER_SCREEN } from "~/constants";
import MoonBackgroundAnimation from "../base/common/LargeMoon.js";
import moon from "../../components/parallax/common/moon.webp";
import Pagination from "@material-ui/lab/Pagination";
import "./styled.css";
import PostsWrapper from "../Common/PostsWrapper";
import ImageWrapper from "../Common/ImageWrapper";
import LargeWrapper from "../Common/LargeWrapper";

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
        <LargeWrapper>
          <ImageWrapper>
            <div className="jb-wrap">
              <MoonBackgroundAnimation>
                <img src={moon} />
              </MoonBackgroundAnimation>
              <div className="jb-text">BLOG LIST</div>
              <div className="jb-under">블로그 모든 글 목록</div>
            </div>
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
            <div className="pagination">
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
          </ImageWrapper>
        </LargeWrapper>
      </PostsWrapper>
    </>
  );
};

List.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default List;
