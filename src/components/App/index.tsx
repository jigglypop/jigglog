import React from "react";
import Header from "../../components/Header";
import Footer from "../Footer/Footer";
import { Wrapper } from './styled'

export interface IApp {
  location : {
    pathname: string;
  }
  categories: object[];
  hasPortfolio: object;  
  categorySet: object;
  children: object;
};

const App = ( props: IApp ) =>{
  const { location, categories, hasPortfolio, children, categorySet } : IApp = props;
  return (
    <Wrapper>
      <nav>
        <Header
          location={location}
          categories={categories}
          hasPortfolio={hasPortfolio}
          categorySet={categorySet}
        />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </Wrapper>);
}
export default App