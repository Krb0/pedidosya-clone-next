import type { NextPage } from 'next'
import Head from 'next/head'
import LeftPanel from '../../components/Restaurantes/LeftPanel'
import MiddlePanel from '../../components/Restaurantes/MiddlePanel'
import RightPanel from '../../components/Restaurantes/RightPanel'
import Layout from '../../Layout'

const Restaurantes: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-screen flex min-h-screen bg-[#F9F6F4] pt-[24px] ">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
      </div>
    </Layout>
  )
}

export default Restaurantes
