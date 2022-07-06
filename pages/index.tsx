import type { NextPage } from 'next'
import StoriesList from '../components/common/storiesList'

// SSR
// export async function getServerSideProps(props: any) {
//   return useSection()
// }

const Home: NextPage = (props: any) => {
  return <StoriesList />
}

export default Home
