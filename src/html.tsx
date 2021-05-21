import React from "react";
import { NAME, TITLE, DESCRIPTION, AUTHOR, KEYWORDS } from "./constants";

const stylesStr = require("!raw-loader!./reset.css");
const HTML = ( props : any ) => {
  const {
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
  } = props;
  return (
      <html {...htmlAttributes} lang="ko">
        <head>
          {headComponents}
          <meta
            name="google-site-verification"
            content="iJNm9P7wYJjzTUuWrwBW8Hgl1I7JevIZjuUyGFAshLg"
          />

          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
          <meta httpEquiv="Access-Control-Allow-Headers" content="*" />
          <meta httpEquiv="Access-Control-Expose-Headers" content="*" />
          <meta httpEquiv="Access-Control-Allow-Credentials" content="true" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            id="viewport"
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
          />
          <meta name="description" content={DESCRIPTION} />
          <meta name="keywords" content={KEYWORDS} />
          <meta name="author" content={AUTHOR} />
          <meta property="og:title" content={TITLE} />
          <meta property="og:site_name" content={NAME || TITLE} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:locale" content="ko_KR" />
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          <style
            id="gatsby-inlined-css"
            dangerouslySetInnerHTML={{ __html: stylesStr }}
          />
        </head>


        <body {...bodyAttributes}>
            {preBodyComponents}
              <div
                key="body"
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: body }}
              >
              </div>
            {postBodyComponents}
            <div className="toasts"></div>
        </body>
      </html>

  );
}

export default HTML

