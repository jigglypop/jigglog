export type IGraphQl = {
  data: IData;
};

export type IData = {
  posts: {
    edges: INode[];
  };
};

export type IFrontMatter = {
  category: string | null;
  date: string;
  images: string[];
  path: string;
  summary: string | null;
  tags: null;
  title: string;
  type: string | null;
};

export type INode = {
  node: {
    frontmatter: IFrontMatter;
  };
};

export type IKeyFrontMatter = keyof IFrontMatter;

export const getNodeChild = (data: IData, name: IKeyFrontMatter) => {
  const nodes = data.posts.edges;
  const results = nodes.map((node: INode) => {
    if (node.node.frontmatter) {
      return node.node.frontmatter[name];
    }
  });
  return results;
};
