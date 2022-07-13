import { API_KEY, TOP_STORIES } from 'constants/api';

export const articlesListFetcher = async (section: string) => {
  const url = `${TOP_STORIES}/${section}.json?api-key=${API_KEY}`;
  return fetch(url).then(res => res.json());
};
