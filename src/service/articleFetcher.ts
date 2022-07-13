import { API_KEY } from 'constants/api';

export const articlesFetcher = async (baseUrl: string) => {
  const url = `${baseUrl}&api-key=${API_KEY}`;

  return fetch(url).then(res => res.json());
};
