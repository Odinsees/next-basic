import StoriesList from './common/storiesList'
import Footer from './modules/footer'
import Header from './modules/header'

export const HomePage = (props: any) => {
  return (
    <div className={'layout'}>
      <div className={'container'}>
        <Header />
        <main>
          <StoriesList />
        </main>
        <Footer />
      </div>
    </div>
  )
}
