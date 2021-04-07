import React, { useState } from "react";
import Helmet from "react-helmet";
import Card from "~/components/Common/Card";
import getPosts from "~/utils/getPosts";
import { PREFIX, CONTENT_PER_PAGE } from "~/constants";
import Pagination from "@material-ui/lab/Pagination";
import "./styled.css";
import PostsWrapper from "../Common/PostsWrapper";
import LargeWrapper from "../Common/LargeWrapper";
import ClipText from "../Common/ClipText";
import { 
  ListWrapper,
  ListImage, 
  ListTitle, 
  ListContent, 
  ListPage, 
} from '../Common/List/styled'

const List = ({ data, location }) => {
  const [page, setPage] = useState(1);
  const allPosts = getPosts(data);
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <PostsWrapper>
        <Helmet>
          <title>{`${PREFIX}POST`}</title>
          <meta name="og:title" content={`${PREFIX}POST`} />
        </Helmet>
        <LargeWrapper>
          <ListWrapper>
            <ListImage>
              <ClipText>
                <h1>BLOG LIST</h1>
              </ClipText>
            </ListImage>
            <ListTitle>
              <h3>블로그 모든 글 목록</h3>
            </ListTitle>
            <ListContent>
            {posts.map(
              ({
                node: {
                  frontmatter: { images, tags, path, ...otherProps },
                },
              }) => (
                <Card
                  key={path}
                  path={path}
                  images={images}
                  tags={tags}
                  {...otherProps}
                />
              )
            )}
            </ListContent>


            <ListPage>
              <Pagination
                count={Math.ceil(postCount / CONTENT_PER_PAGE)}
                page={page}
                size="large"
                onChange={handleChange}
              />
            </ListPage>
          </ListWrapper>
        </LargeWrapper>
      </PostsWrapper>
    </>
  );
};

export default List;
