import { Article } from '@models/article';

import { SEARCH_STORY } from '@constants/api';
import { articlesFetcher } from '@service/articleFetcher';

import useSWR from 'swr';

type UseArticle = {
  article: Article;
  isLoading: boolean;
  isError: boolean;
};

export const useArticle = (id: string | string[] | undefined): UseArticle => {
  const { data, error } = useSWR(
    `${SEARCH_STORY}?fq=uri:("nyt://article/${id}")`,
    articlesFetcher,
  );

  return {
    article: data && data.response.docs,
    isLoading: !error && !data,
    isError: error,
  };
};
