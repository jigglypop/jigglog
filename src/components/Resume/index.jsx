import React, { useCallback, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import { FaPrint } from "react-icons/fa";

import {
  PREFIX,
  AUTHOR,
  EMAIL,
  GITHUB_ID,
  INSTARGRAM_ID,
  FACEBOOK_ID,
} from "~/constants";
import * as profileUrl from "~/resources/me.png";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import IconSet from "../IconSet/IconSet";
import { 
  ItemWrapper, 
  CircleWrapper, 
  BasicInformation,
  ClearMobile, 
  SocialInformation, 
  Button, 
  NameTitle, 
  NameSmallTitle, 
  PrintTitle,
  PostContent,
  IconWrapper
} from './styled'
import { IconObject } from './IconObject'
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 10%;

`;

const Resume = ({
  data: {
    resume: { html },
  },
}) => {
  const $mdWrapper = useRef(null);

  useEffect(() => {
    const anchors = [...new Set($mdWrapper.current.getElementsByTagName("a"))];
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (href.startsWith("http")) {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noreferrer noopener");
      }
    });
  }, []);

  const printPage = useCallback(() => {
    global.print();
  }, []);
  
  return (
    <Wrapper>
        <Helmet>
          <title>{`${PREFIX}RESUME`}</title>
          <meta name="og:title" content={`${PREFIX}RESUME`} />
        </Helmet>
        <ClearMobile>
            <Button type="button" onClick={printPage}>
              <FaPrint />
              <PrintTitle>PRINT</PrintTitle>
            </Button>
        </ClearMobile>
        <BasicInformation>
          <img src={profileUrl.default} alt="" width="120" height="120" />
          <NameTitle>{AUTHOR}</NameTitle>
          <NameSmallTitle>염동환</NameSmallTitle>
          <p>{EMAIL}</p>
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
    </Wrapper>
  );
};


export default Resume;
