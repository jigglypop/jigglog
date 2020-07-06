import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import PostsWrapper from "~/components/Common/PostsWrapper";
import Card from "~/components/Common/Card";
import Pagination from "~/components/Common/Pagination";
import getPosts from "~/utils/getPosts";
import getPage from "~/utils/getPage";
import { PREFIX, CONTENT_PER_PAGE } from "~/constants";

const CategorizedList = ({ data, location }) => {
  const page = getPage(location);
  const [, , category] = location.pathname.split("/");
  const edgeSet = getPosts(data).filter(
    ({
      node: {
        frontmatter: { category: c },
      },
    }) => decodeURI(category) === c
  );
  const allPosts = edgeSet;
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );

  // 여기
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const stars = createStars(width, height, 30);
      const canvas = canvasRef.current.getContext("2d");
      const ctx = canvas;
      let counter = 0;
      let time = 0;

      function random(max) {
        return Math.floor(Math.random() * max);
      }

      function createStars(width, height, spacing) {
        const stars = [];

        for (let x = 0; x < width; x += spacing) {
          for (let y = 0; y < height; y += spacing) {
            const star = {
              x: x + random(spacing),
              y: y + random(spacing),
              r: Math.random() * 1.5,
            };
            stars.push(star);
          }
        }
        return stars;
      }

      const fillCircle = (ctx, x, y, r, fillStyle) => {
        ctx.beginPath();
        ctx.fillStyle = fillStyle;
        ctx.arc(x, y, r * 3, 0, Math.PI * 2);
        ctx.fill();
      };

      const getOpacity = (factor) => {
        const opacityIncrement = 0.6 * Math.abs(Math.sin(factor)),
          opacity = 0.1 + opacityIncrement;
        return opacity;
      };

      function render() {
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        // gradient.addColorStop(0, "#00111e");
        gradient.addColorStop(0, "#1f1f24");
        // gradient.addColorStop(0, "#00111e");

        //배경 그래디언트
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        stars.forEach(function(star, i) {
          const factor = counter * i;
          const x = star.x;
          const y = star.y;
          const opacity = getOpacity(factor);
          const randomColor = Math.floor(Math.random() * 360 + 1);

          fillCircle(
            ctx,
            x,
            y,
            star.r,
            `hsla(${randomColor}, 30%, 80%, ${opacity})`
          ); //별 그리기
        });

        counter++;
        requestAnimationFrame(render);
      }

      render();
    }
  }, [canvasRef]);

  return (
    <>
      <PostsWrapper>
        <Helmet>
          <title>{decodeURI(category)}</title>
          <meta name="og:title" content={decodeURI(category)} />
        </Helmet>
        {posts.length === 0 ? <div>No posts.</div> : null}
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
      </PostsWrapper>
      <Pagination
        prefix={`/categories/${category}/`}
        postCount={postCount}
        location={location}
      />
    </>
  );
};

CategorizedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default CategorizedList;
