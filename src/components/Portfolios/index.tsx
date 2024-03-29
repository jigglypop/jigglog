import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { PREFIX } from '../../constants';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './styled.css';
import { LogoItem, PortfoliosWrapper } from './styled';
import { TitleBig, Content } from './styled';
import { Grid } from '@material-ui/core';

export interface IPortfolios {
  data: {
    portfolios: any;
  };
}

export interface IPortfolio {
  node: {
    frontmatter: {
      path: string;
      title: string;
      description: string;
      images: string[];
      iconset: string[];
      site: string;
    };
  };
}

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}: IPortfolios) => {
  let parallax: any;
  const onClick = (index: number) => {
    if (portfolios.length - 1 === index) {
      parallax.scrollTo(0);
    } else {
      parallax.scrollTo(index + 1);
    }
  };
  return (
    <PortfoliosWrapper>
      <Helmet>
        <title>{`${PREFIX}PORTFOLIOS`}</title>
        <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
      </Helmet>
      <Parallax ref={ref => (parallax = ref)} pages={portfolios.length}>
        <ParallaxLayer offset={0} speed={0} factor={3} />
        {portfolios.map((item: IPortfolio, index: number) => (
          <div key={index} onClick={() => onClick(index)}>
            <Link to={item.node.frontmatter.path}>
              <ParallaxLayer offset={index} speed={1}>
                <img
                  src={require(`~/resources/${item.node.frontmatter.images[0]}`)}
                  alt="portfolio"
                />
              </ParallaxLayer>
              <ParallaxLayer offset={index} speed={-0}>
                <div className="titlebig">
                  <TitleBig>{item.node.frontmatter.title}</TitleBig>
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={index} speed={-0}>
                <div className="content">
                  <Content>{item.node.frontmatter.description}</Content>
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={index} speed={-0}>
                <div className="iconsetbig">
                  <Grid
                    container
                    className="grid"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '40%',
                    }}
                  >
                    {item.node.frontmatter.iconset.map(
                      (item: string, index: number) => (
                        <LogoItem
                          second={
                            Math.floor(Math.random() * (2 - 0.5 + 0.1)) + 0.5
                          }
                          key={index}
                        >
                          #{item.replace('logo', '').toUpperCase()}
                        </LogoItem>
                      ),
                    )}
                  </Grid>
                </div>
              </ParallaxLayer>
            </Link>
          </div>
        ))}
      </Parallax>
    </PortfoliosWrapper>
  );
};

export default Portfolios;
