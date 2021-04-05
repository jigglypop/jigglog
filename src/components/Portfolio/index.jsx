import React from "react";
import Helmet from "react-helmet";
import { PREFIX } from "~/constants";
import IconSetUnder from "../IconSet/IconSetUnder";
import { Wrapper, Title, PortfolioDescription, PortfolioImages, } from './styled'


const Portfolio = ({
  data: {
    portfolio: {
      frontmatter: { title, images, site, iconset },
      html,
    },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}${title.toUpperCase()}`}</title>
      <meta name="og:title" content={`${PREFIX}${title.toUpperCase()}`} />
    </Helmet>
    <Title>
      <a href={site} style={{ color: "white" }}>
        {title}
        <IconSetUnder IconObject={iconset} />
      </a>
    </Title>

    <PortfolioDescription>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </PortfolioDescription>
    <PortfolioImages>
      {images.map((image) => {
        if (image.includes("//")) {
          return <img key={image} src={image} alt={title} />;
        }
        const url = require(`~/resources/${image}`);
        return <img key={image} src={url} alt={title} />;
      })}
    </PortfolioImages>
  </Wrapper>
);

export default Portfolio;
