import { ArticleListItemType } from 'models/articles-list-item';
import { articlesListFetcher } from 'service/articlesListFetcher';
import useSWR from 'swr';

type UseStories = {
  stories: ArticleListItemType[];
  isLoading: boolean;
  isError: boolean;
};

export const useArticlesList = (section: string): UseStories => {
  const { data, error } = useSWR(section, articlesListFetcher);

  return {
    stories: data && data.results,
    isLoading: !error && !data,
    isError: error,
  };
};
