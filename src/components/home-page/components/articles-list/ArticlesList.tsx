import { FunctionComponent } from 'react';
import { ArticleListItemType } from 'models/articles-list-item';
import { useArticlesList } from 'hooks/useArticlesList';
import { MOBILE_SIZE } from 'constants/screenSize';
import { useMediaQuery } from 'usehooks-ts';
import { ArticlesListItem } from './articles-list-item/ArticlesListItem';

import styles from './styles.module.scss';

export const ArticlesList: FunctionComponent = () => {
  const { articles, isLoading, isError } = useArticlesList('technology');
  const isDesktop = useMediaQuery(`(min-width: ${MOBILE_SIZE}px)`);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.container}>
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
