import { HStack, Badge } from '@chakra-ui/react';

interface Props {
  platforms: string[];
}

const ProjectBadgeList = ({ platforms }: Props) => {
  return (
    <HStack spacing={2} marginY={1}>
      {platforms.map((platform) => (
        <Badge colorScheme="gray" fontSize="sm" key={platform}>
          {platform}
        </Badge>
      ))}
    </HStack>
  );
};

export default ProjectBadgeList;
