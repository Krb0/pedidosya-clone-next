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
          <h1 className="text-[2.75rem] font-[700]">¡Pedí lo que quieras!</h1>
          <h2 className="text-[1rem]">
            Restaurantes, mercados, farmacias, kioscos y mucho más.
          </h2>
        </div>
        <div className="flex w-[60%] flex-col gap-4">
          <span className="font-muli text-[1.05rem] font-[800]">
            Ingresá tu dirección
          </span>
          <div className="flex h-[64px] w-[100%] ">
            <div className="flex h-full w-[100%] items-center justify-center rounded-full bg-white">
              <input className="h-full" placeholder="Ingresa" />
            </div>
            <button className="ml-[20px] h-full w-[160px] rounded-full bg-[#FA0050]">
              Buscar
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
