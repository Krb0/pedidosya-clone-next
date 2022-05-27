import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useReducer, useState } from 'react'
import Loader from '../../../components/Loader'
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
  const [activeCategory, setActiveCategory] = useState(null)
  const [cart, dispatch] = useReducer(reducer, { items: [] })
  useEffect(() => {
    if (!loading && !data) {
      router.push('/restaurantes')
    }
  }, [loading])

  return (
    <>
      {data ? (
        <Layout>
          <Header data={data?.restaurante ? data.restaurante : {}} />
          <div className="bg-[#F9F6F4]">
            <Opinion opinions={data?.restaurante?.simpleOpinion} id={id!} />
            <div className="max-w-screen bg-[##F9F6F4] flex min-h-screen pt-[24px] ">
              <LeftPanel
                categorias={data.restaurante.categorias}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <MiddlePanel
                dispatch={dispatch}
                categorias={data.restaurante.categorias}
                activeCategory={activeCategory}
              />
              <RightPanel cart={cart} dispatch={dispatch} />
            </div>
          </div>
        </Layout>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Negocio

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD':
      const foundItem = state.items.find(
        (item: any) => action.payload._id === item._id
      )
      if (foundItem) {
        foundItem.count += 1

        return {
          ...state,
          total: state.items.reduce(
            (total: any, item: any) => total + item.count * item.precio,
            0
          ),
          items: [...state.items],
        }
      }
      state.items = [...state.items, { ...action.payload, count: 1 }]
      return {
        ...state,
        total: state.items.reduce(
          (total: any, item: any) => total + item.count * item.precio,
          0
        ),
      }
    case 'REMOVE':
      const found = state.items.find(
        (item: any) => item._id === action.payload._id
      )
      found.count -= 1
      if (found.count === 0) {
        state.items = state.items.filter(
          (item: any) => item._id !== action.payload._id
        )
      }
      return {
        ...state,
        total: state.items.reduce(
          (total: any, item: any) => total + item.count * item.precio,
          0
        ),
        items: [...state.items],
      }

    default:
      throw new Error()
  }
}
