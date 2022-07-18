import { API_KEY, SEARCH_ARTICLE } from 'constants/api';

export const articlesFetcher = async (id: string | string[] | undefined) => {
  const url = `${SEARCH_ARTICLE}?fq=uri:("nyt://article/${id}")&api-key=${API_KEY}`;

  return fetch(url).then(res => res.json());
};
