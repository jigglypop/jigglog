import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { PREFIX, AUTHOR, EMAIL, MYNAME } from '../../constants';
import IconSet from '../IconSet/IconSetUnder';
import {
  ResumeWrapper,
  ResumeInnerWrapper,
  BasicInformation,
  ClearMobile,
  SocialInformation,
  NameTitle,
  NameSmallTitle,
  PostContent,
  IconWrapper,
  NameEmail,
} from './styled';
import { IconObject } from './IconObject';
import PrintButton from '../Common/PrintButton';
import CircleIcon from '../Bio/CircleIcon';

export interface IResume {
  data: {
    resume: {
      html: string;
    };
  };
}

const Resume = ({
  data: {
    resume: { html },
  },
}: IResume) => {
  const $mdWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if ($mdWrapper.current !== null) {
      const anchors = [
        ...new Set($mdWrapper.current.getElementsByTagName('a')),
      ];
      anchors.forEach((anchor: HTMLAnchorElement) => {
        const href = anchor.getAttribute('href');
        if (href) {
          if (href.startsWith('http')) {
            anchor.setAttribute('target', '_blank');
            anchor.setAttribute('rel', 'noreferrer noopener');
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
          <PrintButton />
        </ClearMobile>
        <BasicInformation>
          <img src={'/image/me.png'} alt="" width="120" height="120" />
          <NameTitle>{AUTHOR}</NameTitle>
          <NameSmallTitle>{MYNAME}</NameSmallTitle>
          <NameEmail>{EMAIL}</NameEmail>
          <CircleIcon />
        </BasicInformation>

        <SocialInformation></SocialInformation>
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
