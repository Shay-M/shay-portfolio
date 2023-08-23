// const ProjectGrid = () => {
//   const { games, error, isLoading } = useGames(selectedGenre);
//   return <div>ProjectGrid</div>;
// };

// export default ProjectGrid;

import { SimpleGrid, Text } from '@chakra-ui/react';
import useProjects from '../hooks/useProjects';
// import ProjectCardSkeleton from './ProjectCardSkeleton';
import CardContainer from './card/CardContainer';
import ProjectCard from './card/ProjectCard';

// interface Props {
//   selectedGenre: string | null;
// }

const ProjectGrid = () => {
  const { projects, error } = useProjects(); // Use useProjects hook
  // const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
      padding={'25px'}
      spacing={4}
      //   templateColumns="repeat(auto-fill, minmax(200px, 1fr)"
    >
      {projects.map((project) => (
        <CardContainer cardHeight={'250'} key={project.name}>
          <ProjectCard project={project} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid; // Export the modified component
