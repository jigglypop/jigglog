import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import PostsWrapper from "~/components/Common/PostsWrapper";
import Card from "~/components/Common/Card";
import Pagination from "~/components/Common/Pagination";
import getPosts from "~/utils/getPosts";
import getPage from "~/utils/getPage";
import { CONTENT_PER_PAGE } from "~/constants";

import moon from "./moon.png";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Link } from "gatsby";

const TagWrapper = styled.div`
  .Wrapper {
    width: 40%;
    margin: 10px auto;
    position: relative;
  }

  img {
    width: 40%;
    opacity: 0.4;
    vertical-align: middle;
    position: relative;
    left: 50%;
    margin-top: 40vh;
    transform: translate(-50%, -50%);
  }
  .Wrapper-Grid {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    position: absolute;
    width: 400px;
    z-index: 10;
    margin-top: 400px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .Wrapper-text {
    color: white;
    font-weight: 800;
    text-shadow: 2px 2px 20px gray;
    font-size: 12px;
  }
  .Wrapper-title {
    color: white;
    font-weight: 800;
    margin-top: -80vh;

    text-shadow: 4px 4px 40px white;
    font-size: 40px;
    position: relative;
    text-align: center;
    animation: blink 1.2s ease-in-out infinite alternate;

    @keyframes blink {
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .Wrapper-titles {
    color: white;
    font-weight: 800;
    margin-bottom: 50vh;

    text-shadow: 4px 4px 40px white;
    font-size: 20px;
    position: relative;
    text-align: center;
    animation: blink 1.2s ease-in-out infinite alternate;

    @keyframes blink {
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
const CategorizedList = ({ data, location }) => {
  const page = getPage(location);
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
        <TagWrapper>
          <Grid container className="Wrapper-Grid">
            {results.map(({ key, length }) => (
              <Grid item xs={3} key={key}>
                <h1 className="Wrapper-text">
                  <Link to={`/categories/${key}/1`}>{key}</Link>
                </h1>
              </Grid>
            ))}
          </Grid>
          <img src={moon} />
          <h1 className="Wrapper-title">{decodeURI(category)}</h1>
          <h1 className="Wrapper-titles">카테고리</h1>
        </TagWrapper>

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
      </PostsWrapper>
      <Pagination
        prefix={`/categories/${category}/`}
        postCount={postCount}
        location={location}
      />
    </>
  );
};

CategorizedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default CategorizedList;
