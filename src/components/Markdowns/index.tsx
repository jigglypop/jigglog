import React from 'react';
import { IGraphQl, INode } from '../graphqltype';
import * as S from './style';
import { Link } from 'gatsby';

const Markdowns = ({ data }: IGraphQl) => {
  const nodes = data.posts.edges;
  const titles = nodes.map((node: INode) => {
    if (node.node.frontmatter && node.node.frontmatter.type == null) {
      return node.node.frontmatter.title;
    }
  });
  return (
    <S.MarkDowns>
      <h1 className="title">글 편집 페이지</h1>
      <div className="titles">
        {titles.map((title, index: number) => {
          if (title !== undefined) {
            return (
              <div key={index} className="titles-item">
                <Link to={`/markdown/${title}`}>
                  {index}) {title}
                </Link>
              </div>
            );
          }
        })}
      </div>
    </S.MarkDowns>
  );
};

export default Markdowns;
