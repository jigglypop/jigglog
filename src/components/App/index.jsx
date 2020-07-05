import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Gnb from "~/components/Gnb";
import Footer from "~/components/Footer";
import { BLACK_COLOR, WHITE_COLOR } from "~/components/Common/constants";
import { Wrapper } from "./styled";

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
      .isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    categorySet: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

    postInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    hasPortfolio: PropTypes.bool.isRequired,
  };
  render() {
    const {
      location,
      categories,
      postInformations,
      hasPortfolio,
      children,
      categorySet,
    } = this.props;
    const theme = {
      color: WHITE_COLOR,
      backgroundColor: BLACK_COLOR,
    };
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <nav>
            <Gnb
              location={location}
              categories={categories}
              postInformations={postInformations}
              hasPortfolio={hasPortfolio}
              categorySet={categorySet}
            />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
