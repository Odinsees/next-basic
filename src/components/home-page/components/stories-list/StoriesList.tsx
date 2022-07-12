import { FunctionComponent } from 'react';

import { Story } from '@models/story';

import { useStories } from '@hooks/useStories';

import Moment from 'moment';
import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';

export const StoriesList: FunctionComponent = () => {
  const formatDate = (date: Date) => {
    const formatDate = Moment(date).format('MMM DD, YYYY, HH:mm');
    return formatDate;
  };
  const { stories, isLoading, isError } = useStories('technology');

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.container}>
      {stories.map((story: Story, index: number) => {
        const articleId = story.uri.split('/').slice(-1)[0];

        return (
          <Link key={index} href={`story/${articleId}`} shallow={true}>
            <div className={styles.storyContainer}>
              <div className={styles.storyInfo}>
                <p className={styles.storySection}>{story.section}</p>
                <h2 className={styles.storyTitle}>{story.title}</h2>
                <p className={styles.storyAbstract}>{story.abstract}</p>
                <p className={styles.storySectionDate}>
                  {formatDate(story.updated_date)}
                </p>
              </div>
              <div className={styles.storyImage}>
                <Image
                  src={story.multimedia[0].url}
                  alt="photo"
                  width={story.multimedia[0].width}
                  height={story.multimedia[0].height}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
