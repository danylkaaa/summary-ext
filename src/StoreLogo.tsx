import React from 'react';
import { Tag, TagLabel, Image } from '@chakra-ui/react';
import AmazonLogo from './amazon.png'

type StoreLogoProps = {
  // pass
}

export const StoreLogo: React.FC<StoreLogoProps> = ({}) => {
  return (
      <Tag size={ 'lg' } variant="outline" colorScheme="blue">
        <Image src={ AmazonLogo } w={ '14px' } h={ '14px' } mr={1} mt={1}/>
        <TagLabel>Amazon</TagLabel>
      </Tag>
  )
}
