import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_NOT_FOUND_URL } from 'constants/images';
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

  if (!article.section || !article.title || !article.abstract) {
    return null;
  }

  return (
    <Link href={`article/${articleId}`}>
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
            src={article?.multimedia?.[0].url ?? IMAGE_NOT_FOUND_URL}
            alt="photo"
            width={375}
            height={280}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </Link>
  );
};
