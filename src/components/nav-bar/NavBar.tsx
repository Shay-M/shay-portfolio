import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import logo from '../../assets/logo-shay.svg';

const NavBar = () => {
  return (
    <HStack padding={'10px'}>
      <Image src={logo} boxSize={'160px'} p={4}></Image>
      <VStack>
        <Text fontSize={'4xl'}>My Portfolio</Text>
        {/* <Text fontSize={'2xl'}>Here are some of my projects:</Text> */}
      </VStack>
      {/* <ColorModeSwitch /> */}
    </HStack>
  );
};

export default NavBar;
