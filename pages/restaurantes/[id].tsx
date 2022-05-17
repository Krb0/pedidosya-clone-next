import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../Layout'

const Negocio: NextPage = () => {
  const { query } = useRouter()
  console.log(query.id)
  return <Layout>hola</Layout>
}

export default Negocio
