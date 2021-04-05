import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Gnb from "~/components/Gnb";
import { BLACK_COLOR, WHITE_COLOR } from "~/components/Common/constants";
import { Wrapper } from "./styled";

export default class App extends Component {

  render() {
    const {
      location,
      categories,
      postInformations,
      hasPortfolio,
      children,
      categorySet,
      tagSet,
    } = this.props;
    const theme = {
      color: WHITE_COLOR,
      backgroundColor: BLACK_COLOR,
    };
    return (
      // <ThemeProvider theme={theme}>
        <Wrapper>
          <nav>
            <Gnb
              location={location}
              categories={categories}
              postInformations={postInformations}
              hasPortfolio={hasPortfolio}
              categorySet={categorySet}
              tagSet={tagSet}
            />
          </nav>

          <main>{children}</main>
        </Wrapper>
      // </ThemeProvider>
    );
  }
}
