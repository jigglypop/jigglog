import React, { Component } from "react";
// import { ThemeProvider } from "styled-components";
import Gnb from "~/components/Gnb";
import { Wrapper } from './styled'

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

    return (
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
    );
  }
}
