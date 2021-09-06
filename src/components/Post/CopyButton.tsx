import React, { useEffect, useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { LinkButton } from './styled';
import { createToast } from '../Common/toast/createToast';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButton = () => {
  const onClick = () => {
    createToast('링크 복사');
  };
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard text={url}>
      <LinkButton onClick={onClick}>
        <AiOutlineLink color="#4a00e0" className="link-inner" />
      </LinkButton>
    </CopyToClipboard>
  );
};
export default CopyButton;
