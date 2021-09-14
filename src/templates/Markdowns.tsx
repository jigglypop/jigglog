import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Markdowns from '../components/Markdowns';

export const pageQuery = graphql`
  query MarkdownQuery {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    posts: allMarkdownRemark(
      filter: { frontmatter: { hide: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            category
            images
            path
            tags
            date
            summary
          }
        }
      }
    }
  }
`;

const MarkdownTemplates = (props: any) => (
  <Layout {...props}>
    <Markdowns {...props}></Markdowns>
  </Layout>
);

export default MarkdownTemplates;
