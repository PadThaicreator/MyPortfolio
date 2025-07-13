export type ProjectCardType = {
  id: string;
  projectName: string;
  description: string;
  webUrl: string;
  imgUrl: string;
  tool: string[];
  status: 'active' | 'inactive'; 
  createdAt: string; 
  gitHubUrl: string;
};
