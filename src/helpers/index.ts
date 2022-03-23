export const buildQuery = (txt: string): string => `/search/users?q=${txt}`;
export const buildReposQuery = (txt: string): string => `/users/${txt}/repos`;
export const year = new Date().getFullYear();

export type Voidy = () => void;
export type Users = { login: string; avatar_url: string }[];
export type User = {
  name: string;
  type: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  login: string;
  twitter_username: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
};
export type Repo = {
  name: string;
  description: string;
  watchers_count: number;
  stargazers_count: number;
  open_issues: number;
  forks: number;
  html_url: string;
};
export type Repos = Repo[];

let colors = ['#d8ca84', '#e26970', '#437aa1', '#70a24c'];
export const color = () => colors[Math.floor(Math.random() * colors.length)];
