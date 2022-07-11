import { API_KEY, TOP_STORIES } from '@constants/api';

import { Story } from '@models/story';

import { storyFetcher } from '@service/storyFetcher';

import useSWR from 'swr';

type StoryFetcher = {
  stories: Story[];
  isLoading: boolean;
  isError: boolean;
};

export const useStories = (section: string): StoryFetcher => {
  const { data, error } = useSWR(
    `${TOP_STORIES}/${section}.json?api-key=${API_KEY}`,
    storyFetcher,
  );

  return {
    stories: data && data.results,
    isLoading: !error && !data,
    isError: error,
  };
};
