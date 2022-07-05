import Footer from './moddules/footer'
import Header from './moddules/header'
import { Module } from './Module'

export const Page = (props: any) => {
  if (props.error) {
    console.log('page props error')
    return null
  }
  return (
    <div>
      <Header />
      <main>
        {/* {props.stories.body.map((component: any, i: number) => {
          const componentProps = {
            ...component,
          }
          return <Module key={i} componentProps={componentProps} />
        })} */}
        <Module />
      </main>
      <Footer />
    </div>
  )
}
