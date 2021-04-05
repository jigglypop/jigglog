import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Card from "~/components/Common/Card";
import getPosts from "~/utils/getPosts";
import { CONTENT_PER_PAGE } from "~/constants";
import MoonBackgroundAnimation from "../base/common/LargeMoon.js";
import moon from "../../components/parallax/common/moon.webp";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";

import { Link } from "gatsby";
import PostsWrapper from "../Common/PostsWrapper";
import ImageWrapper from "../Common/ImageWrapper";
// import CategoryItem from "../Common/CategoryItem";
import LargeWrapper from "../Common/LargeWrapper";
import OuterButton from "../Common/OuterButton";
import ClipText from "../Common/ClipText";
import { CategoryWrapper, ListImage, ListTitle, ListContent, ListPage, ListCategory } from './styled'

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
          <CategoryWrapper>
            <ListImage>
              <ClipText>
                <h1>CATEGORY</h1>
              </ClipText>
            </ListImage>
            <ListTitle>
                <h3>카테고리</h3>
            </ListTitle>
            <ListCategory>
              <div>
              {results.map(({ key, length }) => (
                <div style={{ display: "inline-block"}}>
                  <Link to={`/categories/${key}/1`}>
                    <OuterButton>
                      <h4>{key}</h4>
                    </OuterButton>
                  </Link>
                </div>
              ))}
              </div>
            </ListCategory>
            <ListContent>
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
            </ListContent>
            <ListPage>
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
            </ListPage>
          </CategoryWrapper>
        </LargeWrapper>
      </PostsWrapper>
    </>
  );
};


export default CategorizedList;
