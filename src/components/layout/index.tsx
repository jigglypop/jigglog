import React, { Children, cloneElement } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { PORTFOLIO } from '../../constants';
import * as S from './style';
import { Provider } from 'react-redux';
import { store } from '../../module';
import Main from './Main';
import Footer from '../Footer/Footer';
import Header from '../Header';
import ThreeOuter from '../Three/ThreeOuter';

const Layout = ({ children, location }) => (
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
        (categories, { node }) => {
          const { category } = node.frontmatter;
          if (category === null) {
            return categories;
          }

          const [{ length: total }] = categories;
          const categoryIndex = categories.findIndex(
            ({ key }) => key === category,
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
      const categorySet = [];
      edges.filter(({ node: { frontmatter: { type, category } } }) =>
        type === null ? categorySet.push(category) : '',
      );
      const result = categorySet.reduce((object, currentValue) => {
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

      // 태그셋
      const tagSet = [];
      edges.filter(({ node: { frontmatter: { type, tags } } }) =>
        type === null
          ? Object.entries(tags).map(item => tagSet.push(item[1]))
          : '',
      );
      const tagResult = tagSet.reduce((object, currentValue) => {
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
      const hasPortfolio = portfolios.length > 0;
      const childrenWithProps = Children.map(children, child =>
        cloneElement(child, { portfolios }),
      );

      return (
        <Provider store={store}>
          <S.OuterWrapper>
            <S.LayoutWrapper
              id="layoutwrapper"
              isMain={location.pathname === '/' ? true : false}
            >
              <S.Wrapper>
                <nav>
                  <Header
                    location={location}
                    categories={categories}
                    hasPortfolio={hasPortfolio}
                    categorySet={results}
                  />
                </nav>
                <main>
                  {childrenWithProps}
                  <div className="toasts"></div>
                </main>
                <footer>
                  <Footer />
                </footer>
              </S.Wrapper>
            </S.LayoutWrapper>
            {location.pathname === '/' && <Main />}
            {location.pathname === '/' && <ThreeOuter categorySet={results} />}
          </S.OuterWrapper>
        </Provider>
      );
    }}
  />
);

export default Layout;
