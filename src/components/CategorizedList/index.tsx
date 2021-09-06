import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import getPosts from '../../utils/getPosts';
import { CONTENT_PER_PAGE } from '../../constants';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'gatsby';
import * as S from './styled';
import { usePageCount } from '../../customhooks/pagecount';
import Card from './Card';

const CategorizedList = ({ title, data, location }: any) => {
  const { postAll, setPages } = usePageCount();
  const [page, setPage] = useState(1);
  const [, , category] = location.pathname.split('/');
  const [, , tag] = location.pathname.split('/');

  useEffect(() => {
    const pageLocal = Number(localStorage.getItem(location.pathname));
    if (pageLocal) {
      setPage(pageLocal);
    }
  }, []);

  const categoryEdge: any = getPosts(data).filter(
    ({
      node: {
        frontmatter: { category: c },
      },
    }) => decodeURI(category) === c,
  );
  const tagEdge = getPosts(data).filter(
    ({
      node: {
        frontmatter: { tags },
      },
    }) => tags.indexOf(decodeURI(tag)) !== -1,
  );
  const edgeSet = title[0] === 'CATEGORY' ? categoryEdge : tagEdge;
  const allPosts = edgeSet;
  const postCount = allPosts.length;

  const handleChange = (_: any, value: any) => {
    localStorage.setItem(location.pathname, value);
    setPage(value);
  };

  const categorySet: any = [];
  getPosts(data).filter(({ node: { frontmatter: { type, category, tags } } }) =>
    type === null
      ? title[0] === 'CATEGORY'
        ? categorySet.push(category)
        : categorySet.push(...tags)
      : '',
  );
  const result: any = categorySet.reduce((object: any, currentValue: any) => {
    if (!object[currentValue]) {
      object[currentValue] = { key: currentValue, length: 0 };
    }
    object[currentValue]['length']++;
    return object;
  }, {});

  const results: any = [];
  for (var i in result) {
    results.push(result[i]);
  }

  const setResult: any = [];
  for (let post of allPosts) {
    setResult.push(post.node.frontmatter);
  }

  useEffect(() => {
    setPages(setResult);
  }, []);

  if (postAll) {
    const _postAll =
      postAll.length > 0
        ? postAll.slice((page - 1) * CONTENT_PER_PAGE, page * CONTENT_PER_PAGE)
        : [];
    return (
      <S.PostsWrapper>
        <Helmet>
          <title>{decodeURI(category)}</title>
          <meta name="og:title" content={decodeURI(category)} />
        </Helmet>
        <S.LargeWrapper>
          <S.ListWrapper>
            <S.ListImage>
              <S.ClipText>
                <h1>{title[0]}</h1>
              </S.ClipText>
            </S.ListImage>
            <S.ListTitle>
              <h3 className="categorytagtitle">
                {title[1]}{' '}
                <span className="categoryname">#{decodeURI(category)}</span>
              </h3>
            </S.ListTitle>
            <S.ListCategory>
              <div>
                {results &&
                  results.map(({ key, length }: any) => (
                    <div style={{ display: 'inline-block' }} key={key}>
                      <Link
                        to={
                          title[0] === 'CATEGORY'
                            ? `/categories/${key}/1`
                            : `/tags/${key}/1`
                        }
                      >
                        <S.TagButton>
                          <h4 className="tagname">#{key}</h4>
                        </S.TagButton>
                      </Link>
                    </div>
                  ))}
              </div>
            </S.ListCategory>
            <S.ListContent>
              {_postAll.map ? (
                _postAll.map((item: any) => (
                  <Card
                    key={item.path}
                    path={item.path}
                    images={item.images}
                    tags={item.tags}
                    title={item.title}
                    date={item.date}
                    summary={item.summary}
                    count={item.count}
                  />
                ))
              ) : (
                <div></div>
              )}
            </S.ListContent>
            <S.ListPage>
              <S.Pagination>
                <Pagination
                  count={Math.ceil(postCount / CONTENT_PER_PAGE)}
                  page={page}
                  size="large"
                  onChange={handleChange}
                  style={{
                    listStyle: 'none',
                    color: 'primary',
                    marginBottom: '100px',
                  }}
                />
              </S.Pagination>
            </S.ListPage>
          </S.ListWrapper>
        </S.LargeWrapper>
      </S.PostsWrapper>
    );
  } else {
    return <></>;
  }
};

export default CategorizedList;
