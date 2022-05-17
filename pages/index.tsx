import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../Layout'
import MainHero from '../components/Home/MainHero'
import Info from '../components/Home/Info'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>FakeYa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHero />
        <Info />
      </main>
    </Layout>
  )
}

export default Home
