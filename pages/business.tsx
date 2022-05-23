import { useMutation } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { type } from 'os'
import { useRef, useState } from 'react'
import Layout from '../Layout'
import { ADD_RESTAURANT } from '../models/restaurants/restaurants.mutations'

const Home: NextPage = () => {
  const [addRestaurant, { data, loading, error }] = useMutation(ADD_RESTAURANT)
  const [datos, setDatos] = useState({
    name: '',
    type: 'Restaurante',
    address: '',
    logo: '',
    bg: '',
    shipping: 0,
    minimum: 0,
  })

  const submitHandler = (e: any) => {
    e.preventDefault()
    addRestaurant({
      variables: {
        nombre: datos.name,
        tipo: datos.type,
        address: datos.address,
        logo: datos.logo,
        fondo: datos.bg,
        envio: datos.shipping,
        minimo: datos.minimum,
      },
    })
  }

  return (
    <Layout>
      <div className="bg-business max-w-screen min-w-screen flex min-h-[93vh] items-center justify-center">
        <form
          className="font-lato flex min-w-[560px] flex-col gap-4 bg-white p-[40px] "
          onSubmit={(e) => submitHandler(e)}
        >
          <span className="font-muli mb-2 text-center text-[18px] font-[900] text-[#4a4a4a]">
            Registro de tu local
          </span>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="nombre"
            >
              Nombre del local
            </label>
            <input
              value={datos.name}
              onChange={(e) => setDatos({ ...datos, name: e.target.value })}
              required
              id="nombre"
              type="text"
              placeholder=""
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="tipo"
            >
              Tipo de Negocio
            </label>
            <select
              id="tipo"
              value={datos.type}
              onChange={(e) => setDatos({ ...datos, type: e.target.value })}
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            >
              <option value="Restaurante">Restaurante</option>
              <option value="Cafe">Café</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Mercado">Mercado</option>
              <option value="Kiosko">Kiosco</option>
              <option value="Mascotas">Mascotas</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="direccion"
            >
              Dirección del local
            </label>
            <input
              required
              value={datos.address}
              onChange={(e) => setDatos({ ...datos, address: e.target.value })}
              id="direccion"
              type="text"
              placeholder=""
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="logo"
            >
              Logo (URL)
            </label>
            <input
              required
              value={datos.logo}
              onChange={(e) => setDatos({ ...datos, logo: e.target.value })}
              id="logo"
              type="text"
              placeholder="https://www.placeholder.com/200x200"
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="fondo"
            >
              Fondo (URL)
            </label>
            <input
              required
              value={datos.bg}
              onChange={(e) => setDatos({ ...datos, bg: e.target.value })}
              id="fondo"
              type="text"
              placeholder="https://www.placeholder.com/200x200"
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="envio"
            >
              Envío (Precio)
            </label>
            <input
              required
              value={datos.shipping}
              onChange={(e) =>
                setDatos({ ...datos, shipping: parseInt(e.target.value) })
              }
              id="envio"
              type="number"
              min={0}
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="minimo"
            >
              Mínimo (precio)
            </label>
            <input
              required
              value={datos.minimum}
              onChange={(e) =>
                setDatos({ ...datos, minimum: parseInt(e.target.value) })
              }
              id="minimo"
              type="number"
              min={0}
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <button
            className="bg-[#F93F57] p-[10px] text-[16px] font-bold text-white "
            type="submit"
          >
            Comenzar
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Home
