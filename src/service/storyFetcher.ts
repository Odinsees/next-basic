import fetch from 'unfetch';

export const storyFetcher = async (url: string) => {
  return fetch(url).then(response => response.json());
};
