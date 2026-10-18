export interface ProjectRequest {
  projectName: string;
  projectDescription: string;
  liveLink?: string;
  frontendGithubLink?: string;
  backendGithubLink?: string;
  imageUrls: string[];
  demoVideoUrl?: string;
  documentationUrl?: string;
  technologies: string[];
  categoryId?: number;
}