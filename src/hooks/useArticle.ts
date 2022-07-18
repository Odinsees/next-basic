import { Article } from 'models/article';
import { articlesFetcher } from 'service/articleFetcher';
import useSWR from 'swr';

type UseArticle = {
  article: Article;
  isLoading: boolean;
  isError: boolean;
};

export const useArticle = (id: string): UseArticle => {
  const { data, error } = useSWR(id, articlesFetcher);

  return {
    article: data && data.response.docs[0],
    isLoading: !error && !data,
    isError: error,
  };
};
