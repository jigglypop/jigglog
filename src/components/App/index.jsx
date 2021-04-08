import React, { Component } from "react";
import Header from "~/components/Header/index.tsx";
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
            <Header
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
