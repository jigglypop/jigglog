import React, { useEffect, useState } from 'react';
import './styled.css';
import * as S from './style';
import { useReadPostEffect } from '../../customhooks/readpost';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';

export interface IPostTemplate {
  location: any;
}

const MarkDown = ({ location }: IPostTemplate) => {
  const { html } = useReadPostEffect({ location });
  const [_html, setHtml] = useState('');

  useEffect(() => {
    setHtml(html);
  }, [html]);

  const onChange = e => {
    setHtml(e.target.value);
  };
  return (
    <S.MarkDownWrapper>
      <div>
        <h1 className="title">글 수정</h1>
        <S.LinkButton>
          <Link to={'/markdowns'}>
            <button>목록</button>
          </Link>
          <button>제출</button>
        </S.LinkButton>
      </div>
      <div className="under">
        <S.MarkDownWrite>
          <textarea value={_html} onChange={onChange} />
        </S.MarkDownWrite>
        <S.MarkDownPostWrapper>
          <S.MarkDownPostContent>
            <ReactMarkdown>{_html}</ReactMarkdown>
          </S.MarkDownPostContent>
        </S.MarkDownPostWrapper>
      </div>
    </S.MarkDownWrapper>
  );
};

export default MarkDown;
