import React, { useCallback, useEffect, useState } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

import Helmet from "react-helmet";
import Clipboard from "clipboard";
import Bio from "~/components/Bio";
import {
  PREFIX,
  SITE_URL,
  DISQUS_ID,
  CONTENT_PER_SMALL_PAGE,
  PAGE_PER_SMALL_SCREEN,
} from "~/constants";
import formattedDate from "~/utils/formattedDate";
import "./styled.css";
import styled from "styled-components";
import SmallCard from "~/components/Common/SmallCard";
import Pagination from "@material-ui/lab/Pagination";

const PostWrapper = styled.section`
  margin: auto;
  padding: 10px 0 0;
  max-width: 1200px;
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
  /* padding: 50px; */
  @media (max-width: 414px) {
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
    font-size: 36px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
`;

const PostContent = styled.section`
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("../../fonts/NanumBarunGothic.ttf");
  }
  font-family: "NanumBarunGothic" !important;
  padding: 0 100px 100px 100px;
  line-height: 2em;
  color: black;
  h1 {
    margin-top: 50px;
    margin-bottom: 50px;

    font-size: 40px;
    font-weight: 800;
  }
  h2 {
    margin-top: 40px;
    font-size: 28px;
    font-weight: 800;
  }
  h3 {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 800;
  }
  h4 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 21px;
  }
  h5 {
    margin-top: 40px;
    font-size: 18px;
    font-weight: 800;
  }

  p {
    margin-top: 10px;
    font-size: 17px;
    margin-left: 10px;
    font-weight: 100;
  }
  li {
    margin-top: 10px;
    font-size: 17px;
    margin-left: 30px;
    font-weight: 100;
  }
  blockquote {
    line-height: 1.2em;
    color: #aaa;
    font-size: 24px;
  }
  pre {
    font-size: 17px;
  }
  table {
    /* background: linear-gradient(45deg, #232526, #414345); */
    margin: 20px;
    background: #434343;
  }
  th {
    border: 2px solid white;
    color: white;
    padding: 20px;
    font-size: 17px;
  }
  tr {
    border: 2px solid white;
    color: white;

    padding: 20px;
    font-size: 17px;
  }
  td {
    border: 2px solid white;
    color: white;

    padding: 20px;
    font-size: 17px;
  }
  @media (max-width: 600px) {
    padding: 0 10px 10px 10px;
    line-height: 2em;
    color: black;
    h1 {
      margin-top: 2px;
      margin-bottom: 2px;

      font-size: 20px;
      font-weight: 800;
    }
    h2 {
      margin-top: 2px;
      font-size: 18px;
      font-weight: 800;
    }
    h3 {
      margin-top: 2px;
      font-size: 16px;
      font-weight: 800;
    }
    h4 {
      margin-top: 2px;
      font-weight: 800;
      font-size: 14px;
    }
    h5 {
      margin-top: 2px;
      font-size: 12px;
      font-weight: 800;
    }

    p {
      margin-top: 2px;
      font-size: 10px;
      font-weight: 100;
    }
    li {
      margin-top: 2px;
      font-size: 10px;
      margin-left: 30px;
      font-weight: 100;
    }
    blockquote {
      line-height: 1.2em;
      color: #aaa;
      font-size: 10px;
    }
    pre {
      font-size: 10px;
    }
    table {
      margin: 2px;
      background: #434343;
    }
    th {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
    tr {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
    td {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
  }
`;

export const ImageWrapper = styled.div`
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("../../fonts/NanumBarunGothic.ttf");
  }
  font-family: "NanumBarunGothic" !important;

  .jb-wrap {
    max-height: 500px;
    width: 100%;
    margin: 10px auto;
    position: relative;
    overflow: hidden;
  }
  .jb-wrap img {
    max-height: initial;
    width: 100%;
    vertical-align: middle;
  }
  .jb-text {
    color: white;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: blink 1.2s ease-in-out infinite alternate;
    @media (max-width: 600px) {
      margin-top: -100px;
      font-size: 20px;
    }

    @keyframes blink {
      50% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
const ComponentInPost = styled.div`
  position: relative;
  margin: 1em 0 1em;
  padding: 55px 16px 16px;
  color: #263238;
  border: 1px solid #263238;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 0 0 80px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    background-color: #263238;
    font-weight: 100;
    content: "Application for example";
  }
  &:after {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 20px;
    width: 10px;
    height: 10px;
    background-color: #ff5f56;
    border-radius: 50%;
    content: "";
  }
  & > *:first-child {
    &:before {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 40px;
      width: 10px;
      height: 10px;
      background-color: #ffbd2e;
      border-radius: 50%;
      content: "";
    }
    &:after {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 60px;
      width: 10px;
      height: 10px;
      background-color: #27c93f;
      border-radius: 50%;
      content: "";
    }
  }
