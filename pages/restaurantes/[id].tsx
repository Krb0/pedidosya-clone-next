import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Restaurante/Header'
import Layout from '../../components/Restaurante/Layout'
const Negocio: NextPage = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export default Negocio
