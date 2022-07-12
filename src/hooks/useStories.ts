import { TOP_STORIES } from '@constants/api';

import { Story } from '@models/story';

import { storiesFetcher } from '@service/storiesFetcher';

import useSWR from 'swr';

type UseStories = {
  stories: Story[];
  isLoading: boolean;
  isError: boolean;
};

export const useStories = (section: string): UseStories => {
  const { data, error } = useSWR(
    `${TOP_STORIES}/${section}.json`,
    storiesFetcher,
  );

  return {
    stories: data && data.results,
    isLoading: !error && !data,
    isError: error,
  };
};
