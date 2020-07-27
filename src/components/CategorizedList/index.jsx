import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Card from "~/components/Common/Card";
import getPosts from "~/utils/getPosts";
import { CONTENT_PER_PAGE } from "~/constants";

import MoonBackgroundAnimation from "../base/common/LargeMoon.js";
import moon from "../../components/parallax/common/moon.webp";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";

import { Link } from "gatsby";
import PostsWrapper from "../Common/PostsWrapper";
import ImageWrapper from "../Common/ImageWrapper";
import CategoryItem from "../Common/CategoryItem";
import LargeWrapper from "../Common/LargeWrapper";

const CategorizedList = ({ data, location }) => {
  const [page, setPage] = useState(1);
  const [, , category] = location.pathname.split("/");
  const edgeSet = getPosts(data).filter(
    ({
      node: {
        frontmatter: { category: c },
      },
    }) => decodeURI(category) === c
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
  // 카테고리셋
  const categorySet = [];
  getPosts(data).filter(({ node: { frontmatter: { type, category } } }) =>
    type === null ? categorySet.push(category) : ""
  );
  const result = categorySet.reduce((object, currentValue) => {
    if (!object[currentValue]) {
      object[currentValue] = { key: currentValue, length: 0 };
    }
    object[currentValue]["length"]++;
    return object;
  }, {});

  const results = [];
  for (var i in result) {
    results.push(result[i]);
  }
  return (
    <>
      <PostsWrapper>
        <Helmet>
          <title>{decodeURI(category)}</title>
          <meta name="og:title" content={decodeURI(category)} />
        </Helmet>
        <LargeWrapper>
          <ImageWrapper>
            <div className="jb-wrap">
              <MoonBackgroundAnimation>
                <img src={moon} />
              </MoonBackgroundAnimation>
              <h1 className="jb-text">{decodeURI(category)}</h1>
              <h1 className="jb-under">카테고리</h1>
            </div>
          </ImageWrapper>
          <Grid
            container
            style={{ justifyContent: "center", paddingBottom: "10px" }}
          >
            {results.map(({ key, length }) => (
              <Grid item key={key}>
                <Link to={`/categories/${key}/1`}>
                  <CategoryItem>
                    <h1>{key}</h1>
                  </CategoryItem>
                </Link>
              </Grid>
            ))}
          </Grid>
        </LargeWrapper>
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

CategorizedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default CategorizedList;
