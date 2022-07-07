import type { NextPage } from 'next'
import { HomePage } from '../components/home-page/HomePage'

// SSR
// export async function getServerSideProps(props: any) {
//   return useSection()
// }

const Home: NextPage = () => {
  return <HomePage />
}

export default Home
