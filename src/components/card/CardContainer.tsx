import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  cardHeight: string;
}

const CardContainer = ({ children, cardHeight }: Props) => {
  return (
    <Box
      transition="transform 0.3s"
      _hover={{
        transform: 'scale(1.02)',
        transition: 'transform 0.2s ease-in-out', // Add easing for smooth animation
      }}
      overflow="hidden"
      borderRadius="lg"
      borderWidth="2px"
      // height={cardHeight}
      maxWidth="100%" // Set the maximum width
      height={{ lg: 'auto', sm: 'auto' }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
