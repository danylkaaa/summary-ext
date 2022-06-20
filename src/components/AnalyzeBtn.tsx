import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

type AnalytzeBtnProps = {
  enabled?: boolean
}

export const AnalyzeBtn: React.FC<AnalytzeBtnProps> = ({ enabled }) => {
  return <Box m={ 2 }>
    <Button
        size={ 'lg' }
        rightIcon={ <ArrowForwardIcon /> }
        variant={ enabled ? 'solid' : 'outline' }
        colorScheme={ enabled ? 'green' : 'none' }
        disabled={ !enabled }
    >Проаналізувати</Button>
  </Box>
}
