import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Card from "~/components/Common/Card";
import getPosts from "~/utils/getPosts";
import { CONTENT_PER_PAGE } from "~/constants";
import Grid from "@material-ui/core/Grid";
import { Link } from "gatsby";
import Pagination from "@material-ui/lab/Pagination";
import MoonBackgroundAnimation from "../base/common/LargeMoon.js";
import moon from "../../components/parallax/common/moon.webp";
import styled from "styled-components";
import PostsWrapper from "../Common/PostsWrapper";
import ImageWrapper from "../Common/ImageWrapper";
import TagItem from "../Common/TagItem";
import LargeWrapper from "../Common/LargeWrapper";

const TaggedList = ({ data, location }) => {
  const [page, setPage] = useState(1);
  const [, , tag] = location.pathname.split("/");
  const edgeSet = getPosts(data).filter(
    ({
      node: {
        frontmatter: { tags },
      },
    }) => tags.indexOf(decodeURI(tag)) !== -1
  );
  const allPosts = edgeSet;
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  // 태그셋
  const tagSet = [];
  getPosts(data).filter(({ node: { frontmatter: { type, tags } } }) =>
    type === null
      ? Object.entries(tags).map((item) => tagSet.push(item[1]))
      : ""
  );

  const tagResult = tagSet.reduce((object, currentValue) => {
    if (!object[currentValue]) {
      object[currentValue] = { key: currentValue, length: 0 };
    }
    object[currentValue]["length"]++;
    return object;
  }, {});
  const tagResults = [];
  for (var i in tagResult) {
    tagResults.push(tagResult[i]);
  }
  return (
    <>
      <PostsWrapper>
        <Helmet>
          <title>{decodeURI(tag)}</title>
          <meta name="og:title" content={decodeURI(tag)} />
        </Helmet>
        <LargeWrapper>
          <ImageWrapper>
            <div className="jb-wrap">
              <MoonBackgroundAnimation>
                <img src={moon} />
              </MoonBackgroundAnimation>
              <h1 className="jb-text">{decodeURI(tag)}</h1>
              <h1 className="jb-under">태그</h1>
            </div>
          </ImageWrapper>
          <Grid
            container
            style={{ justifyContent: "center", paddingBottom: "10px" }}
          >
            {tagResults.map(({ key, length }) => (
              <Grid item key={key}>
                <Link to={`/tags/${key}/1`}>
                  <TagItem>
                    <h1>#{key}</h1>
                  </TagItem>
                </Link>
              </Grid>
            ))}
          </Grid>
          <div className="cardpage">
            {posts.length === 0 ? <div>No posts.</div> : null}
            {posts.map(
              ({
                node: {
                  frontmatter: { images, tags, path, ...otherProps },
                },
              }) => (
                <Card
                  key={path}
                  path={path}
                  tags={tags}
                  images={images}
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
          </div>
        </LargeWrapper>
      </PostsWrapper>
    </>
  );
};

TaggedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default TaggedList;
