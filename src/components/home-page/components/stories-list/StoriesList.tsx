import { FunctionComponent } from 'react'
import styles from './styles.module.scss'
import Moment from 'moment'
import { StoryFetcher } from '@service/storyFetcher'
import { Story } from '@models/story'
import Image from 'next/image'

export const StoriesList: FunctionComponent = () => {
  const formatDate = (date: Date) => {
    const formatDate = Moment(date).format('MMM DD, YYYY, HH:mm')
    return formatDate
  }

  const { stories, isLoading, isError } = StoryFetcher('technology')
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return (
    <div className={styles.container}>
      {stories.map((story: Story, index) => {
        return (
          <div key={index} className={styles.storyContainer}>
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
        )
      })}
    </div>
  )
}
