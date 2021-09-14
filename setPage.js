exports.setTagPage = (
  tagMatrix,
  taggedList,
  edges,
  createPage,
  CONTENT_PER_PAGE,
) => {
  // 태그
  const tags = [
    ...new Set(
      tagMatrix.reduce(
        (prev, curr) => (curr !== null ? [...prev, ...curr] : prev),
        [],
      ),
    ),
  ];

  tags.forEach(tag => {
    const taggedPostCount = edges.reduce(
      (
        count,
        {
          node: {
            frontmatter: { tags: postTags },
          },
        },
      ) => {
        if (postTags !== null && postTags.includes(tag)) {
          return count + 1;
        }
        return count;
      },
      0,
    );
    const taggedListCount = taggedPostCount
      ? Math.ceil(taggedPostCount / CONTENT_PER_PAGE) + 1
      : 1;

    const taggedListPages = Array.from(
      new Array(taggedListCount),
      (el, i) => i + 1,
    );

    taggedListPages.forEach(taggedListPage => {
      createPage({
        path: `/tags/${tag}/${taggedListPage}`,
        component: taggedList,
        context: {},
      });
    });
  });
};

exports.setCategoryPage = (
  categoryMatrix,
  categorizedList,
  edges,
  createPage,
  CONTENT_PER_PAGE,
) => {
  // 카테고리
  const categories = [...new Set(categoryMatrix)];

  categories.forEach(category => {
    const categorizedPostCount = edges.reduce(
      (
        count,
        {
          node: {
            frontmatter: { category: postCategory },
          },
        },
      ) => {
        if (postCategory !== null && postCategory.includes(category)) {
          return count + 1;
        }
        return count;
      },
      0,
    );
    const categorizedListCount = categorizedPostCount
      ? Math.ceil(categorizedPostCount / CONTENT_PER_PAGE) + 1
      : 1;
    const categorizedListPages = Array.from(
      new Array(categorizedListCount),
      (el, i) => i + 1,
    );

    categorizedListPages.forEach(categorizedListPage => {
      createPage({
        path: `/categories/${category}/${categorizedListPage}`,
        component: categorizedList,
        context: {},
      });
    });
  });
};
