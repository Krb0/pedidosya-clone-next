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
const Restaurantes: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [cookies] = useCookies()
  const router = useRouter()
  useEffect(() => {
    if (cookies.address === '') {
      router.push('/')
    } else {
      setLoading(false)
    }
  }, [cookies])

  if (loading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <img
          src={
            'https://live.pystatic.com/webassets/AppscoreWeb/monolith/4.0.48/images/monolith-shopListLoader.cca36f65.png'
          }
        />
      </div>
    )
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