`;

const PostTemplate = ({
  data: {
    post: {
      html,
      frontmatter: { title, date, images = [], components = [] },
    },
    posts,
  },
  location,
}) => {
  const loadDisqus = useCallback(({ url, identifier, title }) => {
    const d = global.document;

    if (!d.getElementById("disqus-sdk")) {
      const s = d.createElement("script");
      s.src = `https://${DISQUS_ID}.disqus.com/embed.js`;
      s.setAttribute("data-timestamp", Date.now());
      d.body.appendChild(s);
    }

    global.disqus_config = function disqusCallback() {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };
  }, []);

  const createCopyButton = useCallback(() => {
    const codes = global.document.querySelectorAll(
      "#post-contents .gatsby-highlight"
    );
    codes.forEach((code) => {
      const button = document.createElement("button");
      button.setAttribute("class", "copy-button");
      button.innerHTML = "COPY";

      code.appendChild(button);
    });

    const clipboard = new Clipboard(".copy-button", {
      target: ({ previousElementSibling }) => previousElementSibling,
    });

    clipboard.on("success", (e) => {
      e.clearSelection();
    });
  }, []);

  const renderComponents = useCallback((components) => {
    if (Array.isArray(components)) {
      try {
        components.forEach(
          ({ rootId: componentRootId, fileName: componentFileName }) => {
            const $componentContainer = global.document.getElementById(
              componentRootId
            );
            const App = require(`~/postComponents/${componentFileName}`)
              .default;

            render(
              <ComponentInPost>
                <App />
              </ComponentInPost>,
              $componentContainer
            );
          }
        );
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  useEffect(() => {
    const { pathname: identifier } = location;
    const url = `${SITE_URL}${identifier}`;

    loadDisqus({
      url,
      identifier,
      title,
    });
  }, []);

  useEffect(() => {
    createCopyButton();
    renderComponents(components);
  }, []);
  const [image = null] = images;
  // 윗포스트
  const [page, setPage] = useState(1);

  const allPosts = posts.edges.filter(
    ({
      node: {
        frontmatter: { type },
      },
    }) => type === null
  );
  const postCount = allPosts.length;
  const postlist = allPosts.slice(
    (page - 1) * CONTENT_PER_SMALL_PAGE,
    page * CONTENT_PER_SMALL_PAGE
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <PostWrapper>
      <Helmet>
        <title>{`${PREFIX}${title}`}</title>
        <meta name="og:title" content={`${PREFIX}${title}`} />
      </Helmet>

      <ImageWrapper>
        <div className="jb-wrap">
          <div className="jb-image">
            {image && (
              <img
                src={
                  image.includes("//") ? image : require(`~/resources/${image}`)
                }
                alt=""
              />
            )}
          </div>
        </div>
        <div className="jb-text">
          <p>{title}</p>
        </div>
      </ImageWrapper>
      <PostContent>
        <h5>{formattedDate(date)} 시에 저장한 글입니다.</h5>
        <hr />
        <Bio style={{ marginBottom: "10vh" }} color={"black"} />
        <hr style={{ marginBottom: "100px" }} />
        <div
          id="post-contents"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ marginBottom: "100px" }}
        />
        <div id="disqus_thread" />
        <noscript>
          Please enable JavaScript to view the &nbsp;
          <a href="https://disqus.com/?ref_noscript">
            comments powered by Disqus.
          </a>
        </noscript>
        <Pagination
          count={Math.ceil(postCount / CONTENT_PER_SMALL_PAGE)}
          page={page}
          size="small"
          onChange={handleChange}
          style={{ listStyle: "none" }}
        />
        <hr />

        {postlist.map(
          ({
            node: {
              frontmatter: { images, tags, path, ...otherProps },
            },
          }) => (
            <SmallCard
              key={path}
              path={path}
              images={images}
              tags={tags}
              {...otherProps}
            />
          )
        )}
      </PostContent>
    </PostWrapper>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default PostTemplate;
