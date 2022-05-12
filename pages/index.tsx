import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>FakeYa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:bg-food flex h-[85vh] flex-col items-center justify-center gap-10 pb-[60px] text-white ">
        <div className="font-lato ">
          <h1 className="text-[2.5rem] font-[700]">¡Pedí lo que quieras!</h1>
          <h2 className="text-[1rem]">
            Restaurantes, mercados, farmacias, kioscos y mucho más.
          </h2>
        </div>
        <div className="h-[90px] w-[60%] ">
          <span className="font-muli text-[1.05rem] font-[800] ">
            Ingresá tu dirección
          </span>
        </div>
      </main>
    </Layout>
  )
}

export default Home
