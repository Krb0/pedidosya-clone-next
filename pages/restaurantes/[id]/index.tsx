import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../../../components/Restaurante/Header'
import Layout from '../../../components/Restaurante/Layout'
import LeftPanel from '../../../components/Restaurante/LeftPanel'
import MiddlePanel from '../../../components/Restaurante/MiddlePanel'
import Opinion from '../../../components/Restaurante/Opinion'
import RightPanel from '../../../components/Restaurante/RightPanel'
import useRestaurant from '../../../hooks/useRestaurant'
const Negocio: NextPage = () => {
  const router = useRouter()
  const id = router.query.id?.toString()
  const [data, loading] = useRestaurant(router.query.id?.toString())

  return (
    <Layout>
      <Header data={data?.restaurante ? data.restaurante : {}} />
      <div className="bg-[#F9F6F4]">
        <Opinion rating={4.5} id={id!} />
        <div className="max-w-screen flex min-h-screen pt-[24px] ">
          <LeftPanel />
          <MiddlePanel />
          <RightPanel />
        </div>
      </div>
    </Layout>
  )
}

export default Negocio
