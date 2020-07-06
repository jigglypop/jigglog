import React, { useCallback, useEffect } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

import Helmet from "react-helmet";
import Clipboard from "clipboard";
import Bio from "~/components/Bio";
import PostWrapper from "~/components/Common/PostWrapper";
import { PREFIX, SITE_URL, DISQUS_ID } from "~/constants";
import formattedDate from "~/utils/formattedDate";
import "./styled.css";
import styled from "styled-components";

export const PostContent = styled.section`
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("../../fonts/NanumBarunGothic.ttf");
  }
  font-family: "NanumBarunGothic" !important;
  padding: 1em 1em 4em;
  line-height: 2em;

  h1 {
    margin-top: 40px;
    font-size: 50px;
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
    margin: 20px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("../../fonts/NanumBarunGothic.ttf");
  }
  font-family: "NanumBarunGothic" !important;
  .jb-wrap {
    width: 40%;
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
    text-shadow: 2px 2px 2px gray;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ComponentInPost = styled.div`
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
          <div className="jb-text">
            <p>{title}</p>
          </div>
        </div>
      </ImageWrapper>

      <time>{formattedDate(date)}</time>

      <Bio />
      <PostContent>
        <div id="post-contents" dangerouslySetInnerHTML={{ __html: html }} />
      </PostContent>
      <div id="disqus_thread" />
      <noscript>
        Please enable JavaScript to view the &nbsp;
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </PostWrapper>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default PostTemplate;
