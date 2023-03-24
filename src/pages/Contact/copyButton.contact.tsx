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
      width='fit-content'
      height='fit-content'
      padding='0.5rem'
      border='1px solid'
      borderRadius='5px'
      fontSize='sm'
      textTransform='uppercase'
      backgroundColor='blue.50'
      color='black'
      _hover={{
        boxShadow: '2px -2px 0 0 black',
        transform: 'translate(-2px, 2px)',

        borderTop: '1px solid',
      }}
    >
      {copyButton} <CopyIcon marginLeft='5px' />
    </Button>
  );
};
