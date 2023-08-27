import React, { useState } from 'react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { FaGithub, FaGooglePlay, FaYoutube } from 'react-icons/fa';
import { Project } from '../../hooks/useProjects';
import YouTubeModal from './YouTubeModal';

interface Props {
  project: Project;
}

const ButtonGroupButtons: React.FC<Props> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // base: '200px', sm: '200px', md: '200px', lg: '200px', xl: '200px'
  // <ButtonGroup size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'lg' }}>

  return (
    <>
      <Stack
        direction={{ xl: 'row', lg: 'row', md: 'row', sm: 'column', base: 'column' }}
        align="revert"
      >
        {project.gitRepository.length !== 0 && (
          <Button
            colorScheme="purple"
            leftIcon={<FaGithub />}
            size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'lg' }}
            onClick={() => openLink(project.gitRepository)}
          >
            Github
          </Button>
        )}
        {project.youtubeLink.length !== 0 && (
          <Button
            colorScheme="red"
            leftIcon={<FaYoutube />}
            onClick={openModal}
            size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'lg' }}
          >
            Youtube
          </Button>
        )}
        {project.googlePlay.length !== 0 && (
          <Button
            colorScheme="green"
            leftIcon={<FaGooglePlay />}
            size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'lg' }}
            onClick={() => openLink(project.googlePlay)}
          >
            GooglePlay
          </Button>
        )}
      </Stack>

      <YouTubeModal
        videoUrl={project.youtubeLink}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ButtonGroupButtons;
