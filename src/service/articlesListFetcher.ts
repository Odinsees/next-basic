import { API_KEY, TOP_ARTICLES } from 'constants/api';

export const articlesListFetcher = async (section: string) => {
  const url = `${TOP_ARTICLES}/${section}.json?api-key=${API_KEY}`;

  return fetch(url).then(res => res.json());
};
