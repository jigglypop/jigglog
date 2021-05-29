import React from "react";
import {
  AUTHOR, MYNAME,
} from "../../constants";
import { Link } from "gatsby";
import { 
  BioWrapper
} from './styled'
import BorderSide from "../Common/borderside/BorderSide";
import CircleIcon from "./CircleIcon";

const Bio = () => (
  <BioWrapper>
    <div className="top">
      <Link to={"/resume"}>
        <BorderSide width="60px" height="60px"/>
      </Link>
    </div>
    <div className="mid">
      <p className="biotext">
        {AUTHOR}
      </p>
      <p className="biotext">
        {MYNAME}
      </p>
    </div>
    <CircleIcon/>
  </BioWrapper>
);

export default Bio;
