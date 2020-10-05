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
} from "~/constants";
import formattedDate from "~/utils/formattedDate";
import "./styled.css";
import SmallCard from "~/components/Common/SmallCard";
import Pagination from "@material-ui/lab/Pagination";
import TableOfContents from "./tableOfContent";
import Grid from "@material-ui/core/Grid";
import { FaPrint } from "react-icons/fa";
import { BsCircle, BsCircleFill } from "react-icons/bs";

import Clearfix from "~/components/Common/Clearfix";
import {
  PostWrapper,
  PrintTitle,
  ClearMobile,
  Button,
  CommentContent,
  PostContent,
  Visible,
  VisibleTable,
  ComponentInPost,
  ImageWrapper,
  ButtonInline,
  WarpVisible,
} from "./styled";

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
  const printPage = useCallback(() => {
    global.print();
  }, []);
  const [answer, setAnswer] = useState("");
  const blankAnswer = useCallback(() => {
    if (answer === "") {
      setAnswer("hidden");
    } else {
      setAnswer("");
    }
  }, [answer]);
  const [lines, setLines] = useState("");
  const blankLines = useCallback(() => {
    if (lines === "") {
      setLines("hidden");
    } else {
      setLines("");
    }
  }, [lines]);
  const [dels, setDels] = useState("hidden");
  const blankDels = useCallback(() => {
    if (dels === "") {
      setDels("hidden");
    } else {
      setDels("");
    }
  }, [dels]);
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
          <Grid item lg={2} md={2} sm={false} xs={false}>
            <Visible>
              <Bio color={"black"} />
              <WarpVisible>
                <div className="lineblock">
                  <Button type="button" onClick={blankAnswer}>
                    <h4>블록가리기</h4>
                  </Button>
                </div>
                <div className="lineblock">
                  {answer == "hidden" ? (
                    <div className="lineblock">
                      <div className="smallcircle">
                        <BsCircleFill />
                      </div>
                    </div>
                  ) : (
                    <div className="lineblock">
                      <div className="smallcircle">
                        <BsCircle />
                      </div>
                    </div>
                  )}
                </div>
              </WarpVisible>
              <WarpVisible>
                <div className="lineblock">
                  <Button type="button" onClick={blankLines}>
                    <h4>밑줄가리기</h4>
                  </Button>
                </div>
                <div className="lineblock">
                  {lines == "hidden" ? (
                    <div className="lineblock">
                      <div className="smallcircle">
                        <BsCircleFill />
                      </div>
                    </div>
                  ) : (
                    <div className="lineblock">
                      <div className="smallcircle">
                        <BsCircle />
                      </div>
                    </div>
                  )}
                </div>
              </WarpVisible>
              <WarpVisible>
                <div className="lineblock">
                  <Button type="button" onClick={blankDels}>
                    <h4>요약가리기</h4>
                  </Button>
                </div>
                <div className="lineblock">
                  {dels == "hidden" ? (
                    <div className="lineblock">
                      <div className="smallcircle">
                        <BsCircleFill />
                      </div>
                    </div>
                  ) : (
                    <div className="lineblock">
                      <div className="smallcircle">
                        <BsCircle />
                      </div>
                    </div>
                  )}
                </div>
              </WarpVisible>
            </Visible>
            <script
              data-ad-client="ca-pub-4040588049793807"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
          </Grid>

          <Grid item lg={8} md={8} sm={12} xs={12}>
            <ClearMobile>
              <ButtonInline>
                <Clearfix>
                  <div>
                    <Button type="button" onClick={printPage}>
                      <FaPrint />
                      <PrintTitle>PRINT</PrintTitle>
                    </Button>
                  </div>
                </Clearfix>
              </ButtonInline>
            </ClearMobile>
            <PostContent answer={answer} lines={lines} dels={dels}>
              <h5>{formattedDate(date)} 시에 저장한 글입니다.</h5>
              <hr style={{ marginBottom: "50px" }} />
              <div
                id="post-contents"
                dangerouslySetInnerHTML={{ __html: html }}
                style={{ marginBottom: "100px" }}
              />
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
        <Grid item xs={12}>
          <CommentContent>
            <p>댓글은 작성자에게 큰 힘이 됩니다</p>
            <hr />
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
          </CommentContent>
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
