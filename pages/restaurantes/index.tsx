import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LeftPanel from '../../components/Restaurantes/LeftPanel'
import MiddlePanel from '../../components/Restaurantes/MiddlePanel'
import RightPanel from '../../components/Restaurantes/RightPanel'
import Layout from '../../Layout'
import { useCookies } from 'react-cookie'
import useRestaurant from '../../hooks/useRestaurant'
import Loader from '../../components/Loader'
const Restaurantes: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [cookies] = useCookies()
  const [data] = useRestaurant()
  const router = useRouter()
  useEffect(() => {
    if (cookies.address === '') {
      router.push('/')
    } else {
      setLoading(false)
    }
  }, [cookies])

  if (loading) return <Loader />
  return (
    <Layout>
      <div className="max-w-screen bg-[##F9F6F4] flex min-h-screen pt-[24px] ">
        <LeftPanel />
        <MiddlePanel data={data?.restaurantes ? data.restaurantes : []} />
        <RightPanel />
      </div>
    </Layout>
  )
}

export default Restaurantes
