import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
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

  return (
    <>
      <ButtonGroup>
        {project.gitRepository.length !== 0 && (
          <Button
            colorScheme="purple"
            leftIcon={<FaGithub />}
            onClick={() => openLink(project.gitRepository)}
          >
            Github
          </Button>
        )}
        {project.youtubeLink.length !== 0 && (
          <Button colorScheme="red" leftIcon={<FaYoutube />} onClick={openModal}>
            Youtube
          </Button>
        )}
        {project.googlePlay.length !== 0 && (
          <Button
            colorScheme="green"
            leftIcon={<FaGooglePlay />}
            onClick={() => openLink(project.googlePlay)}
          >
            GooglePlay
          </Button>
        )}
      </ButtonGroup>

      <YouTubeModal
        videoUrl={project.youtubeLink}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ButtonGroupButtons;
