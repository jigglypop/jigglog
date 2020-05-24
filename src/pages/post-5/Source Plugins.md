# Source Plugins

> This tutorial is part of a series about Gatsby’s data layer. Make sure you’ve gone through [part 4](https://www.gatsbyjs.org/tutorial/part-four/) before continuing here.

## What’s in this tutorial?

In this tutorial, you’ll be learning about how to pull data into your Gatsby site using GraphQL and source plugins. Before you learn about these plugins, however, you’ll want to know how to use something called GraphiQL, a tool that helps you structure your queries correctly.

## Introducing GraphiQL

GraphiQL is the GraphQL integrated development environment (IDE). It’s a powerful (and all-around awesome) tool you’ll use often while building Gatsby websites.

You can access it when your site’s development server is running—normally at `http://localhost:8000/___graphql`.

<video controls="" autoplay="" loop="" style="box-sizing: border-box; display: inline-block; width: 624px; margin-bottom: 1.5rem; color: rgb(54, 49, 61); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></video>

Poke around the built-in `Site` “type” and see what fields are available on it — including the `siteMetadata` object you queried earlier. Try opening GraphiQL and play with your data! Press Ctrl + Space (or use Shift + Space as an alternate keyboard shortcut) to bring up the autocomplete window and Ctrl + Enter to run the GraphQL query. You’ll be using GraphiQL a lot more through the remainder of the tutorial.

## Using the GraphiQL Explorer

The GraphiQL Explorer enables you to interactively construct full queries by clicking through available fields and inputs without the repetitive process of typing these queries out by hand.

<iframe class="egghead-video" width="600" height="337.5" src="https://egghead.io/lessons/gatsby-build-a-graphql-query-using-gatsby-s-graphiql-explorer/embed" title="Video: Build a GraphQL Query using Gatsby’s GraphiQL Explorer" allowfullscreen="" style="box-sizing: border-box; margin: 0px 0px 1.5rem; padding: 0px; border: none; max-width: 100%; color: rgb(54, 49, 61); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;"></iframe>

*Video hosted on [egghead.io](https://egghead.io/lessons/gatsby-build-a-graphql-query-using-gatsby-s-graphiql-explorer)*.

## Source plugins

Data in Gatsby sites can come from anywhere: APIs, databases, CMSs, local files, etc.

Source plugins fetch data from their source. E.g. the filesystem source plugin knows how to fetch data from the file system. The WordPress plugin knows how to fetch data from the WordPress API.

Add [`gatsby-source-filesystem`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/) and explore how it works.

First, install the plugin at the root of the project:

```shell
Copycopy code to clipboard
npm install --save gatsby-source-filesystem
```

Then add it to your `gatsby-config.js`:

gatsby-config.js

```javascript
Copygatsby-config.js: copy code to clipboard
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
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

Save that and restart the gatsby development server. Then open up GraphiQL again.

In the explorer pane, you’ll see `allFile` and `file` available as selections:

[![graphiql-filesystem](https://www.gatsbyjs.org/static/88ec3efe94e380d32bc1a20cd82dd8bf/321ea/graphiql-filesystem.png)](https://www.gatsbyjs.org/static/88ec3efe94e380d32bc1a20cd82dd8bf/373fb/graphiql-filesystem.png)

Click the `allFile` dropdown. Position your cursor after `allFile` in the query area, and then type Ctrl + Enter. This will pre-fill a query for the `id` of each file. Press “Play” to run the query:

[![filesystem-query](https://www.gatsbyjs.org/static/cf2ffc2f9d3aa512fb742efd377691da/321ea/filesystem-query.png)](https://www.gatsbyjs.org/static/cf2ffc2f9d3aa512fb742efd377691da/1d7f7/filesystem-query.png)

In the Explorer pane, the `id` field has automatically been selected. Make selections for more fields by checking the field’s corresponding checkbox. Press “Play” to run the query again, with the new fields:

[![filesystem-explorer-options](https://www.gatsbyjs.org/static/d430ba8bcbc8eb92cd549b70f3798561/321ea/filesystem-explorer-options.png)](https://www.gatsbyjs.org/static/d430ba8bcbc8eb92cd549b70f3798561/10c1e/filesystem-explorer-options.png)

Alternatively, you can add fields by using the autocomplete shortcut (Ctrl + Space). This will show queryable fields on the `File` nodes.

[![filesystem-autocomplete](https://www.gatsbyjs.org/static/b2b05958c518b34568861f40449228f4/321ea/filesystem-autocomplete.png)](https://www.gatsbyjs.org/static/b2b05958c518b34568861f40449228f4/8c48a/filesystem-autocomplete.png)

Try adding a number of fields to your query, press Ctrl + Enter each time to re-run the query. You’ll see the updated query results:

[![allfile-query](https://www.gatsbyjs.org/static/077caa982416bc5df87e31f21a1a3417/321ea/allfile-query.png)](https://www.gatsbyjs.org/static/077caa982416bc5df87e31f21a1a3417/eff3b/allfile-query.png)

The result is an array of `File` “nodes” (node is a fancy name for an object in a “graph”). Each `File` node object has the fields you queried for.

## Build a page with a GraphQL query

Building new pages with Gatsby often starts in GraphiQL. You first sketch out the data query by playing in GraphiQL then copy this to a React page component to start building the UI.

Let’s try this.

Create a new file at `src/pages/my-files.js` with the `allFile` GraphQL query you just created:

src/pages/my-files.js

```jsx
Copysrc/pages/my-files.js: copy code to clipboard
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
```

The `console.log(data)` line is highlighted above. It’s often helpful when creating a new component to console out the data you’re getting from the GraphQL query so you can explore the data in your browser console while building the UI.

If you visit the new page at `/my-files/` and open up your browser console you will see something like:

[![data-in-console](https://www.gatsbyjs.org/static/3fd681a2f33d483a82d067b07704f7e5/321ea/data-in-console.png)](https://www.gatsbyjs.org/static/3fd681a2f33d483a82d067b07704f7e5/fbf08/data-in-console.png)

The shape of the data matches the shape of the GraphQL query.

Add some code to your component to print out the File data.

src/pages/my-files.js

```jsx
Copysrc/pages/my-files.js: copy code to clipboard
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
```

And now visit `http://localhost:8000/my-files`… 😲

[![my-files-page](https://www.gatsbyjs.org/static/d5507ac06a742b5fe3a91a40f9c3148a/321ea/my-files-page.png)](https://www.gatsbyjs.org/static/d5507ac06a742b5fe3a91a40f9c3148a/1ffbd/my-files-page.png)

## What’s coming next?

Now you’ve learned how source plugins bring data *into* Gatsby’s data system. In the next tutorial, you’ll learn how transformer plugins *transform* the raw content brought by source plugins. The combination of source plugins and transformer plugins can handle all data sourcing and data transformation you might need when building a Gatsby site. Learn about transformer plugins in [part six of the tutorial](https://www.gatsbyjs.org/tutorial/part-six/).