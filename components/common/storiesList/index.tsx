import { v4 as uuidv4 } from 'uuid'
import useSection from '../../../api/api'
import Image from 'next/image'

function StoriesList() {
  const { stories, isLoading, isError } = useSection('technology')
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <ol>
      {stories.map((story: any) => {
        return (
          <div key={uuidv4()}>
            <div>
              <p>{story.section}</p>
              <h2>{story.title}</h2>
              <p>{story.abstract}</p>
            </div>
            <div>
              <Image
                src={story.multimedia[0].url}
                alt="photo"
                width={100}
                height={100}
              />
            </div>
          </div>
        )
      })}
    </ol>
  )
}

export default StoriesList
