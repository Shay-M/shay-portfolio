import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
} from '@chakra-ui/react';
// import { Project } from '../../hooks/useProjects';

interface Props {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const YouTubeModal: React.FC<Props> = ({ videoUrl, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box pt="10%">
            <iframe
              width="100%"
              height="400px"
              src={videoUrl}
              title="YouTube video player"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
            ></iframe>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default YouTubeModal;
