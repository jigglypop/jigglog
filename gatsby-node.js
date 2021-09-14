require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  CONTENT_PER_PAGE,
  POST,
  PORTFOLIO,
  RESUME,
} = require('./src/constants/index.js');
const { setTagPage, setCategoryPage } = require('./setPage.js');

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    externals: {
      document: true,
      discus_config: true,
    },
    node: {
      fs: 'empty',
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === 'develop' || stage === 'develop-html',
      }),
    ],
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const post = path.resolve('./src/templates/Post.tsx');
  const taggedList = path.resolve('./src/templates/TaggedList.tsx');
  const categorizedList = path.resolve('./src/templates/CategorizedList.tsx');
  const resume = path.resolve('./src/templates/Resume.tsx');
  const portfolios = path.resolve('./src/templates/Portfolios.tsx');
  const portfolio = path.resolve('./src/templates/Portfolio.tsx');
  const markdowns = path.resolve('./src/templates/Markdowns.tsx');
  const markdown = path.resolve('./src/templates/MarkDown.tsx');

  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 10000) {
            edges {
              node {
                frontmatter {
                  path
                  category
                  tags
                  type
                  hide
                }
              }
            }
          }
        }
      `).then(
        ({
          errors,
          data: {
            allMarkdownRemark: { edges },
          },
        }) => {
          if (errors) {
            reject(errors);
          }

          const tagMatrix = [];
          const categoryMatrix = [];

          edges.forEach(
            ({
              node: {
                frontmatter: { path, tags, category, type, hide },
              },
            }) => {
              if (hide !== true) {
                if (Array.isArray(tags)) {
                  tagMatrix.push(tags);
                }
                if (typeof category === 'string') {
                  categoryMatrix.push(category);
                }
                let component = null;
                switch (type) {
                  case PORTFOLIO:
                    component = portfolio;
                    break;
                  case RESUME:
                    component = resume;
                    break;
                  case POST:
                    component = post;
                    break;
                  default:
                    component = post;
                    break;
                }

                if (component !== null) {
                  createPage({
                    path,
                    component,
                    context: {},
                  });
                }
              }
            },
          );

          const portfoliosCount = edges.filter(
            ({
              node: {
                frontmatter: { type },
              },
            }) => type === PORTFOLIO,
          ).length;

          if (portfoliosCount) {
            createPage({
              path: '/portfolios',
              component: portfolios,
              context: {},
            });
          }
          // 마크다운들
          createPage({
            path: '/markdowns',
            component: markdowns,
            context: {},
          });

          // 마크다운
          edges.forEach(item => {
            if (item.node.frontmatter.type === null) {
              createPage({
                path: 'markdown' + item.node.frontmatter.path,
                component: markdown,
                context: {
                  match: item.node.frontmatter.path,
                },
              });
            }
          });

          // 태그
          setTagPage(
            tagMatrix,
            taggedList,
            edges,
            createPage,
            CONTENT_PER_PAGE,
          );

          // 카테고리
          setCategoryPage(
            categoryMatrix,
            categorizedList,
            edges,
            createPage,
            CONTENT_PER_PAGE,
          );
        },
      ),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
