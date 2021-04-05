import React, { Children, cloneElement } from "react";
import { StaticQuery, graphql } from "gatsby";
import { POST, PORTFOLIO } from "~/constants";
import App from "~/components/App";
import { LayoutWrapper, OuterWrapper } from './styled'
import Three from './Three'
import Gnb from "~/components/Gnb";
import Main from "~/components/Main";


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
        }) => type === PORTFOLIO
      );
      const categories = edges.reduce(
        (categories, { node }) => {
          const { category } = node.frontmatter;
          if (category === null) {
            return categories;
          }

          const [{ length: total }] = categories;
          const categoryIndex = categories.findIndex(
            ({ key }) => key === category
          );

          if (categoryIndex === -1) {
            return [
              { key: "__ALL__", length: total + 1 },
              ...categories.slice(1),
              { key: category, length: 1 },
            ];
          }

          return [
            { key: "__ALL__", length: total + 1 },
            ...categories.slice(1, categoryIndex - 1),
            { key: category, length: categories[categoryIndex].length + 1 },
            ...categories.slice(categoryIndex + 1),
          ];
        },
        [{ key: "__ALL__", length: 0 }]
      );
      // 카테고리셋
      const categorySet = [];
      edges.filter(({ node: { frontmatter: { type, category } } }) =>
        type === null ? categorySet.push(category) : ""
      );
      const result = categorySet.reduce((object, currentValue) => {
        if (!object[currentValue]) {
          object[currentValue] = { key: currentValue, length: 0 };
        }
        object[currentValue]["length"]++;
        return object;
      }, {});
      const results = [];
      for (var i in result) {
        results.push(result[i]);
      }
      // 포트폴리오셋
      const portfolioSet = portfolios.map(item => item.node.frontmatter)


      // 태그셋
      const tagSet = [];
      edges.filter(({ node: { frontmatter: { type, tags } } }) =>
        type === null
          ? Object.entries(tags).map((item) => tagSet.push(item[1]))
          : ""
      );
      const tagResult = tagSet.reduce((object, currentValue) => {
        if (!object[currentValue]) {
          object[currentValue] = { key: currentValue, length: 0 };
        }
        object[currentValue]["length"]++;
        return object;
      }, {});
      const tagResults = [];
      for (var i in tagResult) {
        tagResults.push(tagResult[i]);
      }
      const postInformations = edges.reduce(
        (postInformations, { node: { frontmatter } }) => {
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
        []
      );
      const hasPortfolio = portfolios.length > 0;
      const childrenWithProps = Children.map(children, (child) =>
        cloneElement(child, { portfolios })
      );

      return (
        <OuterWrapper>
          <LayoutWrapper id="layoutwrapper" isMain={location.pathname === '/' ? true: false}>
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
          {location.pathname === '/' && <Main/>}
          {location.pathname === '/' && <Three categorySet={results} hasPortfolio={portfolioSet}/>}
        </OuterWrapper>
      );
    }}
  />
);

export default Layout;
