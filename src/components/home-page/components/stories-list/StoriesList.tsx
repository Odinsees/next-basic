import Moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { StoryFetcher } from '../../../../service/storyFetcher'
import { FunctionComponent } from 'react'
import style from './style.module.scss'
import { Story } from '../../../../models/story'

export const StoriesList: FunctionComponent = () => {
  const formatDate = (date: Date) => {
    const formatDate = Moment(date).format('MMM DD, YYYY, HH:mm')
    return formatDate
  }

  const { stories, isLoading, isError } = StoryFetcher('technology')
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return (
    <div className="container">
      <div className={style.blockRow}>
        {stories.map((story: Story) => {
          return (
            <div key={uuidv4()} className={style.blockColumn}>
              <div className={style.blockItem}>
                <div className={style.storyDescription}>
                  <div>
                    <div className={style.storySectionBlock}>
                      <p className={style.storySection}>{story.section}</p>
                      <p className={style.storySectionDate}>
                        {formatDate(story.updated_date)}
                      </p>
                    </div>
                    <h2 className={style.storyTitle}>{story.title}</h2>
                    <p className={style.storyAbstract}>{story.abstract}</p>
                  </div>
                  <p className={style.storyDate}>
                    {formatDate(story.updated_date)}
                  </p>
                </div>
                <div className={style.storyImage}>
                  <img src={story.multimedia[0].url} alt="photo" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
