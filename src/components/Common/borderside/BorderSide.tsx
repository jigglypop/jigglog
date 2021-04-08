import React from "react";
import { BorderDiv } from './style';

interface IBorderAvatar {
    width? : string | null
    height? : string | null
    border?: string | null
    shadow?: string | null
}

const BorderSide = ({ width, height, border, shadow } : IBorderAvatar) => {
    return (
        <BorderDiv
          width={width? width : '80px'}
          height={height? height : '80px'}
          border={border? border : '4px'}
          shadow={shadow? shadow : '3px'}
        >
          <div className="box">
              <img
                src={"/jigglypop.gif"}
                className="admin"
                alt="box"/>
          </div>
        </BorderDiv>
    );
  };
  

export default BorderSide;