import { Icon, HStack, Tooltip, Box } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { FaJava, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import {
  SiSpring,
  SiMongodb,
  SiGradle,
  SiApachemaven,
  SiCsharp,
  SiOpencv,
  SiTensorflow,
  SiNumpy,
} from 'react-icons/si';
import { BsGithub, BsAndroid2 } from 'react-icons/bs';
import { BiLogoUnity } from 'react-icons/bi';
import { GrDocker } from 'react-icons/gr';
import { IoLogoFirebase } from 'react-icons/io5';

//FaJava FaReact BiLogoJavascript BiLogoTypescript SiSpring SiMongodb BsGithub SiGradle SiApachemaven
// SiCsharp FaPython GrDocker SiJenkins PiFileSqlLight IoLogoFirebase FaNodeJs BsAndroid2
// SiOpencv SiTensorflow SiNumpy BiLogoUnity
// SiAdobeillustrator SiAdobephotoshop SiAdobefonts
interface Props {
  platforms: string[];
}

const ProjectIconList = ({ platforms }: Props) => {
  const iconMap: Record<string, IconType> = {
    Java: FaJava,
    React: FaReact,
    Python: FaPython,
    NodeJS: FaNodeJs,
    JavaScript: BiLogoJavascript,
    TypeScript: BiLogoTypescript,
    Spring: SiSpring,
    MongoDB: SiMongodb,
    Gradle: SiGradle,
    Maven: SiApachemaven,
    CSharp: SiCsharp,
    OpenCV: SiOpencv,
    TensorFlow: SiTensorflow,
    NumPy: SiNumpy,
    GitHub: BsGithub,
    Android: BsAndroid2,
    Docker: GrDocker,
    Firebase: IoLogoFirebase,
    // SQLite: PiFileSqlLight,
    // NodeJS: FaNodeJs,
    Unity: BiLogoUnity,
    // Illustrator: SiAdobeillustrator,
    // Photoshop: SiAdobephotoshop,
    // AdobeFonts: SiAdobefonts,
  };

  return (
    <HStack spacing={3} marginY={1}>
      {platforms.map((platform) => (
        <Tooltip hasArrow label={platform} key={platform}>
          <Box>
            <Icon
              rounded={'6px'}
              as={iconMap[platform]}
              boxSize={8}
              boxShadow={'dark-lg'}
              bgColor={'gray.500'}
              padding={1}
            />
          </Box>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default ProjectIconList;
