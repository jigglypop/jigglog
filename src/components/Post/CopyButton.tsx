import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AiOutlineLink } from 'react-icons/ai'
import styled from 'styled-components'
import { createToast } from '../Common/toast/createToast'

const LinkButton = styled.button`
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
  margin: 5px;
  background-color:#141414;
  transition: all 0.5s ease-in-out;
  border: 2px solid #4a00e0;
  box-shadow : 0 0 5px gray;
  .link-inner{
    width: 30px;
    height: 30px;
  }
  &:hover {
    box-shadow : 0 0 20px gray;
  }
`
const CopyButton = () => {
    const url = window.location.href; 
    const onClick = () =>{
        createToast("링크 복사")
    }
    return (
        <CopyToClipboard text={url}>
            <LinkButton onClick={onClick}>
                <AiOutlineLink color="#4a00e0" className="link-inner"/>
            </LinkButton>
        </CopyToClipboard>
    )
}
export default CopyButton