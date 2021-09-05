import { POST } from '../constants';

export interface IData {
  posts: {
    edges: Node[];
  };
}

interface Node {
  node: {
    frontmatter: {
      hide: any;
      type: any;
      path: any;
      images: any;
      tags: any;
      otherProps: any;
      category: any;
    };
  };
}

const getPosts = (data: IData) =>
  data.posts.edges.filter(
    ({
      node: {
        frontmatter: { hide, type },
      },
    }) => hide !== true && (type || POST) === POST,
  );

export default getPosts;
