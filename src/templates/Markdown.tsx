import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MarkDown from '../components/Markdown';

export const pagesQuery = graphql`
  query MarkDownByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      tableOfContents
      frontmatter {
        title
        path
        images
        category
        tags
        date
        components {
          rootId
          fileName
        }
        tweets {
          rootId
          userId
          tweetId
        }
        summary
      }
    }
  }
`;

const MarkDownTemplate = (props: any) => (
  <Layout {...props}>
    <MarkDown {...props} />
  </Layout>
);

export default MarkDownTemplate;
