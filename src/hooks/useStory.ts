import { TOP_STORIES } from '@constants/api';

import { Story } from '@models/story';

import { storyFetcher } from '@service/storyFetcher';

import useSWR from 'swr';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

type StoryFetcher = {
  stories: Story[];
  isLoading: boolean;
  isError: boolean;
};

export const useStory = (section: string): StoryFetcher => {
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
