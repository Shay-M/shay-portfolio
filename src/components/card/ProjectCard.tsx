import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
// import { Project } from '../hooks/useProjects'; // Import Project type
import ProjectIconList from './ProjectIconList';
import { Project } from '../../hooks/useProjects';
import ButtonGroupButtons from './ButtonGroupButtons';
import ProjectBadgeList from './ProjectBadgeList';

interface Props {
  project: Project; // Change type to Project
}

const ProjectCard = ({ project }: Props) => {
  const imageSrc = `/assets/images/${project.mainImage}`;
  // base: '200px', sm: '200px', md: '200px', lg: '200px', xl: '200px'
  return (
    <Card direction={{ md: 'row', sm: 'column', base: 'column' }}>
      <Image
        objectFit={{ base: 'cover', sm: 'contain' }}
        // maxW={{ base: '100%', sm: '250px' }}
        // minH={{ sm: '250px' }}
        maxW={{ base: '100%', sm: '200px', md: '200px', lg: '250px', xl: '250px' }}
        maxH={{ base: '300px', sm: '200px', md: '200px', lg: '250px', xl: '250px' }}
        src={imageSrc}
        alt={project.name}
      />

      <Stack flex="1">
        <CardBody>
          <Heading size="md">{project.name}</Heading>
          <Text py="2">{project.description}</Text>
        </CardBody>

        <Divider />

        <CardFooter>
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            {project.primaryTechnologies.length !== 0 && (
              <ProjectIconList platforms={project.primaryTechnologies} />
            )}
            {project.secondaryTechnologies.length !== 0 && (
              <ProjectBadgeList platforms={project.secondaryTechnologies} />
            )}
            <ButtonGroupButtons project={project} />
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
