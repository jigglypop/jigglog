import React, { useCallback, useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

import Helmet from "react-helmet";
import Clipboard from "clipboard";
import Bio from "~/components/Bio";
import {
  PREFIX,
  SITE_URL,
  DISQUS_ID,
  FACEBOOK_APP_ID,
  CONTENT_PER_SMALL_PAGE,
  PAGE_PER_SMALL_SCREEN,
} from "~/constants";
import formattedDate from "~/utils/formattedDate";
import "./styled.css";
import styled from "styled-components";
import SmallCard from "~/components/Common/SmallCard";
import Pagination from "@material-ui/lab/Pagination";
import TableOfContents from "./tableOfContent";
import Grid from "@material-ui/core/Grid";
import { FacebookProvider, Comments, ShareButton } from "react-facebook";

const PostWrapper = styled.div`
  margin: auto;
  padding: 10px 0 0;
  margin: 0 20px 20px 20px;
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
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
  a {
    font-size: 12px;
    font-weight: 800;
    color: gray;
  }
`;

const PostContent = styled.section`
  padding: 0 20px 20px 20px;
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
  h4,
  h5 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 21px;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 100;
  }
  strong {
    margin-top: 100px;
    font-size: 18px;
    font-weight: 800;
  }
  li {
    margin-top: 10px;
    margin-left: 30px;
    font-size: 18px;
    font-weight: 100;
  }
  blockquote {
    line-height: 1.2em;
    color: #aaa;
    margin-top: 18px;
    font-size: 18px;
  }
  pre,
  span {
    margin-top: 10px;
    font-size: 14px;
  }
  table {
    margin: 20px;
    background: #f9f9f9;
  }
  th,
  tr,
  td {
    border: 2px solid gray;
    color: black;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
  }
  @media (max-width: 1000px) {
    padding: 0 10px 10px 10px;
    line-height: 2em;
    color: black;
    h1 {
      margin-top: 2px;
      margin-bottom: 2px;
      font-size: 20px;
    }
    h2 {
      margin-top: 2px;
      font-size: 18px;
    }
    h3 {
      margin-top: 2px;
      font-size: 16px;
    }
    h4,
    h5,
    p,
    blockquote,
    pre {
      margin-top: 5px;
      font-size: 14px;
    }
    li {
      margin-top: 5px;
      font-size: 14px;
      margin-left: 30px;
    }
    table {
      margin: 20px;
    }
    th,
    tr,
    td,
    span {
      font-size: 14px;
    }
  }
`;

const ImageWrapper = styled.div`
  .jb-wrap {
    max-height: 400px;
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
    margin-top: -100px;

    animation: blink 1.2s ease-in-out infinite alternate;
    @media (max-width: 600px) {
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

const Visible = styled.div`
  position: sticky;
  top: 70px;
  display: block;
  align-items: center;
  text-align: center;
  @media (max-width: 992px) {
    display: none;
  }
`;

const VisibleTable = styled.div`
  position: sticky;
  display: block;
  top: 20vh;
  align-items: center;
  text-align: center;
  @media (max-width: 992px) {
    display: none;
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
      tableOfContents,
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

  // 여기
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(null);
  const tocItems = tableOfContents;

  const handleScroll = () => {
    let aboveHeaderUrl;
    const currentOffsetY = window.pageYOffset;
    const headerElements = document.querySelectorAll(".anchor-header");
    for (const elem of headerElements) {
      const { top } = elem.getBoundingClientRect();
      const elemTop = top + currentOffsetY;
      const isLast = elem === headerElements[headerElements.length - 1];
      if (currentOffsetY < elemTop - 300) {
        aboveHeaderUrl &&
          setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1]);
        !aboveHeaderUrl && setCurrentHeaderUrl(null);
      } else {
        isLast && setCurrentHeaderUrl(elem.href.split(location.origin)[1]);
        !isLast && (aboveHeaderUrl = elem.href);
      }
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Helmet>
        <title>{`${PREFIX}${title}`}</title>
        <meta name="og:title" content={`${PREFIX}${title}`} />
      </Helmet>
      <PostWrapper>
        <Grid container>
          <Grid item xs={12}>
            <ImageWrapper>
              <div className="jb-wrap">
                <div className="jb-image">
                  {image && (
                    <img
                      src={
                        image.includes("//")
                          ? image
                          : require(`~/resources/${image}`)
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
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={false}
            xs={false}
            style={{ borderRight: "2px solid gray" }}
          >
            <Visible>
              <Bio color={"black"} />
            </Visible>
          </Grid>

          <Grid item lg={8} md={8} sm={12} xs={12}>
            <PostContent>
              <h5>{formattedDate(date)} 시에 저장한 글입니다.</h5>
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

              {/* <FacebookProvider appId={FACEBOOK_APP_ID}>
                <Comments
                  href="https://jigglypopownprivateblog.netlify.app/"
                  width="100%"
                />
              </FacebookProvider> */}
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
          </Grid>

          <Grid item lg={2} md={2} sm={false} xs={false}>
            <VisibleTable>
              <TableOfContents
                items={tocItems}
                currentHeaderUrl={currentHeaderUrl}
              />
            </VisibleTable>
          </Grid>
        </Grid>
      </PostWrapper>
    </>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default PostTemplate;
