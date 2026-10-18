export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'frontend' | 'fullstack' | 'resume';
  categoryLabel: string;
  type: string;
  description: string;
  image: string;
  icon: string;
  technologies: string[];
  github?: string;
  featured?: boolean;
  liveUrl?: string;
}
