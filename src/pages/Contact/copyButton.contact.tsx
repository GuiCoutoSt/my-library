import { useState } from 'react';

import { CopyIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

interface ICopyButtonProps {
  elementId: string;
}

export const CopyButton = ({ elementId }: ICopyButtonProps) => {
  const [copyButton, setCopyButton] = useState('copiar');

  const copyText = (elementId: string) => {
    const text = document.getElementById(elementId)?.innerText;

    navigator.clipboard.writeText(text || '');

    setCopyButton('copiado');

    setTimeout(() => {
      setCopyButton('copiar');
    }, 2000);
  };
  return (
    <Button
      onClick={() => copyText(elementId)}
      position='absolute'
      top='0'
      right='0'
      fontSize='sm'
      textTransform='uppercase'
    >
      {copyButton} <CopyIcon marginLeft='5px' />
    </Button>
  );
};
