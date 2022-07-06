import Moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import useSection from '../../../api/api'
import style from './StoriesList.module.scss'

function StoriesList() {
  const formatDate = (date: Date) => {
    const formatDate = Moment(date).format('MMM DD, YYYY, HH:mm')
    return formatDate
  }

  const { stories, isLoading, isError } = useSection('technology')
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return stories.map((story: any) => {
    return (
      <div key={uuidv4()} className={style.storyContainer}>
        <div className={style.storyInfo}>
          <div className={style.storyDescription}>
            <p className={style.storySection}>{story.section}</p>
            <h2 className={style.storyTitle}>{story.title}</h2>
            <p className={style.storyAbstract}>{story.abstract}</p>
          </div>
          <p className={style.storyDate}>{formatDate(story.updated_date)}</p>
        </div>
        <div className={style.storyImage}>
          <img src={story.multimedia[0].url} alt="photo" />
        </div>
      </div>
    )
  })
}

export default StoriesList
