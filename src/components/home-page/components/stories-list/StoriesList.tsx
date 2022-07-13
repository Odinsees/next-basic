import { FunctionComponent } from 'react';
import { Story as StoryType } from 'models/story';
import { useStories } from 'hooks/useStories';
import { useMediaQuery } from 'usehooks-ts';
import { Story } from './story/Story';
import styles from './styles.module.scss';

export const StoriesList: FunctionComponent = () => {
  const { stories, isLoading, isError } = useStories('technology');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.container}>
      {stories.map((story: StoryType) => {
        return <Story story={story} isDesktop={isDesktop} key={story.uri} />;
      })}
    </div>
  );
};
