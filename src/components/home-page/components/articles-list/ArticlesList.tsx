import { FunctionComponent } from 'react';
import { MEDIA_QUERY } from 'constants/screenSize';
import { ArticleListItemType } from 'models/articles-list-item';
import { useArticlesList } from 'hooks/useArticlesList';
import { useMediaQuery } from 'usehooks-ts';
import { ArticlesListItem } from './components/articles-list-item/ArticlesListItem';

import styles from './styles.module.scss';

export const ArticlesList: FunctionComponent = () => {
  const { articles, isLoading, isError } = useArticlesList('technology');
  const isDesktop = useMediaQuery(MEDIA_QUERY);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.articlesList}>
      {articles.map((article: ArticleListItemType) => {
        return (
          <ArticlesListItem
            article={article}
            isDesktop={isDesktop}
            key={article.uri}
          />
        );
      })}
    </div>
  );
};
