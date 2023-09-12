import { Divider, HStack, Image, Text, VStack } from '@chakra-ui/react';
import logo from '../../assets/logo-shay.svg';

const NavBar = () => {
  {
    console.log('1.2');
  }
  return (
    <VStack>
      <HStack>
        <Image src={logo} boxSize={'170px'} p={3}></Image>
      </HStack>
      <Text as="i" padding={'25px'}>
        Hi my name is Shay, I am a motivated and proactive B.Sc. Computer Science.
        <br /> My passion for learning and staying updated with the latest technologies
        drives me to excel in the field. I have a solid foundation in computer science and
        am committed to continuous self-improvement. With expertise in:
        <br />
        Java, Spring, GIT, Python, JavaScript, C#, C++, HTML & CSS, SQL & MongoDB,
        Dockers, Jenkins.
        <br />I am a versatile professional ready to make a positive impact in the
        technology field.
      </Text>
      <Divider />
      <Text fontSize={'4xl'}>My Portfolio</Text>
    </VStack>
  );
};

export default NavBar;
