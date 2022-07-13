import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleListItemType } from 'models/articles-list-item';
import { formatDate } from 'formatters/date';
import { SectionTitle } from 'components/common/section-title/SectionTitle';

import styles from './styles.module.scss';

type Props = {
  story: ArticleListItemType;
  isDesktop: boolean;
};

export const ArticlesListItem: FunctionComponent<Props> = ({
  story,
  isDesktop,
}) => {
  const articleId = story.uri.split('/').slice(-1)[0];

  return (
    <>
      <Link href={`story/${articleId}`}>
        <div className={styles.container}>
          <div className={styles.storyInfo}>
            <div>
              <div className={styles.storyHeader}>
                <div>
                  <SectionTitle title={story.section} />
                </div>
                {!isDesktop && (
                  <p className={styles.storyDate}>
                    {formatDate(story.updated_date)}
                  </p>
                )}
              </div>
              <h4 className={styles.storyTitle}>{story.title}</h4>
              <p className={styles.storyPreview}>{story.abstract}</p>
            </div>
            {isDesktop && (
              <p className={styles.storyDate}>
                {formatDate(story.updated_date)}
              </p>
            )}
          </div>
          <div className={styles.storyImage}>
            <Image
              src={story.multimedia[0].url}
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
