import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import PostsWrapper from "~/components/Common/PostsWrapper";
import Card from "~/components/Common/Card";
import Pagination from "~/components/Common/Pagination";
import getPosts from "~/utils/getPosts";
import getPage from "~/utils/getPage";
import { CONTENT_PER_PAGE } from "~/constants";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import moon from "./moon.png";
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
    margin-bottom: -100px;
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
    margin-top: 350px;
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
    margin-top: -60vh;
    margin-bottom: -10vh;

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
    margin-top: 12vh;
    margin-bottom: 30vh;

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

  @media (max-width: 600px) {
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
      margin-top: 10vh;
      margin-bottom: -100px;
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
      margin-top: 100px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .Wrapper-text {
      color: white;
      font-weight: 800;
      text-shadow: 2px 2px 20px gray;
      font-size: 8px;
    }
    .Wrapper-title {
      margin-top: -12vh;
      color: white;
      font-weight: 800;
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
    .Wrapper-titles {
      color: white;
      font-weight: 800;
      text-shadow: 4px 4px 40px white;
      font-size: 15px;
      margin-bottom: 20vh;

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
  }
`;

const TaggedList = ({ data, location }) => {
  const page = getPage(location);
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
        <TagWrapper>
          <Grid container className="Wrapper-Grid">
            {tagResults.map(({ key, length }) => (
              <Grid item xs={3} key={key}>
                <h1 className="Wrapper-text">
                  <Link to={`/tags/${key}/1`}>{key}</Link>
                </h1>
              </Grid>
            ))}
          </Grid>
          <img src={moon} />

          <h1 className="Wrapper-title">{decodeURI(tag)}</h1>
          <h1 className="Wrapper-titles">태그</h1>
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
              tags={tags}
              images={images}
              {...otherProps}
            />
          )
        )}
      </PostsWrapper>
      <Pagination
        prefix={`/tags/${tag}/`}
        postCount={postCount}
        location={location}
      />
    </>
  );
};

TaggedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default TaggedList;
