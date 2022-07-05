import type { NextPage } from 'next'
import { Page } from '../components/Page'

//SSR
// export async function getServerSideProps(props: any) {
//   //return getStories(props);
// }

const Home: NextPage = (props: any) => {
  return <Page {...props} />
}

export default Home
