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
      <main>
        <h1>FakeYa</h1>
      </main>
    </Layout>
  )
}

export default Home
