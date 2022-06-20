import React from 'react';
import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { StoreLogo } from '../StoreLogo';
import { Greeting } from './Greeting';
import { AnalyzeBtn } from '../components/AnalyzeBtn';

type UnsupportedStoreProps = {
  // pass
}


const StoreIsNotSupported = () => {
  return <Box my={ 2 }>
    <Box>
      <Flex py={ 2 } px={ 3 } bg="orange.100">
        <Text fontSize={ '40px' } mr={ 2 }>🥸</Text>
        <Box>
          <Text fontSize={ 'xl' }>Овва</Text>
          <Text fontSize={ 'sm' }>
            Здається, це не сторінка з товаром
            <br />
            Але є й гарні новини, ми вже підримуємо
            <br />
          </Text>
          <StoreLogo />
        </Box>
      </Flex>

    </Box>
  </Box>
}

export const UnsupportedStore: React.FC<UnsupportedStoreProps> = ({}) => {
  return (
      <Box>
        <Greeting />
        <Center>
          <AnalyzeBtn />
        </Center>
        <StoreIsNotSupported />
      </Box>
  );
}
