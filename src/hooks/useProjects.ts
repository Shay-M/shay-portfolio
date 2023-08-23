import { useEffect, useState } from 'react';
import projectsData from '../assets/projects.json';

export interface Project {
  name: string;
  description: string;
  primaryTechnologies: string[];
  secondaryTechnologies: string[];
  programmingLanguages: string[];
  mainImage: string;
  secondaryImages: string[];
  gitRepository: string;
  youtubeLink: string;
  googlePlay: string;
}

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      setProjects(projectsData);
      setLoading(false);
    } catch (error) {
      setError('Error loading projects data');
      setLoading(false);
    }
  }, []);

  return { projects, error, isLoading };
};

export default useProjects;
