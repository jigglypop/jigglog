import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Markdown from '../components/Markdown';

const MarkdownTemplate = (props: any) => (
  <Layout {...props}>
    <Markdown {...props}></Markdown>
  </Layout>
);

export default MarkdownTemplate;

export const pageQuery = () => {
  return graphql`
    query MarkdownPath($match: String!) {
      site {
        siteMetadata {
          title
          author
          homepage
        }
      }
      post: markdownRemark(frontmatter: { path: { eq: $match } }) {
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
};
