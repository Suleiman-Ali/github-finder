export const buildQuery = (txt: string): string => `/search/users?q=${txt}`;
export const buildReposQuery = (txt: string): string => `/users/${txt}/repos`;
export const year = new Date().getFullYear();
