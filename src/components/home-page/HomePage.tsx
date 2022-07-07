import { Footer } from '../common/footer/Footer'
import { FunctionComponent } from 'react'
import { StoriesList } from './components/stories-list/StoriesList'
import { Header } from '../common/header/Header'

export const HomePage: FunctionComponent = () => {
  return (
    <div className={'layout'}>
      <Header />
      <main>
        <StoriesList />
      </main>
      <Footer />
    </div>
  )
}
