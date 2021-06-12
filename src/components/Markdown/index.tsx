import React, { useEffect, useState } from "react";
import "./styled.css";
import { PostContent } from "../Post/styled";

const PREFIX = "jigglog| ";

const MarkdownTemplate = ({
  data
}: any) => {


  return (
    <>
      <div>
        <PostContent answer={""} lines={""} dels={""}>
            <div
              id="post-contents"
              dangerouslySetInnerHTML={{ __html: data.post.html }}
              style={{ marginBottom: "100px" }}
            />
        </PostContent>
      </div>
    </>
  );
};

export default MarkdownTemplate;
