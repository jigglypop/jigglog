import React, { useEffect, useRef } from "react";
import Helmet from "react-helmet";
import {
  PREFIX,
  AUTHOR,
  EMAIL,
  GITHUB_ID,
  INSTARGRAM_ID,
  FACEBOOK_ID,
} from "../../constants";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import IconSet from "../IconSet/IconSet.js";
import IconSet from '../IconSet/IconSetUnder'
import { 
  ResumeWrapper,
  ResumeInnerWrapper,
  ItemWrapper, 
  CircleWrapper, 
  BasicInformation,
  ClearMobile, 
  SocialInformation, 
  NameTitle, 
  NameSmallTitle, 
  PostContent,
  IconWrapper,
  NameEmail
} from './styled'
import { IconObject } from './IconObject'
import PrintButton from "../Common/PrintButton";

export interface IResume {
  data : {
    resume : {
      html : string
    }
  }
}

const Resume = ({
  data: {
    resume: { html },
  },
} : IResume) => {
  const $mdWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if ($mdWrapper.current !== null){
      const anchors = [...new Set($mdWrapper.current.getElementsByTagName("a"))];
      anchors.forEach((anchor : HTMLAnchorElement) => {
        const href = anchor.getAttribute("href");
        if (href){
          if (href.startsWith("http")) {
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("rel", "noreferrer noopener");
          }
        }
      });
    }
  }, []);
  
  return (
    <ResumeWrapper>
        <Helmet>
          <title>{`${PREFIX}RESUME`}</title>
          <meta name="og:title" content={`${PREFIX}RESUME`} />
        </Helmet>
        <ResumeInnerWrapper>
          <ClearMobile>
              <PrintButton/>
          </ClearMobile>
          <BasicInformation>
            <img src={"/image/me.png"} alt="" width="120" height="120" />
            <NameTitle>{AUTHOR}</NameTitle>
            <NameSmallTitle>염동환</NameSmallTitle>
            <NameEmail>{EMAIL}</NameEmail>
          </BasicInformation>

          <SocialInformation>
            {GITHUB_ID ? (
              <a
                href={`https://github.com/${GITHUB_ID}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ItemWrapper>
                  <CircleWrapper>
                    <FiGithub />
                  </CircleWrapper>
                </ItemWrapper>
              </a>
            ) : null}
            {FACEBOOK_ID ? (
              <a
                href={`https://www.facebook.com/${FACEBOOK_ID}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ItemWrapper>
                  <CircleWrapper>
                    <FaFacebookF />
                  </CircleWrapper>
                </ItemWrapper>
              </a>
            ) : null}
            {INSTARGRAM_ID ? (
              <a
                href={`https://www.instargram.com/${INSTARGRAM_ID}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ItemWrapper>
                  <CircleWrapper>
                    <FaInstagram />
                  </CircleWrapper>
                </ItemWrapper>
              </a>
            ) : null}
          </SocialInformation>
          <IconWrapper>
            <IconSet IconObject={IconObject} />
          </IconWrapper>

          <PostContent>
            <div ref={$mdWrapper} dangerouslySetInnerHTML={{ __html: html }} />
          </PostContent>
        </ResumeInnerWrapper>
    </ResumeWrapper>
  );
};


export default Resume;
