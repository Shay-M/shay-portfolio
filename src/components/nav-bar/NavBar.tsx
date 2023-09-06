import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import logo from '../../assets/logo-shay.svg';

const NavBar = () => {
  {
    console.log('1.1');
  }
  return (
    <VStack>
      <HStack>
        <Image src={logo} boxSize={'160px'} p={4}></Image>

        <Text fontSize={'4xl'}>My Portfolio</Text>

        {/* <Text fontSize={'1xl'}>
        
      </Text> */}
      </HStack>
      <Text as="i" padding={'25px'}>
        Hi my name is Shay, I am a motivated and proactive B.Sc. Computer Science.
        <br /> My passion for learning and staying updated with the latest technologies
        drives me to excel in the field. I have a solid foundation in computer science and
        am committed to continuous self-improvement. With expertise in:
        <br />
        Java, Spring, GIT, Python, JavaScript, C#, C++, HTML & CSS, SQL & MongoDB,
        Dockers, Jenkins. I am well-equipped to contribute to innovative projects.
        <br />I am a versatile professional ready to make a positive impact in the
        technology field.
      </Text>
    </VStack>
  );
};

export default NavBar;
