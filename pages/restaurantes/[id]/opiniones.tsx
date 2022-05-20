import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Negocio: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      opiniones del id: {id}
      <Link href={'/restaurantes/' + id}>
        <div className="w-min cursor-pointer bg-red-500 p-4 text-white ">
          volver
        </div>
      </Link>
    </div>
  )
}

export default Negocio
