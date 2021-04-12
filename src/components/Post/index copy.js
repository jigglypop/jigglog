import React, { useCallback, useEffect, useState } from "react";
import Helmet from "react-helmet";
import Clipboard from "clipboard";
import Bio from "../Bio";
import {
  PREFIX,
  SITE_URL,
  DISQUS_ID,
  CONTENT_PER_SMALL_PAGE,
} from "../../constants";
import formattedDate from "~/utils/formattedDate";
import "./styled.css";
import SmallCard from "../Common/SmallCard";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import Clearfix from "~/components/Common/Clearfix";
import {
  PostWrapper,
  ClearMobile,
  Button,
  CommentContent,
  PostContent,
  Visible,
  VisibleTable,
  ImageWrapper,
  ButtonInline,
  WarpVisible,
  TocItemDiv,
} from "./styled";
import PrintButton from "../Common/PrintButton";

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
  const [tocEls, setTocEls] = useState(null);
  useEffect(() => {
    const tocItems = document.querySelectorAll("h1, h2");
    tocItems.forEach((tocitem, index) => {
      tocitem.classList.add(`toctextlink${index}`);
    });
    setTocEls(tocItems);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tocitemall = document.querySelectorAll(".tocitem");
          tocitemall.forEach((items) => items.classList.remove("isintersect"));
          const entryId = entry.target.className.replace("toctextlink", "");
          const tocItem = document.querySelector(`#tocitem${entryId}`);
          const toctextitem = document.querySelector(`.toctextlink${entryId}`);

          if (tocItem && toctextitem) {
            tocItem.classList.add("isintersect");
          }
        }
      });
    });
    if (tocItems) {
      tocItems.forEach((tocEl) => {
        observer.observe(tocEl);
      });
    }
    return () => observer && observer.disconnect();
  }, []);

  // 답
  const [answer, setAnswer] = useState("");
  const blankAnswer = useCallback(() => {
    if (answer === "") {
      setAnswer("hidden");
    } else {
      setAnswer("");
    }
  }, [answer]);

  // 라인
  const [lines, setLines] = useState("");
  const blankLines = useCallback(() => {
    if (lines === "") {
      setLines("hidden");
    } else {
      setLines("");
    }
  }, [lines]);
  // 삭제선
  const [dels, setDels] = useState("hidden");
  const blankDels = useCallback(() => {
    if (dels === "") {
      setDels("hidden");
    } else {
      setDels("");
    }
  }, [dels]);

  // 스크롤하기
  const onClick = (e) => {
    const targettext = document.querySelector(
      `.toctextlink${e.currentTarget.id.replace("tocitem", "")}`
    );
    window.scrollTo({
      top: targettext.offsetTop - 200,
      behavior: "smooth",
    });
  };

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
                <div className="jb-text">{title}</div>
              </div>
            </ImageWrapper>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={false}
            xs={false}
            className="stickyvisible"
          >
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
                  <PrintButton />
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

          <Grid
            item
            lg={2}
            md={2}
            sm={false}
            xs={false}
            className="stickyvisible"
          >
            <VisibleTable>
              {tocEls &&
                [...tocEls].map((item, index) => (
                  <TocItemDiv
                    key={index}
                    groupId={index}
                    className={`tocitem ${item.innerText}`}
                    id={`tocitem${index}`}
                    onClick={(e) => onClick(e)}
                  >
                    <h4>{item.innerText}</h4>
                  </TocItemDiv>
                ))}
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

export default PostTemplate;
