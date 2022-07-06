import type { NextPage } from 'next'
import { HomePage } from '../components/HomePage'

// SSR
// export async function getServerSideProps(props: any) {
//   return useSection()
// }

const Home: NextPage = (props: any) => {
  return <HomePage />
}

export default Home
