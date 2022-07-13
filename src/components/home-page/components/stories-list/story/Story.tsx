import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Story as StoryType } from 'models/story';
import { formatDate } from 'formatters/date';
import { SectionTitle } from 'components/common/section-title/SectionTitle';
import styles from './styles.module.scss';
import Link from 'next/link';

type Props = {
  story: StoryType;
  isDesktop: boolean;
};

export const Story: FunctionComponent<Props> = ({ story, isDesktop }) => {
  const articleId = story.uri.split('/').slice(-1)[0];
  return (
    <>
      <Link href={`story/${articleId}`}>
        <div className={styles.container}>
          <div className={styles.storyInfo}>
            <div>
              <div className={styles.storyHeader}>
                <SectionTitle title={story.section} />
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
              className={styles.storyImage}
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
