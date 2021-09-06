import React, { Children, cloneElement } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { POST, PORTFOLIO } from '../../constants';
import App from '../../App';
import { LayoutWrapper, OuterWrapper } from './styled';
import Three from './Three';
import Main from '../../components/Main/index';
import { Provider } from 'react-redux';
import { store } from '../../module';

const Layout = ({ children, location }: any) => (
  <StaticQuery
    query={graphql`
      query GatsbyQuery {
        posts: allMarkdownRemark(
          filter: { frontmatter: { hide: { ne: true } } }
        ) {
          edges {
            node {
              frontmatter {
                path
                type
                title
                category
                summary
                tags
                images
              }
            }
          }
        }
      }
    `}
    render={({ posts }) => {
      const { edges } = posts;
      const portfolios = edges.filter(
        ({
          node: {
            frontmatter: { type },
          },
        }: any) => type === PORTFOLIO,
      );
      const categories = edges.reduce(
        (categories: any, { node }: any) => {
          const { category } = node.frontmatter;
          if (category === null) {
            return categories;
          }

          const [{ length: total }] = categories;
          const categoryIndex = categories.findIndex(
            ({ key }: any) => key === category,
          );

          if (categoryIndex === -1) {
            return [
              { key: '__ALL__', length: total + 1 },
              ...categories.slice(1),
              { key: category, length: 1 },
            ];
          }

          return [
            { key: '__ALL__', length: total + 1 },
            ...categories.slice(1, categoryIndex - 1),
            { key: category, length: categories[categoryIndex].length + 1 },
            ...categories.slice(categoryIndex + 1),
          ];
        },
        [{ key: '__ALL__', length: 0 }],
      );
      // 카테고리셋
      const categorySet: any = [];
      edges.filter(({ node: { frontmatter: { type, category } } }: any) =>
        type === null ? categorySet.push(category) : '',
      );
      const result = categorySet.reduce((object: any, currentValue: any) => {
        if (!object[currentValue]) {
          object[currentValue] = { key: currentValue, length: 0 };
        }
        object[currentValue]['length']++;
        return object;
      }, {});
      const results = [];
      for (var i in result) {
        results.push(result[i]);
      }
      // 포트폴리오셋
      const portfolioSet = portfolios.map((item: any) => item.node.frontmatter);

      // 태그셋
      const tagSet: any = [];
      edges.filter(({ node: { frontmatter: { type, tags } } }: any) =>
        type === null
          ? Object.entries(tags).map(item => tagSet.push(item[1]))
          : '',
      );
      const tagResult = tagSet.reduce((object: any, currentValue: any) => {
        if (!object[currentValue]) {
          object[currentValue] = { key: currentValue, length: 0 };
        }
        object[currentValue]['length']++;
        return object;
      }, {});
      const tagResults = [];
      for (var i in tagResult) {
        tagResults.push(tagResult[i]);
      }
      const postInformations = edges.reduce(
        (postInformations: any, { node: { frontmatter } }: any) => {
          const {
            type,
            path,
            title,
            summary,
            tags = [],
            category,
          } = frontmatter;

          if (type === POST || type === null) {
            return [
              ...postInformations,
              {
                path,
                title,
                summary,
                tags,
                category,
              },
            ];
          }

          return postInformations;
        },
        [],
      );
      const hasPortfolio = portfolios.length > 0;
      const childrenWithProps = Children.map(children, child =>
        cloneElement(child, { portfolios }),
      );

      return (
        <Provider store={store}>
          <OuterWrapper>
            <LayoutWrapper
              id="layoutwrapper"
              isMain={location.pathname === '/' ? true : false}
            >
              <App
                location={location}
                categories={categories}
                postInformations={postInformations}
                hasPortfolio={hasPortfolio}
                categorySet={results}
                tagSet={tagResults}
              >
                {childrenWithProps}
              </App>
            </LayoutWrapper>
            {location.pathname === '/' && <Main />}
            {location.pathname === '/' && <Three categorySet={results} />}
          </OuterWrapper>
        </Provider>
      );
    }}
  />
);

export default Layout;
