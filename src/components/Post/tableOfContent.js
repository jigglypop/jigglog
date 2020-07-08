import React from "react";
import { Box } from "rebass/styled-components";
import "./styled.css";

export default function TableOfContents({ items, currentHeaderUrl }) {
  if (!currentHeaderUrl) {
    return null;
  }
  const tempHeader = [];
  const currentSplit = currentHeaderUrl.split("-");
  for (const i in currentSplit) {
    tempHeader.push(decodeURI(currentSplit[i]));
  }

  const tempItems = [];
  const currentItems = items.split("-");
  for (const i in currentItems) {
    tempItems.push(decodeURI(currentItems[i]));
  }
  return tempItems.length > 0 && tempHeader.length > 0 ? (
    <div
      style={{
        display: "block",
        marginRight: "20px",
        fontSize: "10px",
        borderLeft: "7px solid black",
      }}
    >
      <Box
        dangerouslySetInnerHTML={{ __html: tempItems.join("-") }}
        sx={{
          "& ul": {
            listStyle: "none",
            color: "gray !important",

            marginBottom: "0px",
          },
          "& ul > li": {
            lineHeight: "1.5rem",
            color: "gray !important",

            overflow: "hidden",
          },
          [`& ul > li a[href="${tempHeader.join("-")}"]`]: {
            fontSize: "14px",
            color: "black !important",
            fontWeight: "800",
          },
          "& a": {
            color: "gray !important",
          },
        }}
      />
    </div>
  ) : null;
}
