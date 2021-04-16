import React, { useCallback, useEffect, useState } from "react";
import Helmet from "react-helmet";
import Bio from "../Bio";
import {
  PREFIX,
} from "../../constants";
import "./styled.css";
import Grid from "@material-ui/core/Grid";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import Clearfix from "../../components/Common/Clearfix";
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
import { usePostComments } from "../../customhooks/postcomment";
import CommentsComponent from "../Comment/CommentsComponent";

export interface IPostTemplate {
  data: {
    post: {
      html: any,
      frontmatter: { 
        title: string 
        date: string 
        images: string[]
      },
    },
    posts: any,
  },
}

const formattedDate = ( str: string) =>{
  const [date = "", time = ""] = str.split("T");
  return `${date} ${time.slice(0, 5)}`;
}

const PostTemplate = ({
  data: {
    post: {
      html,
      frontmatter: { 
        title, 
        date, 
        images = [], 
      },
    },
  },
} : IPostTemplate) => {

  const [image = null] = images;
  // 여기
  const [tocEls, setTocEls] = useState<any>(null);
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
  const onClick = (e : any) => {
    const targettext : any = document.querySelector(
      `.toctextlink${e.currentTarget.id.replace("tocitem", "")}`
    );
    if (targettext){
      window.scrollTo({
        top: targettext.offsetTop - 200,
        behavior: "smooth",
      });
    }
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
              <Bio />
              <WarpVisible>
                <div className="lineblock">
                  <Button type="button" onClick={blankAnswer}>
                    <h4>블록가리기</h4>
                  </Button>
                </div>
                <div className="lineblock">
                  <div className="lineblock">
                    <div className="smallcircle">
                      {answer == "hidden" ? <BsCircle /> : <BsCircleFill />}
                    </div>
                  </div>
                </div>
              </WarpVisible>
              <WarpVisible>
                <div className="lineblock">
                  <Button type="button" onClick={blankLines}>
                    <h4>밑줄가리기</h4>
                  </Button>
                </div>
                <div className="lineblock">
                  <div className="lineblock">
                    <div className="smallcircle">
                      {lines == "hidden" ? <BsCircle /> : <BsCircleFill />}
                    </div>
                  </div>
                </div>
              </WarpVisible>
              <WarpVisible>
                <div className="lineblock">
                  <Button type="button" onClick={blankDels}>
                    <h4>요약가리기</h4>
                  </Button>
                </div>
                <div className="lineblock">
                  <div className="lineblock">
                    <div className="smallcircle">
                      {dels == "hidden" ? <BsCircle /> : <BsCircleFill />}
                    </div>
                  </div>
                </div>
              </WarpVisible>
            </Visible>
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
                [...tocEls].map((item : any, index : any) => (
                  <TocItemDiv
                    key={index}
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
          <CommentsComponent />
        </Grid>
      </PostWrapper>
    </>
  );
};

export default PostTemplate;