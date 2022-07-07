import StoriesList from './common/storiesList'
import Footer from './modules/footer'
import Header from './modules/header'

export const HomePage = (props: any) => {
  return (
    <div className={'layout'}>
      <Header />
      <div className="container">
        <main>
          <StoriesList />
        </main>
      </div>
      <Footer />
    </div>
  )
}
