import React from "react";
import { AUTHOR, DESCRIPTION, SITE_URL, PROFILE } from "~/constants";
import { Wrapper } from "./styled";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const Bio = () => (
  <Wrapper>
    <a href={SITE_URL} target="_blank" rel="noreferrer noopener">
      <Grid container>
        <Grid>
          <Avatar
            src={PROFILE}
            alt=""
            style={{ width: 50, height: 50, border: "2px solid white" }}
          />
        </Grid>
        <Grid>
          <p>{AUTHOR}</p>
        </Grid>
      </Grid>
    </a>
  </Wrapper>
);

export default Bio;
