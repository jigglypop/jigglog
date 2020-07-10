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

const PostsWrapper = styled.div`
  background: linear-gradient(45deg, #c31432, #240b36) !important;
  margin: auto;
  padding: 120px 0 0;
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
    width: 400px;
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
    font-size: 35px;
    margin-top: -50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  .jb-under {
    color: white;
    font-weight: 800;
    text-shadow: 2px 2px 20px gray;
    font-size: 25px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .jb-tag {
    margin-top: 50px;
    color: white;
    z-index: 20;
    font-weight: 800;
    text-shadow: 2px 2px 20px gray;
    font-size: 12px;
  }
  h2 {
    margin: 2px;
  }
  @media (max-width: 1000px) {
    .jb-wrap {
      width: 300px;
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
      margin-top: -50px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
    .jb-under {
      color: white;
      font-weight: 800;
      text-shadow: 2px 2px 20px gray;
      font-size: 15px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .jb-tag {
      margin-top: 50px;
      color: white;
      z-index: 20;
      font-weight: 800;
      text-shadow: 2px 2px 20px gray;
      font-size: 10px;
    }
    h2 {
      margin: 2px;
    }
  }
`;

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
        <ImageWrapper>
          <div className="jb-wrap">
            <MoonBackgroundAnimation>
              <img src={moon} />
            </MoonBackgroundAnimation>
            <h1 className="jb-text">{decodeURI(tag)}</h1>
            <h1 className="jb-under">태그</h1>
            <Grid container className="jb-tag">
              {tagResults.map(({ key, length }) => (
                <Grid key={key}>
                  <h2>
                    <Link to={`/tags/${key}/1`}>#{key}</Link>
                  </h2>
                </Grid>
              ))}
            </Grid>
          </div>
        </ImageWrapper>

        <div className="cardpage">
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
        </div>
      </PostsWrapper>
    </>
  );
};

TaggedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default TaggedList;
