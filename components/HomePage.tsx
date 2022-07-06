import StoriesList from './common/storiesList'
import Footer from './moddules/footer'
import Header from './moddules/header'
import style from './HomePage.module.scss'

export const HomePage = (props: any) => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.layout__body}>
        <StoriesList />
      </main>
      <Footer />
    </div>
  )
}
