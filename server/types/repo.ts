export type Repo = {
  id: number;
  name: string;
  repo: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  pushedAt: Date;
  stars: number;
  watchers: number;
  forks: number;
  defaultBranch: string;
};
