import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleListItemType } from 'models/articles-list-item';
import { formatDate } from 'formatters/date';
import { SectionTitle } from 'components/common/section-title/SectionTitle';

import styles from './styles.module.scss';

type Props = {
  article: ArticleListItemType;
  isDesktop: boolean;
};

export const ArticlesListItem: FunctionComponent<Props> = ({
  article,
  isDesktop,
}) => {
  const articleId = article.uri.split('/').slice(-1)[0];

  return (
    <>
      <Link href={`articles/${articleId}`}>
        <div className={styles.articlesListItem}>
          <div className={styles.articleInfo}>
            <div>
              <div className={styles.articleHeader}>
                <SectionTitle title={article.section} />
                {!isDesktop && (
                  <p className={styles.articleDate}>
                    {formatDate(article.updated_date)}
                  </p>
                )}
              </div>
              <h4 className={styles.articleTitle}>{article.title}</h4>
              <p className={styles.articlePreview}>{article.abstract}</p>
            </div>
            {isDesktop && (
              <p className={styles.articleDate}>
                {formatDate(article.updated_date)}
              </p>
            )}
          </div>
          <div className={styles.articleImage}>
            <Image
              src={article.multimedia[0].url}
              alt="photo"
              width={375}
              height={280}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </Link>
    </>
  );
};
