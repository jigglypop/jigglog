# Gatsby에서 데이터를 다루는 법

다음 포스팅은 gatsby의 공식 튜토리얼을 해석하고 다수 참고했음을 밝힙니다.



## 자습서 전반부 재점검

So far, you’ve been learning how to use React.js—how powerful it is to be able to create your *own* components to act as custom building blocks for websites.

You’ve also explored styling components using CSS Modules.



웹 사이트의 사용자 지정 구성 요소 역할을 하기 위해 커스텀 컴포넌트를 만들 수 있는 것이 얼마나 강력한지 지금까지 React.js를 사용하는 방법을 배우셨습니다. 

CSS 모듈을 사용한 스타일링 구성 요소도 살펴보셨습니다.

## What’s in this tutorial?

In the next four parts of the tutorial (including this one), you’ll be diving into the Gatsby data layer, which is a powerful feature of Gatsby that lets you easily build sites from Markdown, WordPress, headless CMSs, and other data sources of all flavors.

**NOTE:** Gatsby’s data layer is powered by GraphQL. For an in-depth tutorial on GraphQL, we recommend [How to GraphQL](https://www.howtographql.com/).

## Data in Gatsby

A website has four parts: HTML, CSS, JS, and data. The first half of the tutorial focused on the first three. Now let’s learn how to use data in Gatsby sites.

**What is data?**

A very computer science-y answer would be: data is things like `"strings"`, integers (`42`), objects (`{ pizza: true }`), etc.

For the purpose of working in Gatsby, however, a more useful answer is “everything that lives outside a React component”.

So far, you’ve been writing text and adding images *directly* in components. Which is an *excellent* way to build many websites. But, often you want to store data *outside* components and then bring the data *into* the component as needed.

If you’re building a site with WordPress (so other contributors have a nice interface for adding & maintaining content) and Gatsby, the *data* for the site (pages and posts) are in WordPress and you *pull* that data, as needed, into your components.

Data can also live in file types like Markdown, CSV, etc. as well as databases and APIs of all sorts.



웹사이트는 HTML, CSS, JS, 그리고 데이터의 네 부분으로 구성되어 있습니다. 튜토리얼의 전반부는 첫 번째 세 가지에 초점을 맞췄다. 이제 개츠비 사이트에서 데이터를 사용하는 방법에 대해 배워봅시다.

**데이터란?**

아주 컴퓨터 과학적인 대답은 데이터가 string, integer, object 등과 같은 것이라는 것이다.

그러나 개츠비에서 일할 목적으로, 더 유용한 대답은 "반응 요소 밖에 사는 모든 것"이다.

지금까지 텍스트를 작성하고 구성 요소에 *직접* 이미지를 추가하셨습니다. 그것은 많은 웹사이트를 만드는 *우수한*의 방법이다. 그러나 데이터 *outside* 구성요소를 저장한 후 필요에 따라 *internal* 구성요소에 데이터를 가져오려는 경우가 많다.

WordPress(다른 기고자들이 콘텐츠를 추가 및 유지 관리하기 위한 훌륭한 인터페이스를 가지고 있음) 및 Gatsby와 함께 사이트를 구축하고 있다면, 해당 사이트(페이지 및 게시물)에 대한 *데이터*가 WordPress에 있고, 필요에 따라 해당 데이터를 구성 요소에 끌어다 놓으십시오.

데이터는 마크다운, CSV 등과 같은 파일 형식뿐만 아니라 모든 종류의 데이터베이스와 API에서도 사용할 수 있다.

**Gatsby의 데이터 계층을 사용하면 이러한 데이터(및 다른 소스)에서 원하는 모양과 형태로 직접 구성 요소로 데이터를 가져올 수 있음**—



## Using Unstructured Data vs GraphQL

### Do I have to use GraphQL and source plugins to pull data into Gatsby sites?

Absolutely not! You can use the node `createPages` API to pull unstructured data into Gatsby pages directly, rather than through the GraphQL data layer. This is a great choice for small sites, while GraphQL and source plugins can help save time with more complex sites.

See the [Using Gatsby without GraphQL](https://www.gatsbyjs.org/docs/using-gatsby-without-graphql/) guide to learn how to pull data into your Gatsby site using the node `createPages` API and to see an example site!

### When do I use unstructured data vs GraphQL?

If you’re building a small site, one efficient way to build it is to pull in unstructured data as outlined in this guide, using `createPages` API, and then if the site becomes more complex later on, you move on to building more complex sites, or you’d like to transform your data, follow these steps:

1. Check out the [Plugin Library](https://www.gatsbyjs.org/plugins/) to see if the source plugins and/or transformer plugins you’d like to use already exist
2. If they don’t exist, read the [Plugin Authoring](https://www.gatsbyjs.org/docs/creating-plugins/) guide and consider building your own!

### How Gatsby’s data layer uses GraphQL to pull data into components

There are many options for loading data into React components. One of the most popular and powerful of these is a technology called [GraphQL](https://graphql.org/).

GraphQL was invented at Facebook to help product engineers *pull* needed data into components.

GraphQL is a **q**uery **l**anguage (the *QL* part of its name). If you’re familiar with SQL, it works in a very similar way. Using a special syntax, you describe the data you want in your component and then that data is given to you.

Gatsby uses GraphQL to enable components to declare the data they need.

## Create a new example site

Create another new site for this part of the tutorial. You’re going to build a Markdown blog called “Pandas Eating Lots”. It’s dedicated to showing off the best pictures and videos of pandas eating lots of food. Along the way, you’ll be dipping your toes into GraphQL and Gatsby’s Markdown support.

Open a new terminal window and run the following commands to create a new Gatsby site in a directory called `tutorial-part-four`. Then navigate to the new directory:

```shell
Copycopy code to clipboard
gatsby new tutorial-part-four https://github.com/gatsbyjs/gatsby-starter-hello-world
cd tutorial-part-four
```

Then install some other needed dependencies at the root of the project. You’ll use the Typography theme “Kirkham”, and you’ll try out a CSS-in-JS library, [“Emotion”](https://emotion.sh/):

```shell
Copycopy code to clipboard
npm install --save gatsby-plugin-typography typography react-typography typography-theme-kirkham gatsby-plugin-emotion @emotion/core
```

Set up a site similar to what you ended with in [Part Three](https://www.gatsbyjs.org/tutorial/part-three). This site will have a layout component and two page components:

src/components/layout.js

```jsx
Copysrc/components/layout.js: copy code to clipboard
import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}
```

src/pages/index.js

```jsx
Copysrc/pages/index.js: copy code to clipboard
import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}
```

src/pages/about.js

```jsx
Copysrc/pages/about.js: copy code to clipboard
import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About Pandas Eating Lots</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}
```

src/utils/typography.js

```javascript
Copysrc/utils/typography.js: copy code to clipboard
import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
```

`gatsby-config.js` (must be in the root of your project, not under src)

gatsby-config.js

```javascript
Copygatsby-config.js: copy code to clipboard
module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

Add the above files and then run `gatsby develop`, per usual, and you should see the following:

[![start](https://www.gatsbyjs.org/static/9a136a7536d2f4b315d446f6a1a83725/321ea/start.png)](https://www.gatsbyjs.org/static/9a136a7536d2f4b315d446f6a1a83725/ca3c3/start.png)

You have another small site with a layout and two pages.

Now you can start querying 😋

## Your first GraphQL query

When building sites, you’ll probably want to reuse common bits of data — like the *site title* for example. Look at the `/about/` page. You’ll notice that you have the site title (`Pandas Eating Lots`) in both the layout component (the site header) as well as in the `` of the `about.js` page (the page header).

But what if you want to change the site title in the future? You’d have to search for the title across all your components and edit each instance. This is both cumbersome and error-prone, especially for larger, more complex sites. Instead, you can store the title in one location and reference that location from other files; change the title in a single place, and Gatsby will *pull* your updated title into files that reference it.

The place for these common bits of data is the `siteMetadata` object in the `gatsby-config.js` file. Add your site title to the `gatsby-config.js` file:

gatsby-config.js

```javascript
Copygatsby-config.js: copy code to clipboard
module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

Restart the development server.

### Use a page query

Now the site title is available to be queried; Add it to the `about.js` file using a [page query](https://www.gatsbyjs.org/docs/page-query):

src/pages/about.js

```jsx
Copysrc/pages/about.js: copy code to clipboard
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

It worked! 🎉

[![Page title pulling from siteMetadata](https://www.gatsbyjs.org/static/4df7cdfeb994c1a07b4557f0f6010d91/c5bb3/site-metadata-title.png)](https://www.gatsbyjs.org/static/4df7cdfeb994c1a07b4557f0f6010d91/c5bb3/site-metadata-title.png)

The basic GraphQL query that retrieves the `title` in your `about.js` changes above is:

src/pages/about.js

```graphql
Copysrc/pages/about.js: copy code to clipboard
{
  site {
    siteMetadata {
      title
    }
  }
}
```

> 💡 In [part five](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql), you’ll meet a tool that lets us interactively explore the data available through GraphQL, and help formulate queries like the one above.

Page queries live outside of the component definition — by convention at the end of a page component file — and are only available on page components.

### Use a StaticQuery

[StaticQuery](https://www.gatsbyjs.org/docs/static-query/) is a new API introduced in Gatsby v2 that allows non-page components (like your `layout.js` component), to retrieve data via GraphQL queries. Let’s use its newly introduced hook version — [`useStaticQuery`](https://www.gatsbyjs.org/docs/use-static-query/).

Go ahead and make some changes to your `src/components/layout.js` file to use the `useStaticQuery` hook and a `{data.site.siteMetadata.title}` reference that uses this data. When you are done, your file will look like this:

src/components/layout.js

```jsx
Copysrc/components/layout.js: copy code to clipboard
import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}
```

Another success! 🎉

[![Page title and layout title both pulling from siteMetadata](https://www.gatsbyjs.org/static/500fd2f12d69813d2bbe6d669eaf3ce8/8ce52/site-metadata-two-titles.png)](https://www.gatsbyjs.org/static/500fd2f12d69813d2bbe6d669eaf3ce8/8ce52/site-metadata-two-titles.png)

Why use two different queries here? These examples were quick introductions to the query types, how they are formatted, and where they can be used. For now, keep in mind that only pages can make page queries. Non-page components, such as Layout, can use StaticQuery. [Part 7](https://www.gatsbyjs.org/tutorial/part-seven/) of the tutorial explains these in greater depth.

But let’s restore the real title.

One of the core principles of Gatsby is that *creators need an immediate connection to what they’re creating* ([hat tip to Bret Victor](http://blog.ezyang.com/2012/02/transcript-of-inventing-on-principle/)). In other words, when you make any change to code you should immediately see the effect of that change. You manipulate an input of Gatsby and you see the new output showing up on the screen.

So almost everywhere, changes you make will immediately take effect. Edit the `gatsby-config.js` file again, this time changing the `title` back to “Pandas Eating Lots”. The change should show up very quickly in your site pages.

[![Both titles say Pandas Eating Lots](https://www.gatsbyjs.org/static/550fbd5e51d2ec54cad87687acb76a06/c5bb3/pandas-eating-lots-titles.png)](https://www.gatsbyjs.org/static/550fbd5e51d2ec54cad87687acb76a06/c5bb3/pandas-eating-lots-titles.png)

## What’s coming next?

Next, you’ll be learning about how to pull data into your Gatsby site using GraphQL with source plugins in [part five](https://www.gatsbyjs.org/tutorial/part-five/) of the tutorial.