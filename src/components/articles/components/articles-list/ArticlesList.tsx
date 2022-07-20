import { FunctionComponent } from 'react';
import { MEDIA_QUERY } from 'constants/screenSize';
import { ArticleListItemType } from 'models/articles-list-item';
import { useArticlesList } from 'hooks/useArticlesList';
import { useMediaQuerySSR } from 'hooks/useMediaQuerySSR';
import { ArticlesListItem } from './components/articles-list-item/ArticlesListItem';

import styles from './styles.module.scss';

type Props = {
  section: string;
};

export const ArticlesList: FunctionComponent<Props> = ({ section }) => {
  const { articles, isLoading, isError } = useArticlesList(section);
  const isDesktop = useMediaQuerySSR(MEDIA_QUERY);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error with fetching data, try later</div>;

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
